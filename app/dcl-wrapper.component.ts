import { HttpClient } from '@angular/common/http';
import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core'

// Helper component to add dynamic components
@Component({
  selector: 'dcl-wrapper',
  templateUrl: './dcl-wrapper.component.html'
//   template: `<div #target></div>`
})
export class DclWrapper {
  @ViewChild('target', { read: ViewContainerRef }) target:any;
  @Input() type:any;
  dynamicData:any;
  cmpRef:any =  ComponentRef;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
    private cdRef: ChangeDetectorRef, private httpClient: HttpClient) {
    
     }

  updateComponent() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory)
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {}
}