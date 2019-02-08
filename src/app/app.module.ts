import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import {NgxPageScrollModule} from 'ngx-page-scroll';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewComponent } from './components/new/new.component';

import { DraggableDirective } from './directives/draggable.directive';
import { DrappableDirective } from './directives/drappable.directive';

import { SVGService } from './services/svg.service';
import { WindowWidthComponent } from './components/window-width/window-width.component';
import { WidHieRenDirective } from './directives/wid-hie-ren.directive';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FooComponent } from './foo/foo.component';

import { FormsModule } from '@angular/forms';


const routes: Routes=[
  {
    path:'',
    component: WindowWidthComponent
  },
  {
    path:'new',
    component:NewComponent
  },
  {
    path:'signup',
    component: SignUpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    DraggableDirective,
    DrappableDirective,
    WindowWidthComponent,
    WidHieRenDirective,
    SignUpComponent,
    FooComponent
   
  ],
  imports: [
    HttpClientModule,FormsModule,
    BrowserModule, TooltipModule.forRoot(), RouterModule.forRoot(routes),NgxPageScrollModule,BrowserAnimationsModule,MatInputModule
  ],
  providers: [SVGService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
