import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private plaformService: PlatformService) {}
  setNumber(storageKey: StorageKey, data: number) {
    localStorage.setItem(storageKey, data.toString());
  }

  getNumber(storageKey: StorageKey): number | null {
    const value = this._getItem(storageKey);
    return value ? +value : null;
  }

  setItem(storageKey: StorageKey | string, data: Object) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  removeItem(storageKey: StorageKey | string) {
    localStorage.removeItem(storageKey);
  }

  getItem(storageKey: StorageKey | string): any {
    const value = this._getItem(storageKey);
    return value ? JSON.parse(value) : null;
  }

  private _getItem(storageKey: StorageKey | string) {
    if (this.plaformService.isBrowser) {
      return localStorage.getItem(storageKey);
    }
    return null;
  }
}

export enum StorageKey {
  AUTH_TOKEN = 'AUTH_TOKEN',
}
