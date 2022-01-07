import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnComponent } from './learn/learn.component';
import { LearnSettingsComponent } from './learn/modals/settings/learn-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LearnComponent,
    LearnSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LearnSettingsComponent
  ]
})
export class AppModule { }
