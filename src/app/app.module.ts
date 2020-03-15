import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {OnePage} from '../pages/one/one';
import {TwoPage} from '../pages/two/two';
import {ThreePage} from '../pages/three/three';
import{TieziPage}from '../pages/tiezi/tiezi';
import {Tiezi1Page}  from '../pages/tiezi1/tiezi1';
import{ExpandPage} from '../pages/expand/expand';
import {SearchPage} from '../pages/search/search';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import {AboutPage} from '../pages/about/about';
import {YemianPage}from '../pages/yemian/yemian';
import{SigninPage} from '../pages/signin/signin';
import {MatePage} from '../pages/mate/mate';
import{SeasonPage} from '../pages/season/season'
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    OnePage,
    TwoPage,
    ThreePage,
    TieziPage,
    Tiezi1Page,
    SearchPage,
    ExpandPage,
    AboutPage,
    YemianPage,
    SigninPage,
    MatePage,
    SeasonPage

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FileUploadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    OnePage,
    TwoPage,
    ThreePage,
    TieziPage,
    Tiezi1Page,
    SearchPage,
    ExpandPage,
    AboutPage,
    YemianPage,
    SigninPage,
    MatePage,
    SeasonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
