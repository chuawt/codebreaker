
type Theme = 'Lollipop' | 'Animals' | 'Galactic' | 'Fantasy';

class AudioManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    // We'll initialize ctx on first interaction to comply with browser policies
  }

  private getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  private playOscillator(
    type: OscillatorType,
    freq: number,
    duration: number,
    volume: number = 0.1,
    ramp: boolean = true
  ) {
    if (!this.enabled) return;
    const ctx = this.getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    if (ramp) {
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    } else {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  playSelect(theme: Theme) {
    switch (theme) {
      case 'Lollipop':
        this.playOscillator('sine', 880, 0.1, 0.05);
        break;
      case 'Animals':
        this.playOscillator('triangle', 660, 0.08, 0.08);
        break;
      case 'Galactic':
        this.playOscillator('square', 440, 0.05, 0.03);
        break;
      case 'Fantasy':
        this.playOscillator('sine', 1100, 0.15, 0.05);
        break;
      default:
        this.playOscillator('sine', 440, 0.1, 0.05);
    }
  }

  playSubmit(theme: Theme) {
    const ctx = this.getCtx();
    const now = ctx.currentTime;
    
    switch (theme) {
      case 'Lollipop':
        this.playOscillator('sine', 440, 0.2, 0.1);
        setTimeout(() => this.playOscillator('sine', 880, 0.2, 0.1), 50);
        break;
      case 'Galactic':
        this.playOscillator('sawtooth', 220, 0.3, 0.05);
        break;
      default:
        this.playOscillator('triangle', 330, 0.2, 0.1);
    }
  }

  playConfirm() {
    this.playOscillator('sine', 1320, 0.1, 0.05);
  }

  playFeedback(theme: Theme, perfect: number, partial: number) {
    if (!this.enabled) return;
    const ctx = this.getCtx();
    const now = ctx.currentTime;
    
    // Play a sequence of short blips for feedback
    const total = perfect + partial;
    for (let i = 0; i < total; i++) {
      const isPerfect = i < perfect;
      const freq = isPerfect ? 880 : 440;
      const type = theme === 'Galactic' ? 'square' : 'sine';
      setTimeout(() => {
        this.playOscillator(type, freq, 0.05, 0.03);
      }, i * 100);
    }
  }

  playWin(theme: Theme) {
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    freqs.forEach((f, i) => {
      setTimeout(() => {
        this.playOscillator(theme === 'Galactic' ? 'sawtooth' : 'sine', f, 0.4, 0.1);
      }, i * 150);
    });
  }

  playLose(theme: Theme) {
    const freqs = [329.63, 293.66, 261.63]; // E4, D4, C4
    freqs.forEach((f, i) => {
      setTimeout(() => {
        this.playOscillator(theme === 'Galactic' ? 'square' : 'triangle', f, 0.5, 0.1);
      }, i * 200);
    });
  }
}

export const audioManager = new AudioManager();
