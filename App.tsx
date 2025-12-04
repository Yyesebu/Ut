import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Smartphone, 
  Wifi, 
  WifiOff, 
  Clock, 
  MessageCircle, 
  Zap, 
  Filter,
  ExternalLink
} from 'lucide-react';
import { SERVICE_DATA } from './constants';
import { Brand, ServiceItem, Status } from './types';

// Utility for formatting currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

// WhatsApp Utility
const openWhatsApp = (model: string, price: number) => {
  const phoneNumber = '919505329034';
  const text = `Hello, I want to unlock ${model} - Price: ${price}. Is it available?`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<Brand>(Brand.ALL);

  // Filter Logic
  const filteredServices = useMemo(() => {
    return SERVICE_DATA.filter((item) => {
      const matchesBrand = selectedBrand === Brand.ALL || item.brand === selectedBrand;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        item.model.toLowerCase().includes(searchLower) || 
        item.serviceName.toLowerCase().includes(searchLower);
      
      return matchesBrand && matchesSearch;
    });
  }, [searchQuery, selectedBrand]);

  const brands = Object.values(Brand);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24 selection:bg-cyan-500 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6 md:py-10">
        
        {/* Header Section */}
        <header className="mb-8 text-center space-y-2">
          <div className="inline-flex items-center justify-center p-2 mb-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">System Online • 2024 DB</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PRO</span> MOBILE
            <span className="block text-2xl md:text-3xl font-bold text-slate-400 mt-1">SERVICES</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-medium">
            Tap on any model to order via WhatsApp
          </p>
        </header>

        {/* Search & Filter Section */}
        <div className="sticky top-4 z-30 space-y-4">
          
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-50 group-hover:opacity-100 transition duration-500 blur-sm"></div>
            <div className="relative flex items-center bg-slate-900 border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
              <div className="pl-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors">
                <Search size={22} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search model (e.g., 'Note 10', 'A50')..."
                className="w-full bg-transparent p-4 text-lg text-white placeholder-slate-500 focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="pr-4 text-slate-500 hover:text-white transition-colors text-sm font-medium"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 pt-1">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`
                  flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                  ${selectedBrand === brand 
                    ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500 hover:bg-slate-750'
                  }
                `}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Rate List Grid */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="text-yellow-400 fill-yellow-400" size={20} />
              Tap to Order
            </h2>
            <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
              {filteredServices.length} ITEMS
            </span>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-slate-800 border-dashed">
              <Filter className="mx-auto h-12 w-12 text-slate-600 mb-4" />
              <p className="text-slate-400 text-lg">No services found.</p>
              <p className="text-slate-600 text-sm">Try adjusting your search filters.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} item={service} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button (WhatsApp) */}
      <a
        href="https://wa.me/919505329034"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Need Help?
        </span>
      </a>
    </div>
  );
};

// Sub-component for individual Service Card
const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
  const isAvailable = item.status === Status.AVAILABLE;
  const isDown = item.status === Status.SERVER_DOWN;

  return (
    <button
      onClick={() => openWhatsApp(item.model, item.price)}
      className="w-full text-left group relative bg-slate-800/40 backdrop-blur-md border border-slate-700 hover:border-cyan-500/50 rounded-xl p-5 transition-all duration-300 hover:bg-slate-800/60 hover:shadow-[0_4px_20px_-2px_rgba(6,182,212,0.15)] hover:-translate-y-1"
    >
      {/* Brand Badge */}
      <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
        {item.brand}
      </div>

      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-lg flex-shrink-0 transition-colors duration-300
          ${isAvailable ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' : isDown ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-500'}
        `}>
          <Smartphone size={24} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white truncate group-hover:text-cyan-400 transition-colors">
            {item.model}
          </h3>
          <p className="text-slate-400 text-sm mt-0.5 line-clamp-1">
            {item.serviceName}
          </p>
          
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500 font-medium mb-1 uppercase tracking-wider flex items-center gap-1">
                Price <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-xl font-bold text-white drop-shadow-sm group-hover:text-cyan-100 transition-colors">
                {formatCurrency(item.price)}
              </p>
            </div>
            
            <div className={`
              flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border
              ${isAvailable 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : isDown 
                  ? 'bg-red-500/10 border-red-500/20 text-red-400' 
                  : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
              }
            `}>
              {isAvailable ? <Wifi size={12} /> : isDown ? <WifiOff size={12} /> : <Clock size={12} />}
              {item.status}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default App;