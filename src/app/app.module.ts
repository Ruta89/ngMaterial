import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent,
    MyDialogComponent,
    DialogDemoComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    UsertableComponent
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
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
