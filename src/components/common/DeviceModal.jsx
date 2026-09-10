import React, { useEffect } from 'react';
import { BRAND_ASSETS } from '../../data/products';

export default function DeviceModal({ product, isOpen, onClose, onSelectOrder }) {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 lg:p-10 shadow-2xl relative flex flex-col gap-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md pr-12">
          <div>
            <span className="px-sm py-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider inline-block">
              {product.series}
            </span>
            <h3
              id="modal-title"
              className="font-headline-lg text-headline-lg text-on-surface mt-xs uppercase font-semibold tracking-tight"
            >
              {product.name}
            </h3>
            <p className="font-body-md text-body-md text-primary font-medium">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Product Visual & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-5 bg-surface-container-low p-md rounded-DEFAULT flex items-center justify-center min-h-[260px]">
            <img
              src={product.modalImage || product.deviceImage}
              alt={product.name}
              className="max-h-[280px] w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {product.modalDescription || product.description}
            </p>
            <div className="p-xs bg-surface-container rounded-DEFAULT flex items-center gap-xs text-on-surface font-body-sm text-body-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">pin_drop</span>
              <span>{product.availability}</span>
            </div>
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div>
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface mb-xs font-semibold">
            Technical Specifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-xs">
            {product.detailedSpecs?.map((spec, i) => (
              <div
                key={i}
                className="bg-surface-container-low p-sm rounded-DEFAULT flex flex-col"
              >
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                  {spec.label}
                </span>
                <span className="font-body-md text-body-md font-semibold text-on-surface mt-2xs">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer / Order CTA */}
        <div className="pt-sm flex flex-col sm:flex-row items-center justify-between gap-md border-t border-surface-variant/40">
          <div className="flex items-center gap-xs text-on-surface-variant font-body-sm text-body-sm">
            <img
              src={BRAND_ASSETS.kingsChatAvatar}
              alt="KingsChat"
              className="w-5 h-5 rounded-full object-contain"
            />
            <span>
              Direct Concierge: <strong className="text-on-surface">@OMNIATECH</strong>
            </span>
          </div>

          <a
            href="#kingschat-order"
            onClick={() => {
              onClose();
              if (onSelectOrder) onSelectOrder(product);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-xs px-xl py-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <img
              src={BRAND_ASSETS.kingsChatIcon}
              alt="KingsChat"
              className="w-5 h-5 rounded-full object-contain"
            />
            <span>Chat with us on KingsChat to order</span>
          </a>
        </div>
      </div>
    </div>
  );
}
