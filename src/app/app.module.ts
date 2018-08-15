import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2'
import {FIREBASE_CREDENTIALS } from './firebase.credentials'
import {ShoppagePage} from '../pages/shoppage/shoppage'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {EditPage} from '../pages/edit/edit'
import {LoginPage} from '../pages/login/login'
import {RegisterPage } from '../pages/register/register'
import  {AngularFireAuthModule} from 'angularfire2/auth'


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ShoppagePage,
    EditPage,
    RegisterPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS ),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ShoppagePage,
    EditPage,
    RegisterPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
