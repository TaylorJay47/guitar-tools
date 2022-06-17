import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {ScalesComponent} from "./scales/scales.component";
import {ChordDecoderComponent} from "./chord-decoder/chord-decoder.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes =[
  {path: 'scales', component: ScalesComponent},
  {path: 'chord-decoder', component: ChordDecoderComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
