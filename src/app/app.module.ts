import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';
import { ZippyComponent } from './zippy/zippy.component';

import { AsyncExampleComponent } from './async-example/async-example.component';
import { MultislotComponent } from './multislot/multislot.component';
import { ForComponent } from './for/for.component';
import { Demo1Directive } from './directives/demo1.directive';
import { Demo2Directive } from './directives/demo2.directive';
import { SwitchComponent } from './switch/switch.component';
import { StyleComponent } from './style/style.component';
import { HooksComponent } from './hooks/hooks.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DemoPipe } from './pipes/demo.pipe';
import { AvatarPipe } from './pipes/avatar.pipe';
import { ConfigService } from './services/config.service';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './forms/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FooterMenuComponent,
    ListUserComponent,
    UserComponent,
    ZippyComponent,
    AsyncExampleComponent,
    MultislotComponent,
    ForComponent,
    Demo1Directive,
    Demo2Directive,
    SwitchComponent,
    StyleComponent,
    HooksComponent,
    HighlightDirective,
    UnlessDirective,
    DemoPipe,
    AvatarPipe,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
