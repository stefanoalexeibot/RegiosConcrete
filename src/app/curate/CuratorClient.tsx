'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  ArrowRight, 
  Copy, 
  Check, 
  Zap, 
  Image as ImageIcon,
  LayoutGrid,
  Settings,
  X,
  RefreshCw,
  Search
} from 'lucide-react';

type Category = "driveways" | "patios" | "stamped" | "commercial";

type GalleryItem =
  | { type: "single"; src: string; category: Category }
  | { type: "pair"; before: string; after: string; category: Category };

interface CuratorProps {
  initialFiles: string[];
  initialConfig: GalleryItem[];
}

export default function CuratorClient({ initialFiles, initialConfig }: CuratorProps) {
  const [items, setItems] = useState<GalleryItem[]>(initialConfig);
  const [selectedBefore, setSelectedBefore] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'all' | 'published'>('all');

  // Pool of available files
  const availableFiles = useMemo(() => {
    if (!searchTerm) return initialFiles;
    return initialFiles.filter(f => f.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [initialFiles, searchTerm]);

  // Actions
  const addSingle = (file: string) => {
    const category: Category = file.includes('driveway') ? 'driveways' : 
                               file.includes('patio') ? 'patios' : 
                               file.includes('stamped') ? 'stamped' : 
                               file.includes('commercial') ? 'commercial' : 'patios';
    
    setItems(prev => [...prev, {
      type: 'single',
      src: `/images/gallery/${file}`,
      category
    }]);
  };

  const handlePairSelection = (file: string) => {
    if (!selectedBefore) {
      setSelectedBefore(file);
    } else {
      if (selectedBefore === file) {
        setSelectedBefore(null);
        return;
      }
      
      const category: Category = file.includes('driveway') ? 'driveways' : 
                                 file.includes('patio') ? 'patios' : 
                                 file.includes('stamped') ? 'stamped' : 
                                 file.includes('commercial') ? 'commercial' : 'patios';
      
      setItems(prev => [...prev, {
        type: 'pair',
        before: `/images/gallery/${selectedBefore}`,
        after: `/images/gallery/${file}`,
        category
      }]);
      setSelectedBefore(null);
    }
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateCategory = (index: number, category: Category) => {
    setItems(prev => prev.map((item, i) => i === index ? { ...item, category } : item));
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newItems.length) {
      [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
      setItems(newItems);
    }
  };

  const jsonOutput = useMemo(() => {
    return JSON.stringify(items, null, 2);
  }, [items]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`const allImages: GalleryItem[] = ${jsonOutput};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden text-zinc-300">
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/5 bg-black/50 backdrop-blur-xl flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <LayoutGrid size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">Gallery Curator <span className="text-blue-500">PRO</span></h1>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-1">Regios Concrete Professional Asset Manager</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Assets</span>
            <span className="text-lg font-black text-blue-500 leading-none">{items.length} Items</span>
          </div>
          
          <button 
            onClick={copyToClipboard}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border overflow-hidden relative group
              ${copied ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-white text-black hover:bg-black hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]'}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied to Clipboard' : 'Copy Gallery JSON'}
            </span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Available Pool */}
        <aside className="w-[450px] border-r border-white/5 bg-[#0d0d0d] flex flex-col z-40">
          <div className="p-6 space-y-4">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                <input 
                   type="text" 
                   placeholder="Search files..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono"
                />
             </div>
             
             <div className="flex bg-white/5 p-1 rounded-xl">
                <button 
                  onClick={() => setViewMode('all')}
                  className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${viewMode === 'all' ? 'bg-white/10 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  All Assets ({initialFiles.length})
                </button>
                <button 
                  onClick={() => setViewMode('published')}
                  className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${viewMode === 'published' ? 'bg-white/10 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  Published ({items.length})
                </button>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-20 custom-scrollbar space-y-3" data-lenis-prevent>
             {availableFiles.map((file) => {
               const isAlreadyPublished = items.some(item => 
                 item.type === 'single' ? item.src?.includes(file) : (item.before?.includes(file) || item.after?.includes(file))
               );
               const isSelectedBefore = selectedBefore === file;

               return (
                 <div key={file} className={`group relative bg-white/[0.03] border rounded-2xl p-3 flex gap-4 items-center transition-all duration-500 
                   ${isSelectedBefore ? 'border-amber-500/50 bg-amber-500/5' : 'border-white/5 hover:border-white/10 hover:bg-white/[0.05]'}`}>
                   <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-black shadow-xl">
                      <Image 
                        src={`/images/gallery/${file}`} 
                        alt={file} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        sizes="64px" 
                      />
                      {isAlreadyPublished && (
                        <div className="absolute inset-0 bg-blue-600/40 flex items-center justify-center">
                           <Check size={16} className="text-white drop-shadow-lg" />
                        </div>
                      )}
                   </div>
                   
                   <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono text-zinc-500 truncate mb-2">{file}</p>
                      <div className="flex gap-2">
                         <button 
                           onClick={() => addSingle(file)}
                           className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-[9px] font-black uppercase tracking-widest text-zinc-300 transition-all"
                         >
                           Add Single
                         </button>
                         <button 
                           onClick={() => handlePairSelection(file)}
                           className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all
                             ${isSelectedBefore ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'}`}
                         >
                           {isSelectedBefore ? 'Selecting After...' : 'Start Pair'}
                         </button>
                      </div>
                   </div>

                   {isSelectedBefore && (
                     <div className="absolute -right-2 -top-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-black font-black text-[10px]">!</div>
                   )}
                 </div>
               );
             })}
          </div>
        </aside>

        {/* Main Content: Gallery Structure */}
        <div className="flex-1 flex flex-col bg-black relative">
           <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-3">
                 <LayoutGrid size={16} />
                 Gallery Chronology
              </h2>
              <div className="flex gap-4">
                 <button className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors" onClick={() => setItems([])}>Clear All</button>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto p-8 pb-40 custom-scrollbar grid grid-cols-1 xl:grid-cols-2 gap-6" data-lenis-prevent>
              <AnimatePresence mode="popLayout">
                {items.map((item, index) => (
                  <motion.div 
                    key={index}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col gap-6 group hover:border-white/10 transition-colors relative"
                  >
                    <div className="flex items-start justify-between">
                       <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white/40 ring-4 ring-black">
                             {index + 1}
                          </div>
                          <div>
                             <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{item.type === 'pair' ? 'Transformation Pair' : 'Stand-alone Scene'}</span>
                             <div className="flex gap-2 mt-1">
                                {(['driveways', 'patios', 'stamped', 'commercial'] as Category[]).map(cat => (
                                  <button 
                                    key={cat}
                                    onClick={() => updateCategory(index, cat)}
                                    className={`px-2 py-0.5 rounded-sm text-[8px] font-black uppercase tracking-tighter transition-all ${item.category === cat ? 'bg-blue-600/20 text-blue-400 ring-1 ring-blue-500/30' : 'text-zinc-600 hover:text-zinc-400'}`}
                                  >
                                    {cat}
                                  </button>
                                ))}
                             </div>
                          </div>
                       </div>
                       
                       <div className="flex gap-2">
                          <button onClick={() => moveItem(index, 'up')} className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/10 text-zinc-500 hover:text-white transition-all"><RefreshCw size={14} className="rotate-90" /></button>
                          <button onClick={() => moveItem(index, 'down')} className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/10 text-zinc-500 hover:text-white transition-all"><RefreshCw size={14} className="-rotate-90" /></button>
                          <button onClick={() => removeItem(index)} className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white transition-all"><Trash2 size={14} /></button>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       {item.type === 'single' ? (
                         <div className="relative aspect-video flex-1 rounded-2xl overflow-hidden bg-black ring-1 ring-white/10">
                            <Image src={item.src} alt="Single" fill className="object-cover" sizes="400px" />
                            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                               <ImageIcon size={10} /> Single View
                            </div>
                         </div>
                       ) : (
                         <div className="flex-1 flex gap-4">
                            <div className="relative aspect-video flex-1 rounded-2xl overflow-hidden bg-black ring-1 ring-white/10">
                               <Image src={item.before} alt="Before" fill className="object-cover" sizes="400px" />
                               <div className="absolute top-4 left-4 bg-amber-500 px-3 py-1 rounded-full text-[8px] font-black text-black uppercase tracking-widest border border-white/10">BEFORE</div>
                            </div>
                            <div className="flex items-center text-zinc-700"><ArrowRight size={20} /></div>
                            <div className="relative aspect-video flex-1 rounded-2xl overflow-hidden bg-black ring-1 ring-white/10">
                               <Image src={item.after} alt="After" fill className="object-cover" sizes="400px" />
                               <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest border border-white/10">AFTER</div>
                               <div className="absolute bottom-4 right-4 bg-emerald-500/90 backdrop-blur-md p-1.5 rounded-lg text-white"><Zap size={12} className="fill-current" /></div>
                            </div>
                         </div>
                       )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>

           {/* Export Tray */}
           <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/95 to-transparent flex items-end justify-center pointer-events-none">
              <div className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 w-full max-w-4xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pointer-events-auto flex items-center justify-between gap-8">
                 <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Generated Configuration JSON</p>
                    <div className="bg-black/50 rounded-xl p-4 font-mono text-[10px] text-blue-400 overflow-hidden line-clamp-1 border border-white/5">
                       {jsonOutput}
                    </div>
                 </div>
                 <button 
                  onClick={copyToClipboard}
                  className={`shrink-0 flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-700 border
                    ${copied ? 'bg-emerald-500 border-emerald-500 text-white shadow-[0_0_40px_rgba(16,185,129,0.3)] scale-105' : 'bg-blue-600 border-blue-600 text-white hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_40px_rgba(37,99,235,0.3)]'}`}
                 >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? 'Ready to Paste' : 'Copy All JSON'}
                 </button>
              </div>
           </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(37, 99, 235, 0.5);
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        /* Hide site-wide floating widgets on the curator */
        [class*="whatsapp"], [id*="whatsapp"], .custom-cursor, #support-widget {
          display: none !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}
