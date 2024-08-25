import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { Router} from '@angular/router';
import { LoaderPage } from './loader.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IonicModule } from '@ionic/angular';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule
    ]
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  router = TestBed.get(Router);

  it('should go to login page after load', () =>{
    spyOn(router, 'navigate');
component.ngOnInit();

tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
});
