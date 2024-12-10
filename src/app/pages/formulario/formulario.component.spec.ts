import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './formulario.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the name field with custom validator', () => {
    const nameControl = component.contactForm.get('name');

    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalse();
    expect(nameControl?.errors?.['required']).toBeTrue();

    nameControl?.setValue('123');
    expect(nameControl?.valid).toBeFalse();
    expect(nameControl?.errors?.['invalidName']).toBeTrue();

    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBeTrue();
    expect(nameControl?.errors).toBeNull();
  });

  it('should log form value when form is valid', () => {
    spyOn(console, 'log');
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'test@example.com',
      birthdate: '2000-01-01',
      password: 'validPass1',
      confirmPassword: 'validPass1',
    });

    const event = new Event('submit');
    component.enviar(event);

    expect(console.log).toHaveBeenCalledWith('Formulario enviado:', component.contactForm.value);
  });

  it('should log an error when form is invalid', () => {
    spyOn(console, 'error');
    component.contactForm.setValue({
      name: '',
      email: '',
      birthdate: '',
      password: '',
      confirmPassword: '',
    });

    const event = new Event('submit');
    component.enviar(event);

    expect(console.error).toHaveBeenCalledWith('Formulario inválido');
  });
});
