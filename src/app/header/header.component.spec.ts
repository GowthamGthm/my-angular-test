import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {AppModule} from "../app.module";
import {HeaderComponent} from "./header.component";
import {By} from "@angular/platform-browser";


describe("Header Component", () => {


  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HeaderComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
    });
  }));


  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  it("Button Visible", () => {
    const ele = debugElement.queryAll((By.css("button")));
    const ele1 = ele.find(ele =>
                (ele.nativeElement.textContent || "").trim() === "Contribute");
    expect(ele1).toBeTruthy();
  });

  it("Button clicked and goes to different URL", fakeAsync(()=> {
    spyOn(window, 'open'); // Spy on the window.open method

    const elements = debugElement.queryAll((By.css("button")));
    const contributeButton = elements.find(ele =>
      (ele.nativeElement.textContent || "").trim() === "Contribute");

    expect(contributeButton).toBeTruthy();
    // @ts-ignore
    contributeButton.triggerEventHandler('click', null);
    expect(window.open).toHaveBeenCalledWith('https://github.com/grraghav120/country-viewer/issues', '_blank');

  }));


});
