import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { DataService } from "../data.service";
import { of } from "rxjs";
import { COUNTRY_LIST } from "../test-utils/DummyData";
import {By} from "@angular/platform-browser";
import {AppModule} from "../app.module";
import {MatRow} from "@angular/material/table";

xdescribe("HomeComponent-Two", () => {

  let component: HomeComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<HomeComponent>;
  let mockDataService: any;

  beforeEach(waitForAsync(() => {

    const dataSpy = jasmine.createSpyObj('DataService', ['getAllCountries', 'getSearchByName', 'filterByRegion']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [AppModule],
      providers: [
        { provide: DataService, useValue: dataSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      mockDataService = TestBed.inject(DataService);
      debugElement = fixture.debugElement;
    });
  }));

  it('component should create - TWO', fakeAsync(() => {
    mockDataService.getAllCountries.and.returnValue(of(COUNTRY_LIST));
    flush();
    expect(component).toBeTruthy();
  }));

  it('on init called - TWO ', fakeAsync(() => {
    mockDataService.getAllCountries.and.returnValue(of(COUNTRY_LIST));
    component.ngOnInit();
    flush();
    expect(component.dataSource.length).toEqual(COUNTRY_LIST.length);
  }));

  it("count of rows should be correct as the data" , fakeAsync(()=> {

    mockDataService.getAllCountries.and.returnValue(of(COUNTRY_LIST));
    // component.ngOnInit();
    console.log("first detect change");
    fixture.detectChanges();

    flush();
    console.log("second detect change");
    fixture.detectChanges();

    const element = debugElement.queryAll(By.directive(MatRow));
    expect(element.length).toEqual(COUNTRY_LIST.length);
  }));

});
