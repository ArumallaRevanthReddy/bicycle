import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-wrapper',
  templateUrl: './feature-wrapper.component.html',
  styleUrls: ['./feature-wrapper.component.scss']
})
export class FeatureWrapperComponent {

  public showAccountDropdown = false;

  public accountDropdown(){
    this.showAccountDropdown = !this.showAccountDropdown;
  }

  public closeDropdown(){
    this.showAccountDropdown = false;
  }

}
