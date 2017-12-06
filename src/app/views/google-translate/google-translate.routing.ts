import { GoogleTranslateComponent } from './google-translate.component';
import { EnglishComponent } from './english/english.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     component: GoogleTranslateComponent ,
     data: {
            title:  'GoogleTranslate'
     },
     children: [
          {
              path: 'english',
              component: EnglishComponent
          }
     ]
 }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class GoogleTranslateRouting {}