import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {DataService} from "../data.service";
import {of} from "rxjs";
import {COUNTRY_LIST} from "../test-utils/DummyData";


xdescribe("HomeComponent", () => {

  let component: HomeComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<HomeComponent>;
  let dataSpy: DataService;

  beforeEach(waitForAsync(() => {

    dataSpy = jasmine.createSpyObj('DataService',
      ['getAllCountries', 'getSearchByName', 'filterByRegion']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [],
      providers: [
        {provide: DataService, useClass: DataServiceStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('on init called',  fakeAsync(() => {
    component.ngOnInit();
    flush();
    expect(component.dataSource.length).toEqual(COUNTRY_LIST.length);
  }));

});

export class DataServiceStub {
  getAllCountries() {
    // console.log("stub getAllCountries called");
    return of(COUNTRY_LIST);
  }

}
