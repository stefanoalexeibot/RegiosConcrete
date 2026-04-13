'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Pair {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}

export default function SorterClient({ files }: { files: string[] }) {
  const [selectedBefore, setSelectedBefore] = useState<string | null>(null);
  const [selectedAfter, setSelectedAfter] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [label, setLabel] = useState('');
  const [copied, setCopied] = useState(false);

  const addPair = () => {
    if (selectedBefore && selectedAfter) {
      setPairs([
        ...pairs,
        {
          beforeSrc: `/images/gallery/${selectedBefore}`,
          afterSrc: `/images/gallery/${selectedAfter}`,
          label: label || 'New Project'
        }
      ]);
      setSelectedBefore(null);
      setSelectedAfter(null);
      setLabel('');
    }
  };

  const toggleBefore = (file: string) => {
    setSelectedBefore(prev => prev === file ? null : file);
  };

  const toggleAfter = (file: string) => {
    setSelectedAfter(prev => prev === file ? null : file);
  };

  const removePair = (index: number) => {
    setPairs(pairs.filter((_, i) => i !== index));
  };

  const copyToClipboard = () => {
    const data = JSON.stringify(pairs, null, 2);
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans pb-40">
      <header className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter mb-2 italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
            GALLERY SORTER PRO
          </h1>
          <p className="text-slate-400 max-w-2xl">
            1. Selecciona una foto de <b>Antes</b>. 2. Selecciona una de <b>Después</b>. 3. Haz clic en <b>"Ligar Pareja"</b>.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-sm font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors border border-white/10">
            Volver al Sitio
          </Link>
          <button 
            onClick={copyToClipboard}
            className={`text-sm font-black px-6 py-2 rounded-lg transition-all ${
              pairs.length > 0 ? "bg-primary hover:bg-blue-600 text-white" : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
            disabled={pairs.length === 0}
          >
            {copied ? "¡COPIADO!" : `COPIAR RESULTADOS (${pairs.length})`}
          </button>
        </div>
      </header>

      {/* Control Panel */}
      <div className="sticky top-4 z-50 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12 shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <div className="flex flex-col gap-1 min-w-[120px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Antes</span>
            <button 
              onClick={() => setSelectedBefore(null)}
              className={`h-12 flex items-center px-4 rounded-xl border-2 transition-all group ${selectedBefore ? "border-blue-500 bg-blue-500/10 text-blue-400" : "border-dashed border-slate-700 text-slate-700"}`}
            >
              <span className="text-xs truncate font-mono">{selectedBefore || "Pendiente..."}</span>
              {selectedBefore && <span className="ml-2 opacity-0 group-hover:opacity-100 text-[8px] font-bold">✖</span>}
            </button>
          </div>
          
          <div className="text-slate-700 text-2xl font-black">→</div>

          <div className="flex flex-col gap-1 min-w-[120px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Después</span>
            <button 
              onClick={() => setSelectedAfter(null)}
              className={`h-12 flex items-center px-4 rounded-xl border-2 transition-all group ${selectedAfter ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-dashed border-slate-700 text-slate-700"}`}
            >
              <span className="text-xs truncate font-mono">{selectedAfter || "Pendiente..."}</span>
              {selectedAfter && <span className="ml-2 opacity-0 group-hover:opacity-100 text-[8px] font-bold">✖</span>}
            </button>
          </div>

          <div className="flex flex-col gap-1 min-w-[150px]">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Etiqueta (Opcional)</span>
            <input 
              type="text" 
              placeholder="Ej: Patio en Iowa" 
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="h-12 bg-slate-800 border-2 border-slate-700 rounded-xl px-4 text-xs focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <button 
          onClick={addPair}
          disabled={!selectedBefore || !selectedAfter}
          className={`h-12 px-8 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
            selectedBefore && selectedAfter 
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 active:scale-95" 
              : "bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700"
          }`}
        >
          Ligar Pareja
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* All Images Grid */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-primary rounded-full" />
            Galería de Imágenes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {files.map((file) => (
              <div 
                key={file} 
                className={`group bg-slate-900 rounded-2xl overflow-hidden border transition-all duration-300 ${
                  selectedBefore === file ? "border-blue-500 ring-2 ring-blue-500/20" : 
                  selectedAfter === file ? "border-amber-500 ring-2 ring-amber-500/20" : 
                  "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img 
                    src={`/images/gallery/${file}`} 
                    alt={file}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-mono text-slate-400 truncate mb-3" title={file}>{file}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => toggleBefore(file)}
                      className={`text-[9px] font-black uppercase py-1.5 rounded transition-all ${selectedBefore === file ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400"}`}
                    >
                      {selectedBefore === file ? "QUITAR" : "ANTES"}
                    </button>
                    <button 
                      onClick={() => toggleAfter(file)}
                      className={`text-[9px] font-black uppercase py-1.5 rounded transition-all ${selectedAfter === file ? "bg-amber-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-amber-500/20 hover:text-amber-400"}`}
                    >
                      {selectedAfter === file ? "QUITAR" : "DESPUÉS"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Pairs List */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="sticky top-40 bg-slate-900 border border-white/10 rounded-2xl p-6 max-h-[70vh] flex flex-col">
            <h2 className="text-lg font-bold mb-4 flex justify-between items-center">
              Parejas Creadas
              <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">{pairs.length}</span>
            </h2>
            
            <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
              {pairs.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-xl">
                  <p className="text-xs text-slate-600 italic">No hay parejas ligadas</p>
                </div>
              ) : (
                pairs.map((p, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-3 border border-white/5 relative group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-blue-500/30">
                        <img src={p.beforeSrc} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-slate-500 text-xs text-center">→</div>
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-amber-500/30">
                        <img src={p.afterSrc} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 truncate uppercase tracking-tighter">{p.label}</div>
                    <button 
                      onClick={() => removePair(i)}
                      className="absolute top-2 right-2 text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            
            <button 
              onClick={copyToClipboard}
              disabled={pairs.length === 0}
              className="mt-6 w-full py-4 bg-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all disabled:bg-slate-800 disabled:text-slate-600"
            >
              {copied ? "¡COPIADO!" : "COPIAR LISTA FINAL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
