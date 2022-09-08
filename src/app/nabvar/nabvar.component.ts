import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home']);
  }
  register() {
    this.router.navigate(['register']);
  }
  edit() {
    this.router.navigate(['edit']);
  }

}

