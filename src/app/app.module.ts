import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FooterMenuComponent,
    ListUserComponent,
    UserComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
