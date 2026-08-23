import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidHeroCanvasProps {
  imageSrc: string;
  className?: string;
}

export const LiquidHeroCanvas: React.FC<LiquidHeroCanvasProps> = ({ imageSrc, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Mouse tracking state
    const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const velocity = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let prevMouseX = 0.5;
    let prevMouseY = 0.5;

    // Shader Uniforms
    const uniforms = {
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_velocity: { value: new THREE.Vector2(0.0, 0.0) },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_imageResolution: { value: new THREE.Vector2(2000, 1334) },
      u_texture: { value: null as THREE.Texture | null },
      u_reducedMotion: { value: prefersReducedMotion ? 1.0 : 0.0 },
    };

    // Vertex Shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Fragment Shader (Fluid / Liquid Displacement)
    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_velocity;
      uniform vec2 u_resolution;
      uniform vec2 u_imageResolution;
      uniform sampler2D u_texture;
      uniform float u_reducedMotion;

      varying vec2 vUv;

      void main() {
        // Correct aspect ratio for texture mapping
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float screenAspect = u_resolution.x / u_resolution.y;
        float imageAspect = u_imageResolution.x / u_imageResolution.y;
        
        vec2 uv = vUv;
        if (screenAspect > imageAspect) {
          float factor = imageAspect / screenAspect;
          uv.y = (uv.y - 0.5) * factor + 0.5;
        } else {
          float factor = screenAspect / imageAspect;
          uv.x = (uv.x - 0.5) * factor + 0.5;
        }

        if (u_reducedMotion > 0.5) {
          gl_FragColor = texture2D(u_texture, uv);
          return;
        }

        // Distance from cursor
        vec2 aspectMouse = u_mouse;
        vec2 aspectUv = st;
        aspectMouse.x *= screenAspect;
        aspectUv.x *= screenAspect;

        float dist = distance(aspectUv, aspectMouse);

        // Fluid displacement parameters
        float radius = 0.35;
        float influence = smoothstep(radius, 0.0, dist);

        // Calculate liquid wave displacement based on velocity & time
        float speed = length(u_velocity);
        float wave1 = sin(dist * 24.0 - u_time * 3.0) * 0.015;
        float wave2 = cos(dist * 16.0 + u_time * 2.5) * 0.012;

        vec2 displacement = (u_velocity * 0.25 + vec2(wave1, wave2)) * influence * clamp(speed * 3.0 + 0.2, 0.1, 1.5);

        // Sample texture with liquid displacement
        vec4 color = texture2D(u_texture, uv - displacement);
        
        // Add subtle graphite lighting accent near fluid distortion edge
        float edgeHighlight = influence * speed * 0.12;
        color.rgb += vec3(edgeHighlight * 1.0, edgeHighlight * 0.3, 0.0);

        gl_FragColor = color;
      }
    `;

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imageSrc, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      uniforms.u_texture.value = texture;
      uniforms.u_imageResolution.value.set(texture.image.width, texture.image.height);
    });

    // Create Plane Mesh
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
      const y = 1.0 - (e.clientY - rect.top) / rect.height; // Flip Y for WebGL

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

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let startTime = performance.now();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) * 0.001;
      uniforms.u_time.value = elapsedTime;

      // Smooth lerp mouse & velocity for fluid inertia
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      velocity.x += (velocity.targetX - velocity.x) * 0.08;
      velocity.y += (velocity.targetY - velocity.y) * 0.08;

      // Decay velocity when mouse stops
      velocity.targetX *= 0.92;
      velocity.targetY *= 0.92;

      uniforms.u_mouse.value.set(mouse.x, mouse.y);
      uniforms.u_velocity.value.set(velocity.x, velocity.y);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [imageSrc]);

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className || ''}`} />;
};
