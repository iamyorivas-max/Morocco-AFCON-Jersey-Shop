import React from 'react';
import { JerseyConfig } from '../types';
import { RefreshCcw } from 'lucide-react';

interface CustomizerProps {
  config: JerseyConfig;
  setConfig: React.Dispatch<React.SetStateAction<JerseyConfig>>;
}

const Customizer: React.FC<CustomizerProps> = ({ config, setConfig }) => {
  
  // Handlers
  const handleChange = (field: keyof JerseyConfig, value: string) => {
    // Cast value to any to avoid TypeScript strict union type errors during build
    setConfig(prev => ({ ...prev, [field]: value as any }));
  };

  // Color mappings for visual representation
  const getColorClass = (c: string) => {
    switch(c) {
      case 'red': return 'bg-morocco-red text-white';
      case 'green': return 'bg-morocco-green text-white';
      case 'white': return 'bg-white text-gray-900 border border-gray-200';
      case 'black': return 'bg-gray-900 text-white';
      default: return 'bg-morocco-red text-white';
    }
  };

  const getJerseySvgColor = () => {
    switch(config.color) {
      case 'red': return '#C1272D';
      case 'green': return '#006233';
      case 'white': return '#ffffff';
      case 'black': return '#1a1a1a';
      default: return '#C1272D';
    }
  };

  const getTextColor = () => {
    return config.color === 'white' ? '#1a1a1a' : '#ffffff';
  };

  return (
    <section className="py-20 bg-white" id="customize-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-morocco-red uppercase mb-2">Personalization Studio</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900">DESIGN YOUR KIT</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* VISUAL PREVIEW */}
          <div className="w-full lg:w-1/2 relative flex justify-center bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-inner">
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center">
              
              {/* SVG Jersey Representation */}
              <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-2xl filter" style={{ transition: 'fill 0.3s ease' }}>
                <g transform="translate(0,0)">
                  {/* Base Shirt */}
                  <path 
                    d="M378.5,64.5 L345,32 L256,50 L167,32 L133.5,64.5 L90,120 L120,150 L150,130 L150,450 L362,450 L362,130 L392,150 L422,120 Z" 
                    fill={getJerseySvgColor()} 
                    stroke="rgba(0,0,0,0.1)" 
                    strokeWidth="2"
                  />
                  {/* Neck details */}
                  <path d="M200,50 Q256,90 312,50" fill="none" stroke={config.color === 'red' ? '#006233' : '#C1272D'} strokeWidth="8" />
                  {/* Sleeve stripes */}
                  <rect x="95" y="110" width="30" height="5" transform="rotate(-45 110 112)" fill="#F1B434" />
                  <rect x="387" y="110" width="30" height="5" transform="rotate(45 402 112)" fill="#F1B434" />
                </g>
              </svg>

              {/* Overlays for Name and Number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 pointer-events-none">
                <span 
                  className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wider mb-2"
                  style={{ color: getTextColor() }}
                >
                  {config.name || 'NAME'}
                </span>
                <span 
                  className="font-display font-bold text-8xl sm:text-9xl"
                  style={{ color: getTextColor() }}
                >
                  {config.number || '10'}
                </span>
              </div>
            </div>

            {/* Reset Button */}
            <button 
              onClick={() => setConfig({name: '', number: '', size: 'M', color: 'red'})}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-gray-100 text-gray-500"
              title="Reset"
              type="button"
            >
              <RefreshCcw size={20} />
            </button>
          </div>

          {/* CONTROLS */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Color</label>
                <div className="flex gap-4">
                  {['red', 'green', 'white', 'black'].map((c) => (
                    <button
                      key={c}
                      onClick={() => handleChange('color', c)}
                      className={`w-12 h-12 rounded-full border-4 shadow-sm transition transform hover:scale-110 ${
                        config.color === c ? 'border-morocco-gold scale-110' : 'border-transparent'
                      } ${getColorClass(c)}`}
                      aria-label={`Select ${c}`}
                      type="button"
                    />
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name on Back</label>
                  <input
                    type="text"
                    maxLength={12}
                    value={config.name}
                    onChange={(e) => handleChange('name', e.target.value.toUpperCase())}
                    placeholder="e.g. ZIYECH"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-red focus:border-morocco-red outline-none font-display uppercase tracking-wide"
                  />
                  <span className="text-xs text-gray-400 mt-1">Max 12 characters</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jersey Number</label>
                  <input
                    type="text"
                    maxLength={2}
                    value={config.number}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      handleChange('number', val);
                    }}
                    placeholder="7"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-red focus:border-morocco-red outline-none font-display text-lg"
                  />
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Size</label>
                <div className="flex flex-wrap gap-3">
                  {['S', 'M', 'L', 'XL', '2XL'].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleChange('size', s)}
                      className={`px-6 py-2 rounded-lg font-bold transition ${
                        config.size === s 
                          ? 'bg-gray-900 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      type="button"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm flex gap-3 items-start">
                 <RefreshCcw size={18} className="mt-0.5 flex-shrink-0" />
                 <p>Preview is approximate. The final product features high-quality heat-pressed vinyl printing that lasts.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customizer;