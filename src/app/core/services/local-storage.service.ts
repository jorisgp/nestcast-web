import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private plaformService: PlatformService) {}

  setNumber(storageKey: StorageKey, data: number) {
    this._setItem(storageKey, data.toString());
  }

  getNumber(storageKey: StorageKey): number | null {
    const value = this._getItem(storageKey);
    return value ? +value : null;
  }

  setItem(storageKey: StorageKey | string, data: Object) {
    this._setItem(storageKey, JSON.stringify(data));
  }

  removeItem(storageKey: StorageKey | string) {
    if (this.plaformService.isBrowser) {
      localStorage.removeItem(storageKey);
    }
  }

  getItem(storageKey: StorageKey | string): any {
    const value = this._getItem(storageKey);
    return value ? JSON.parse(value) : null;
  }

  private _setItem(storageKey: StorageKey | string, data: string) {
    if (this.plaformService.isBrowser) {
      localStorage.setItem(storageKey, data);
    }
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
