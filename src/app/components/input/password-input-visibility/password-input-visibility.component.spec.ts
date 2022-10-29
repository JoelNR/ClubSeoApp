import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordInputVisibilityComponent } from './password-input-visibility.component';

describe('PasswordInputVisibilityComponent', () => {
  let component: PasswordInputVisibilityComponent;
  let fixture: ComponentFixture<PasswordInputVisibilityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInputVisibilityComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
