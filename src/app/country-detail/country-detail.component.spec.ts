import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from '@angular/core/testing';

import { CountryDetailComponent } from './country-detail.component';
import {AppModule} from "../app.module";
import {DataService} from "../data.service";
import {of} from "rxjs";
import {COUNTRY_LIST} from "../test-utils/DummyData";

describe('CountryDetailComponent', () => {
  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
  let mockDataService : any;

  beforeEach(waitForAsync(()=> {

    const dataServiceSpy = jasmine.createSpyObj("DataService",
      ["getAllCountries" , "getSearchByName", "filterByRegion"]);

     TestBed.configureTestingModule({
      declarations: [ CountryDetailComponent ],
      imports: [AppModule],
      providers: [
        {provide: DataService , useValue: dataServiceSpy}
      ]
    })
    .compileComponents().then(() => {
       fixture = TestBed.createComponent(CountryDetailComponent);
       component = fixture.componentInstance;
       mockDataService = TestBed.inject(DataService);
       mockDataService.dataSource = COUNTRY_LIST;
       fixture.detectChanges();

     });
  }));

  it('should create component', fakeAsync(() => {
    // mockDataService.getAllCountries.and.returnValue(of(COUNTRY_LIST));
    // mockDataService.dataSource = COUNTRY_LIST;
    // fixture.detectChanges();
    flush();
    expect(component).toBeTruthy();
  }));

});
