import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'english.component.html'
})


export class EnglishComponent implements OnInit {
     xml = '<root>Hello xml2js!</root>';
    vanban = 'chó lang';
    constructor(  ) {
    }

    ngOnInit( ) {
          }
     public noi() {
      const audio = new Audio();
      // tslint:disable-next-line:max-line-length
      // audio.src = 'https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' +
      //   this.vanban + '&tl=' + this.ngonngu;
       let temp = this.vanban ;
        temp = encodeURIComponent(temp);
       // temp  = temp.replace('%20', '+' );
      //  temp = temp.split('%20').join('+');
        console.log(temp);
      audio.src = 'https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=100&client=tw-ob&q=' + temp + '&tl=vi';
      audio.load();
      audio.play();
     }
}
