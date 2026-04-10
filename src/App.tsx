import React, { useState } from 'react';
import Parent from './pages/Parent';
import Haven from './pages/Haven';

export default function App() {
  const [currentPage, setCurrentPage] = useState('parent');

  if (currentPage === 'haven') {
    return <Haven onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'linen') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-soft text-charcoal-matte flex-col">
        <h1 className="text-5xl font-serif mb-4 text-forest-deep">Hz Linen</h1>
        <p className="mb-8 text-slate-muted font-light text-lg">Premium fabrics coming soon...</p>
        <button 
          onClick={() => setCurrentPage('parent')} 
          className="border-b border-charcoal-matte uppercase tracking-widest text-xs pb-1 hover:text-forest-deep hover:border-forest-deep transition-colors"
        >
          Back to Master House
        </button>
      </div>
    );
  }

  return <Parent onNavigate={setCurrentPage} />;
}
