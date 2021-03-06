import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ScalesComponent } from './scales/scales.component';
import { ChordDecoderComponent } from './chord-decoder/chord-decoder.component';
import { HomeComponent } from './home/home.component';
import { ScaleChartComponent } from './scale-chart/scale-chart.component';
import { NoteDirective } from './directives/note-hover.directive';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScalesComponent,
    ChordDecoderComponent,
    HomeComponent,
    ScaleChartComponent,
    NoteDirective
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
