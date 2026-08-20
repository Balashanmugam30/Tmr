import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { productsData } from '@/data/products';

export const ProductsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="space-y-4 mb-12">
          <SectionLabel>The Product Vault</SectionLabel>
          <h1 className="font-manrope font-extrabold text-4xl md:text-6xl text-tmr-softblack">
            Verified Chemical & Protection Formulations
          </h1>
          <p className="font-editorial text-2xl text-tmr-muted max-w-2xl">
            Official 3M, Meguiar's, Koch Chemie, and CarPro products used in our Tiruppur workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group bg-white border border-tmr-concrete/60 p-6 rounded-tmr transition-all duration-300 hover:border-tmr-orange hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-manrope font-bold text-tmr-muted mb-2">
                  <span className="uppercase text-tmr-orange">{product.brand}</span>
                  <span>{product.sku}</span>
                </div>
                <h2 className="font-manrope font-bold text-lg md:text-xl text-tmr-softblack group-hover:text-tmr-orange transition-colors mb-2">
                  {product.name}
                </h2>
                <p className="font-manrope text-xs text-tmr-muted line-clamp-2">
                  {product.shortDescription}
                </p>
              </div>
              <div className="pt-4 border-t border-tmr-concrete/40 mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-tmr-softblack group-hover:text-tmr-orange">
                <span>View Product Specs</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
