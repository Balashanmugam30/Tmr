import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { Button } from '@/components/Button';
import { productsData } from '@/data/products';
import { companyData } from '@/data/company';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = productsData.find((p) => p.slug === slug) || productsData[0];

  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Hello TMR Car Care! I would like to inquire about the product: ${product.name} (SKU: ${product.sku}).`
  )}`;

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mb-8">
          <Link to="/products" className="text-xs font-manrope font-bold uppercase text-tmr-muted hover:text-tmr-orange transition-colors">
            ← Back to Product Vault
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionLabel>{product.brand}</SectionLabel>
            <h1 className="font-manrope font-extrabold text-3xl md:text-5xl text-tmr-softblack">
              {product.name}
            </h1>
            <p className="font-editorial text-2xl text-tmr-muted">{product.shortDescription}</p>
            <p className="font-manrope text-base text-tmr-softblack/80 leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="pt-4">
              <Button variant="accent" href={whatsappUrl} target="_blank">
                Inquire via WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white p-8 border border-tmr-concrete/60 rounded-tmr space-y-6">
            <h3 className="font-manrope font-bold text-lg text-tmr-softblack uppercase tracking-wider border-b border-tmr-concrete pb-3">
              Technical Specifications
            </h3>
            <div className="space-y-3 font-manrope text-sm">
              <div className="flex justify-between py-1 border-b border-tmr-concrete/30">
                <span className="text-tmr-muted">SKU Code</span>
                <span className="font-bold text-tmr-softblack">{product.sku}</span>
              </div>
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between py-1 border-b border-tmr-concrete/30">
                  <span className="text-tmr-muted">{spec.label}</span>
                  <span className="font-bold text-tmr-softblack">{spec.value}</span>
                </div>
              ))}
            </div>

            {product.sourceUrl && (
              <div className="pt-4 text-xs font-manrope text-tmr-muted">
                Official Manufacturer Source:{' '}
                <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-tmr-orange underline">
                  {product.sourceUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
