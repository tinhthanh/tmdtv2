import { GoogleTranslateComponent } from './google-translate.component';
import { NgModule } from '@angular/core';

import { EnglishComponent } from './english/english.component';
import { GoogleTranslateRouting } from './google-translate.routing';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    GoogleTranslateRouting,
    HttpClientModule
    ],
    declarations: [
        EnglishComponent,
        GoogleTranslateComponent
    ]
})
export class EnglishTranslateModule { }
