import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidHeroCanvasProps {
  videoSrc?: string;
  imageSrc?: string;
  className?: string;
}

export const LiquidHeroCanvas: React.FC<LiquidHeroCanvasProps> = ({ videoSrc, imageSrc, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // WebGL Scene & Orthographic Camera
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Cursor tracking state
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const velocity = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let prevMouseX = 0.5;
    let prevMouseY = 0.5;

    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: new THREE.Vector2(0.0, 0.0) },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_texture: { value: null as THREE.Texture | null },
      u_hasTexture: { value: 0.0 },
      u_reducedMotion: { value: prefersReducedMotion ? 1.0 : 0.0 },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // True Continuously Moving Fluid Shader (FBM Noise + Mouse Velocity Displacement)
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_velocity;
      uniform vec2 u_resolution;
      uniform sampler2D u_texture;
      uniform float u_hasTexture;
      uniform float u_reducedMotion;

      varying vec2 vUv;

      // GLSL Simplex Noise Helper Functions
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ) );
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float screenAspect = u_resolution.x / u_resolution.y;

        // Interactive mouse velocity displacement
        vec2 aspectMouse = u_mouse;
        vec2 aspectSt = st;
        aspectMouse.x *= screenAspect;
        aspectSt.x *= screenAspect;

        float dist = distance(aspectSt, aspectMouse);
        float mouseInfluence = smoothstep(0.45, 0.0, dist);
        float speed = length(u_velocity);

        // Continuous organic fluid movement (Time-based multi-octave FBM noise)
        float n1 = snoise(st * 3.5 + vec2(u_time * 0.2, u_time * 0.14));
        float n2 = snoise(st * 6.5 - vec2(u_time * 0.25, u_time * 0.18));
        
        // Combine continuous time fluid + mouse velocity displacement
        vec2 displacement = (vec2(n1, n2) * 0.06) + (u_velocity * mouseInfluence * clamp(speed * 8.0 + 0.3, 0.2, 2.5));

        if (u_hasTexture > 0.5) {
          vec4 texColor = texture2D(u_texture, st - displacement);
          // Boost fluid visual contrast and brightness so motion is unmistakably clear
          texColor.rgb = pow(texColor.rgb, vec3(0.85)) * 1.35;
          // Dynamic warm TMR orange liquid accent reflection on cursor movement
          float glow = mouseInfluence * (speed * 1.8 + 0.15);
          texColor.rgb += vec3(glow * 0.5, glow * 0.18, 0.0);
          gl_FragColor = texColor;
        } else {
          // Fallback procedural fluid rendering
          float fluidBase = snoise(st * 2.5 + displacement * 3.0 + vec2(u_time * 0.1));
          vec3 darkCharcoal = vec3(0.04, 0.04, 0.06);
          vec3 graphite = vec3(0.14, 0.16, 0.22);
          vec3 tmrOrange = vec3(1.0, 0.29, 0.0);

          vec3 color = mix(darkCharcoal, graphite, fluidBase * 0.5 + 0.5);
          float orangeStreak = smoothstep(0.6, 0.92, snoise(st * 4.0 - displacement * 2.0 + vec2(u_time * 0.12)));
          color = mix(color, tmrOrange, orangeStreak * 0.35);

          gl_FragColor = vec4(color * 1.25, 1.0);
        }
      }
    `;

    // Load Video or Image Texture
    let videoElem: HTMLVideoElement | null = null;

    if (videoSrc) {
      videoElem = document.createElement('video');
      videoElem.src = videoSrc;
      videoElem.loop = true;
      videoElem.muted = true;
      videoElem.playsInline = true;
      videoElem.autoplay = true;

      const videoTexture = new THREE.VideoTexture(videoElem);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      uniforms.u_texture.value = videoTexture;
      uniforms.u_hasTexture.value = 1.0;

      videoElem.play().catch(() => {
        console.warn("Autoplay muted video fallback active");
      });
    } else if (imageSrc) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageSrc, (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        uniforms.u_texture.value = texture;
        uniforms.u_hasTexture.value = 1.0;
      });
    }

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;

      mouse.targetX = x;
      mouse.targetY = y;

      const dx = x - prevMouseX;
      const dy = y - prevMouseY;
      velocity.targetX = dx;
      velocity.targetY = dy;

      prevMouseX = x;
      prevMouseY = y;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = 1.0 - (touch.clientY - rect.top) / rect.height;

      mouse.targetX = x;
      mouse.targetY = y;

      const dx = x - prevMouseX;
      const dy = y - prevMouseY;
      velocity.targetX = dx;
      velocity.targetY = dy;

      prevMouseX = x;
      prevMouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let startTime = performance.now();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) * 0.001;
      uniforms.u_time.value = elapsedTime;

      // Update VideoTexture on every frame when video is playing
      if (videoElem && videoElem.readyState >= videoElem.HAVE_CURRENT_DATA && uniforms.u_texture.value) {
        uniforms.u_texture.value.needsUpdate = true;
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      velocity.x += (velocity.targetX - velocity.x) * 0.08;
      velocity.y += (velocity.targetY - velocity.y) * 0.08;

      velocity.targetX *= 0.92;
      velocity.targetY *= 0.92;

      uniforms.u_mouse.value.set(mouse.x, mouse.y);
      uniforms.u_velocity.value.set(velocity.x, velocity.y);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();

      if (videoElem) {
        videoElem.pause();
        videoElem.src = '';
        videoElem.load();
      }

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [videoSrc, imageSrc]);

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className || ''}`} />;
};
