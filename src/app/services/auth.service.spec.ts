import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthService', () => {
  let authService: AuthService;
  let localStorageServiceSpy: jasmine.SpyObj<LocalStorageService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const localStorageMock = jasmine.createSpyObj('LocalStorageService', ['setItem', 'removeItem', 'getItem']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: LocalStorageService, useValue: localStorageMock },
        { provide: Router, useValue: routerMock }
      ]
    });

    authService = TestBed.inject(AuthService);
    localStorageServiceSpy = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should save the token in localStorage when login is called', () => {
    const token = 'testToken';
    authService.login(token);
    expect(localStorageServiceSpy.setItem).toHaveBeenCalledWith('authToken', token);
    expect(localStorageServiceSpy.setItem.calls.count()).toBe(1); // Valida que se llame solo una vez
  });

  it('should remove the token and navigate to /login when logout is called', () => {
    authService.logout();
    expect(localStorageServiceSpy.removeItem).toHaveBeenCalledWith('authToken');
    expect(localStorageServiceSpy.removeItem.calls.count()).toBe(1); // Valida que se llame solo una vez
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
    expect(routerSpy.navigate.calls.count()).toBe(1); // Valida que el navegador se invoque solo una vez
  });

  it('should return true if token exists in isAuthenticated', (done) => {
    localStorageServiceSpy.getItem.and.returnValue('testToken');
    authService.isAuthenticated().subscribe(isAuth => {
      expect(isAuth).toBeTrue();
      done();
    });
  });

  it('should return false if token does not exist in isAuthenticated', (done) => {
    localStorageServiceSpy.getItem.and.returnValue(null);
    authService.isAuthenticated().subscribe(isAuth => {
      expect(isAuth).toBeFalse();
      done();
    });
  });

  it('should handle edge cases for empty or undefined tokens in isAuthenticated', (done) => {
    localStorageServiceSpy.getItem.and.returnValue('');
    authService.isAuthenticated().subscribe(isAuth => {
      expect(isAuth).toBeFalse();
      done();
    });
  });
});
