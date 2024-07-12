# CountryView

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## TESTS 
 1. Example for the service stub using DummyServiceStub inside the spec.ts file can be found at home.component.spec.ts

 2. Example for the service stub using using the jasmine.createSpyObject inside the spec.ts file can be found at home2.component.spec.ts
3.  home.component.spec.ts & country-detail.component.spec.ts has most of the test cases





## **Notes:**

 1. fixture.detectChanges() on the first call calls the ngOninit, if called for the second time it just renders the screen with updated values. Better to use the fixture.detectChanges() in the beforeEach call.

2. if fixture.detectChanges is not called in the before each , only the constructor is called , and ngOninit is not called.

3. So, we have to call fixture.detectChanges for the ngOninit to be called, either in the test case or the beforeEach

4.  use flush() for fakeAsync , has this can handle wait for both micro tasks and macro tasks.

5. tick() uses wait period has an input , can be used when we know the exact time frame.

6. for material designs use By.directive for the debugElement find.



## Sample code for Test Module:



`beforeEach(waitForAsync(()=> {

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
}));`



2.

`beforeEach(waitForAsync(() => {

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

}));`





 
