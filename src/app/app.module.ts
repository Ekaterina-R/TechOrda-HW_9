import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { WhyComponent } from './why/why.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CallComponent } from './call/call.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    WhyComponent,
    AchievementComponent,
    TestimonialComponent,
    CallComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
