import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { LocalStorageService, StorageKey } from './local-storage.service';

describe('LocalStorageService', () => {
  let spectator: SpectatorService<LocalStorageService>;
  const createService = createServiceFactory(LocalStorageService);

  let mockJson = { test: 'test' };

  it('should...', () => {
    spectator = createService();
    expect(spectator.service).toBeTruthy();
  });

  describe('setItem', () => {
    it('should set data into local storage', () => {
      spectator = createService();

      window.Storage.prototype.setItem = jest.fn();
      spectator.service.setItem(StorageKey.AUTH_TOKEN, mockJson);

      expect(window.Storage.prototype.setItem).toBeCalledTimes(1);
      expect(window.Storage.prototype.setItem).toBeCalledWith(
        StorageKey.AUTH_TOKEN,
        '{"test":"test"}'
      );
    });
  });

  describe('getItem', () => {
    it('should get data from local storage', () => {
      spectator = createService();
      window.Storage.prototype.getItem = jest
        .fn()
        .mockReturnValue('{"test":"test"}');
      expect(spectator.service.getItem(StorageKey.AUTH_TOKEN)).toStrictEqual(
        mockJson
      );
    });
  });
});
