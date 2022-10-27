import { Capacitor } from '@capacitor/core';

export class CapacitorBase {
  get mobile(): boolean {
    return Capacitor.isNativePlatform();
  }

  get isIPhone(): boolean {
    return Capacitor.getPlatform() === 'ios';
  }
}