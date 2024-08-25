import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallsPage } from './pickup-calls.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;

  beforeEach(() => {
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule
    ]
    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should go to home on create new pickup call', () => {

  });

});
