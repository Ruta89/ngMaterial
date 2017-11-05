import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule,
  MatSidenavModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MenudemoComponent,
    SidenavdemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
