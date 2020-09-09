import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(e: string) {
    if (e.length > 0) {
      this.route.navigate(["/heroes", e])
    } else {
      this.route.navigate(["/heroes"])
    }

  }
}
