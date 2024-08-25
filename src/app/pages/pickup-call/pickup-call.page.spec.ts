import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(() => {
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule
    ]
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickupcall();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
