import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {AppModule} from "./app.module";
import {AppComponent} from "./app.component";
import {expect} from "@angular/flex-layout/_private-utils/testing";
import {By} from "@angular/platform-browser";
import {RouterOutlet} from "@angular/router";

describe('AppComponent', () => {

  let component : AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement : DebugElement;


  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations:[AppComponent],
      imports: [AppModule],
      providers:[],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
      expect(component).toBeTruthy();
  });

  it(`should have as title 'country-view'`, () => {
    expect(component.title).toEqual("country-view");
  });

  it('should render router outlet', () => {
      let ele = debugElement.query(By.directive(RouterOutlet));

      expect(ele).toBeTruthy();
  });
});
