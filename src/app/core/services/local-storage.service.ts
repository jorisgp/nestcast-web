import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setNumber(storageKey: StorageKey, data: number) {
    localStorage.setItem(storageKey, data.toString());
  }

  getNumber(storageKey: StorageKey): number | null {
    const value = localStorage.getItem(storageKey);
    return value ? +value : null;
  }

  setItem(storageKey: StorageKey | string, data: Object) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  removeItem(storageKey: StorageKey | string) {
    localStorage.removeItem(storageKey);
  }

  getItem(storageKey: StorageKey | string): any {
    const value = localStorage.getItem(storageKey);
    return value ? JSON.parse(value) : null;
  }
}

export enum StorageKey {
  AUTH_TOKEN = 'AUTH_TOKEN',
}
