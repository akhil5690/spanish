import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './WIDGETS/home-page/home-page.component';
import { MainPageComponent } from './WIDGETS/main-page/main-page.component';
import { LoginPageComponent } from './WIDGETS/login-page/login-page.component';
import { ForgetpasswordPageComponent } from './WIDGETS/forgetpassword-page/forgetpassword-page.component';
import { RegisterPageComponent } from './WIDGETS/register-page/register-page.component';
import { HeaderComponentComponent } from './COMPONENTS/header-component/header-component.component';
import { FooterComponentComponent } from './COMPONENTS/footer-component/footer-component.component';
import { MainPageHeaderComponentComponent } from './COMPONENTS/main-page-header-component/main-page-header-component.component';
import { TutorialPageComponent } from './WIDGETS/tutorial-page/tutorial-page.component';
import { AlphabetsPageComponent } from './WIDGETS/alphabets/alphabets-page/alphabets-page.component';
import { SyllabelesPageComponent } from './WIDGETS/alphabets/syllabeles-page/syllabeles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainPageComponent,
    LoginPageComponent,
    ForgetpasswordPageComponent,
    RegisterPageComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainPageHeaderComponentComponent,
    TutorialPageComponent,
    AlphabetsPageComponent,
    SyllabelesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
