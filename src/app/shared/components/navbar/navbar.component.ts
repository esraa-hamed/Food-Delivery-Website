import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isTabOneClicked : boolean = true;
isTabTwoClicked : boolean = false;
isTabThreeClicked : boolean = false;
isTabFourClicked : boolean = false;
isTabFiveClicked : boolean = false;
isTabSixClicked : boolean = false;

handleTabOneClicked() : void {
this.isTabOneClicked = true;
this.isTabTwoClicked = false;
this.isTabThreeClicked = false;
this.isTabFourClicked = false;
this.isTabFiveClicked = false;
this.isTabSixClicked = false;
}

handleTabTwoClicked() : void {
this.isTabOneClicked = false;
this.isTabTwoClicked = true;
this.isTabThreeClicked = false;
this.isTabFourClicked = false;
this.isTabFiveClicked = false;
this.isTabSixClicked = false;
}

handleTabThreeClicked() : void {
this.isTabOneClicked = false;
this.isTabTwoClicked = false;
this.isTabThreeClicked = true;
this.isTabFourClicked = false;
this.isTabFiveClicked = false;
this.isTabSixClicked = false;
}

handleTabFourClicked() : void {
this.isTabOneClicked = false;
this.isTabTwoClicked = false;
this.isTabThreeClicked = false;
this.isTabFourClicked = true;
this.isTabFiveClicked = false;
this.isTabSixClicked = false;
}

handleTabFiveClicked() : void {
this.isTabOneClicked = false;
this.isTabTwoClicked = false;
this.isTabThreeClicked = false;
this.isTabFourClicked = false;
this.isTabFiveClicked = true;
this.isTabSixClicked = false;
}

handleTabSixClicked() : void {
this.isTabOneClicked = false;
this.isTabTwoClicked = false;
this.isTabThreeClicked = false;
this.isTabFourClicked = false;
this.isTabFiveClicked = false;
this.isTabSixClicked = true;
}
}
