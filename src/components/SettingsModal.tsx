import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Candy, Sparkles, Rocket, Gem, Wand2 } from 'lucide-react';
import { Theme } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export default function SettingsModal({ isOpen, onClose, currentTheme, onThemeChange }: SettingsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`glass-card w-full max-w-sm p-6 sm:p-8 rounded-3xl space-y-6 sm:space-y-8 relative overflow-hidden my-auto max-h-[90vh] overflow-y-auto custom-scrollbar transition-all duration-500 ${
              currentTheme !== 'Lollipop' ? 'theme-' + currentTheme.toLowerCase() : ''
            } ${currentTheme === 'Animals' ? 'is-light-theme' : ''}`}
            style={{
              borderColor: currentTheme !== 'Lollipop' ? 'var(--theme-accent)' : undefined,
              boxShadow: currentTheme !== 'Lollipop' ? '0 0 40px var(--theme-surface-glow)' : undefined
            }}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold transition-colors duration-500" style={{ color: currentTheme !== 'Lollipop' ? 'var(--theme-accent)' : 'var(--color-primary)' }}>Settings</h2>
              <p className="text-white/40 text-sm">Customize your codebreaking experience.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest">Peg Theme</h3>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => onThemeChange('Lollipop')}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    currentTheme === 'Lollipop' 
                      ? 'bg-pink-300/20 border-pink-300 text-white' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-pink-300/20 flex items-center justify-center">
                      <Candy size={20} className={currentTheme === 'Lollipop' ? 'text-pink-300' : 'text-white/40'} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Lollipop</div>
                      <div className="text-[10px] opacity-60">Glossy 3D candy colors</div>
                    </div>
                  </div>
                  {currentTheme === 'Lollipop' && <div className="w-2 h-2 rounded-full bg-pink-300 shadow-[0_0_8px_rgba(249,168,212,0.8)]" />}
                </button>

                <button
                  onClick={() => onThemeChange('Animals')}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    currentTheme === 'Animals' 
                      ? 'bg-[#065f46] border-[#065f46] text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center">
                      {currentTheme === 'Animals' ? (
                        <span className="text-2xl leading-none">🐧</span>
                      ) : (
                        <Sparkles size={20} className="text-white/40" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Animals</div>
                      <div className="text-[10px] opacity-60">Cute animal characters</div>
                    </div>
                  </div>
                  {currentTheme === 'Animals' && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]" />}
                </button>

                <button
                  onClick={() => onThemeChange('Galactic')}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    currentTheme === 'Galactic' 
                      ? 'bg-blue-400/20 border-blue-400 text-white' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center">
                      <Rocket size={20} className={currentTheme === 'Galactic' ? 'text-blue-400' : 'text-white/40'} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Galactic</div>
                      <div className="text-[10px] opacity-60">Deep space mission</div>
                    </div>
                  </div>
                  {currentTheme === 'Galactic' && <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />}
                </button>

                <button
                  onClick={() => onThemeChange('Fantasy')}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    currentTheme === 'Fantasy' 
                      ? 'bg-purple-400/20 border-purple-400 text-white' 
                      : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center">
                      <Wand2 size={20} className={currentTheme === 'Fantasy' ? 'text-purple-400' : 'text-white/40'} />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Fantasy</div>
                      <div className="text-[10px] opacity-60">Whimsical magical realm</div>
                    </div>
                  </div>
                  {currentTheme === 'Fantasy' && <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Alpha Build 1.0.5</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
