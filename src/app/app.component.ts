import { Component, ViewChild, Renderer2, ElementRef, OnInit, AfterViewInit } from '@angular/core';

//component 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit, AfterViewInit{
  @ViewChild("nav") public nav!: ElementRef
  
  public title = 'dieditores!';
  public flag: boolean = false

  constructor(private renderer: Renderer2 ){  
  }
  ngOnInit(){
  }
  ngAfterViewInit(){
    //console.log(this.nav.nativeElement)
  }
  showMenu(){
    const nav = this.nav.nativeElement
    if(!this.flag){
      this.renderer.removeClass(nav, "nav-list")
      this.renderer.addClass(nav, "nav")
      this.flag = true
    }else{
      this.renderer.removeClass(nav, "nav")
      this.renderer.addClass(nav, "nav-list")
      this.flag = false
    }
  }

}
