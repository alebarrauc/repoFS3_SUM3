import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);

    // Limpiar el localStorage antes de cada prueba
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get an item from localStorage', () => {
    const key = 'testKey';
    const value = { name: 'Test', age: 30 };

    service.setItem(key, value); // Guardar el valor
    const storedValue = service.getItem(key); // Recuperar el valor

    expect(storedValue).toEqual(value); // Verificar que sea igual
  });

  it('should return null if the key does not exist in localStorage', () => {
    const storedValue = service.getItem('nonExistingKey');
    expect(storedValue).toBeNull();
  });

  it('should remove an item from localStorage', () => {
    const key = 'testKey';
    const value = { name: 'Test' };

    service.setItem(key, value); // Guardar el valor
    service.removeItem(key); // Eliminar el valor
    const storedValue = service.getItem(key); // Intentar recuperar el valor

    expect(storedValue).toBeNull(); // Verificar que no existe
  });

  it('should clear all items from localStorage', () => {
    service.setItem('key1', 'value1');
    service.setItem('key2', 'value2');

    service.clear(); // Limpiar todo el localStorage

    expect(service.getItem('key1')).toBeNull();
    expect(service.getItem('key2')).toBeNull();
  });
});
