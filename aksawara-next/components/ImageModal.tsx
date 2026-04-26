'use client';

import { useEffect } from 'react';

interface ImageModalProps {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function ImageModal({ imageSrc, imageAlt, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-auto rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
        {imageAlt && (
          <p className="text-white text-center mt-4">{imageAlt}</p>
        )}
      </div>
    </div>
  );
}