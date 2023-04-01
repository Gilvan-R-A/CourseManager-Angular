import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseListComponent } from './courses/course-list.components';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replice.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent
  ],
  imports: [

  BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
