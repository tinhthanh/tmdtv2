import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: '<router-outlet></router-outlet>'
})

export class PheDuyetComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
       // this.router.navigate(['/admin/khoa-hoc/view']);
     }
}
