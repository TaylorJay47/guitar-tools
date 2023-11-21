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
import { NeckComponent } from './neck/neck.component';
import { NeckControlsComponent } from "./neck-controls/neck-controls.component";
import { NoteDirective } from './directives/note-hover.directive';
import * as $ from 'jquery';
import { FooterComponent } from './footer/footer.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { InstrumentSettingsComponent } from './instrument-settings/instrument-settings.component';
import { NeckHelpComponent } from './neck-help/neck-help.component';
import { ChordProgressionComponent } from './chord-progression/chord-progression.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScalesComponent,
    ChordDecoderComponent,
    HomeComponent,
    NeckComponent,
    NeckControlsComponent,
    NoteDirective,
    FooterComponent,
    KeyboardComponent,
    InstrumentSettingsComponent,
    NeckHelpComponent,
    ChordProgressionComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbCollapseModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
