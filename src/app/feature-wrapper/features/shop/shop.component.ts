import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public cycles = ['hero', 'hercules', 'lady-bird'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public toProductDetails(cycle: string){
    this.router.navigateByUrl('products/' + cycle);
  }

}
