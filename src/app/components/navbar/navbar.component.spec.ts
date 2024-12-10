import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule para resolver ActivatedRoute

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule], // Agrega RouterTestingModule
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial isSubNavbarVisible set to false', () => {
    expect(component.isSubNavbarVisible).toBeFalse();
  });

  describe('showSubNavbar method', () => {
    it('should toggle isSubNavbarVisible from false to true', () => {
      component.showSubNavbar(new MouseEvent('click'));
      expect(component.isSubNavbarVisible).toBeTrue();
    });

    it('should toggle isSubNavbarVisible from true to false', () => {
      component.isSubNavbarVisible = true;
      component.showSubNavbar(new MouseEvent('click'));
      expect(component.isSubNavbarVisible).toBeFalse();
    });

    it('should call event.preventDefault when invoked', () => {
      const event = new MouseEvent('click');
      spyOn(event, 'preventDefault');
      component.showSubNavbar(event);
      expect(event.preventDefault).toHaveBeenCalled();
    });
  });
});
