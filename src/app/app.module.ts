import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { MdlUppgradeElementDirective } from './mdl-uppgrade-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MdlUppgradeElementDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
