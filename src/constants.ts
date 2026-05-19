import { Difficulty, DifficultyConfig, PegColor, Theme } from './types';

export const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultyConfig> = {
  Easy: { pegs: 3, attempts: 8, colorCount: 6 },
  Classic: { pegs: 4, attempts: 10, colorCount: 6 },
  Challenging: { pegs: 5, attempts: 12, colorCount: 8 },
};

export const COLORS: PegColor[] = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'darkBlue', 'pink'];

export const COLOR_MAP: Record<PegColor, string> = {
  red: 'bg-rose-400 shadow-rose-400/40',
  yellow: 'bg-amber-100 shadow-amber-100/40',
  green: 'bg-emerald-300 shadow-emerald-300/40',
  blue: 'bg-sky-300 shadow-sky-300/40',
  orange: 'bg-orange-300 shadow-orange-300/40',
  purple: 'bg-violet-300 shadow-violet-300/40',
  darkBlue: 'bg-blue-800 shadow-blue-800/40',
  pink: 'bg-pink-300 shadow-pink-300/40',
};

export const THEME_PEGS: Record<Exclude<Theme, 'Lollipop'>, Record<PegColor, string>> = {
  Animals: {
    red: '🐧',
    yellow: '🐥',
    green: '🐸',
    blue: '🐳',
    orange: '🦊',
    purple: '🐷',
    darkBlue: '🦒',
    pink: '🐞',
  },
  Galactic: {
    red: '🚀',
    yellow: '🌙',
    green: '🌍',
    blue: '🛰️',
    orange: '🪐',
    purple: '☀️',
    darkBlue: '🌌',
    pink: '👽',
  },
  Fantasy: {
    red: '🐉',
    yellow: '⚔️',
    green: '🦄',
    blue: '🏰',
    orange: '❄️',
    purple: '🛡️',
    darkBlue: '🍎',
    pink: '🌈',
  }
};
