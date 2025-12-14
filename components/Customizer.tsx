import React, { useState } from 'react';
import { JerseyConfig } from '../types';
import { RefreshCcw, RotateCw } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CustomizerProps {
  config: JerseyConfig;
  setConfig: React.Dispatch<React.SetStateAction<JerseyConfig>>;
}

const Customizer: React.FC<CustomizerProps> = ({ config, setConfig }) => {
  const { t } = useLanguage();
  const [isBackView, setIsBackView] = useState(true);
  
  // Handlers
  const handleChange = (field: keyof JerseyConfig, value: string) => {
    setConfig(prev => ({ ...prev, [field]: value as any }));
  };

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

  const getTrimColor = () => {
     switch(config.color) {
       case 'red': return '#006233'; // Green on Red
       case 'green': return '#C1272D'; // Red on Green
       case 'white': return '#C1272D'; // Red on White
       case 'black': return '#C1272D'; // Red on Black
       default: return '#006233';
     }
  };

  const getTextColor = () => {
    return config.color === 'white' ? '#1a1a1a' : '#ffffff';
  };

  return (
    <section className="py-20 bg-white" id="customize-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-morocco-red uppercase mb-2">{t.customizer.title}</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900">{t.customizer.subtitle}</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* VISUAL PREVIEW */}
          <div className="w-full lg:w-1/2 relative flex justify-center bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-inner overflow-hidden">
             {/* Background Pattern for the container */}
             <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#006233 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center transition-all duration-500 ease-in-out">
              
              <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-2xl filter" style={{ transition: 'fill 0.3s ease' }}>
                <defs>
                   {/* Geometric Pattern Overlay */}
                   <pattern id="jerseyPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="black" strokeOpacity="0.05" strokeWidth="1" />
                   </pattern>
                </defs>
                
                <g transform="translate(0,0)">
                  {/* Jersey Body */}
                  <path 
                    d="M378.5,64.5 L345,32 L256,50 L167,32 L133.5,64.5 L90,120 L120,150 L150,130 L150,450 L362,450 L362,130 L392,150 L422,120 Z" 
                    fill={getJerseySvgColor()} 
                    stroke="rgba(0,0,0,0.05)" 
                    strokeWidth="1"
                  />
                  
                  {/* Pattern Fill */}
                  <path 
                    d="M378.5,64.5 L345,32 L256,50 L167,32 L133.5,64.5 L90,120 L120,150 L150,130 L150,450 L362,450 L362,130 L392,150 L422,120 Z" 
                    fill="url(#jerseyPattern)" 
                  />

                  {/* Collar / Neck - Changes based on View */}
                  {isBackView ? (
                     // Back Neck
                     <path d="M200,50 Q256,70 312,50" fill="none" stroke={getTrimColor()} strokeWidth="12" strokeLinecap="round" />
                  ) : (
                     // Front Neck
                     <path d="M200,50 Q256,120 312,50" fill="none" stroke={getTrimColor()} strokeWidth="12" strokeLinecap="round" />
                  )}

                  {/* Sleeve Cuffs */}
                  <rect x="95" y="110" width="30" height="8" transform="rotate(-45 110 112)" fill={getTrimColor()} />
                  <rect x="387" y="110" width="30" height="8" transform="rotate(45 402 112)" fill={getTrimColor()} />
                  
                  {/* Side Trim (Mockup detail) */}
                  <path d="M150,130 L150,450 L160,450 L160,250 Q160,130 150,130" fill={getTrimColor()} opacity="0.8" />
                  <path d="M362,130 L362,450 L352,450 L352,250 Q352,130 362,130" fill={getTrimColor()} opacity="0.8" />

                </g>
              </svg>

              {/* Text Overlay - Only on Back View */}
              {isBackView ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 pointer-events-none">
                  <span 
                    className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wider mb-2 drop-shadow-sm"
                    style={{ color: getTextColor() }}
                  >
                    {config.name || 'NAME'}
                  </span>
                  <span 
                    className="font-display font-bold text-8xl sm:text-9xl drop-shadow-sm"
                    style={{ color: getTextColor() }}
                  >
                    {config.number || '10'}
                  </span>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 pointer-events-none opacity-90">
                   {/* Front Elements like Logo */}
                   <div className="absolute top-[25%] left-[65%] w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm">
                      <span className="text-[10px] font-bold text-white">LOGO</span>
                   </div>
                   <div className="absolute top-[25%] right-[65%] w-12 h-12 flex items-center justify-center">
                      <span className="font-display font-bold text-lg text-white/80">PUMA</span>
                   </div>
                   <div className="absolute top-[50%] font-display text-4xl font-bold text-white/10 select-none">
                      {t.hero.officialDesign}
                   </div>
                </div>
              )}
            </div>

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 flex flex-col gap-2">
               <button 
                  onClick={() => setIsBackView(!isBackView)}
                  className="p-2 bg-white rounded-full shadow hover:bg-gray-100 text-morocco-green transition-transform hover:rotate-180 duration-500"
                  title={isBackView ? t.customizer.viewFront : t.customizer.viewBack}
                  type="button"
               >
                  <RotateCw size={20} />
               </button>
               <button 
                  onClick={() => setConfig({name: '', number: '', size: 'M', color: 'red'})}
                  className="p-2 bg-white rounded-full shadow hover:bg-gray-100 text-gray-500"
                  title={t.customizer.reset}
                  type="button"
               >
                  <RefreshCcw size={20} />
               </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-gray-600 shadow-sm border border-white">
               {isBackView ? t.customizer.viewBack : t.customizer.viewFront}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.customizer.color}</label>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.customizer.nameLabel}</label>
                  <input
                    type="text"
                    maxLength={12}
                    value={config.name}
                    onChange={(e) => {
                       handleChange('name', e.target.value.toUpperCase());
                       if(!isBackView) setIsBackView(true); // Auto switch to back when typing
                    }}
                    onFocus={() => setIsBackView(true)}
                    placeholder={t.customizer.namePlaceholder}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-red focus:border-morocco-red outline-none font-display uppercase tracking-wide"
                  />
                  <span className="text-xs text-gray-400 mt-1">{t.customizer.maxChars}</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.customizer.numberLabel}</label>
                  <input
                    type="text"
                    maxLength={2}
                    value={config.number}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      handleChange('number', val);
                      if(!isBackView) setIsBackView(true);
                    }}
                    onFocus={() => setIsBackView(true)}
                    placeholder="7"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-morocco-red focus:border-morocco-red outline-none font-display text-lg"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">{t.customizer.sizeLabel}</label>
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

              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm flex gap-3 items-start">
                 <RefreshCcw size={18} className="mt-0.5 flex-shrink-0" />
                 <p>{t.customizer.note}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customizer;