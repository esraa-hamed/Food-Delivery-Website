import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotificationBarComponent } from './shared/components/notification-bar/notification-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NotificationBarComponent, NotificationBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'food-delivery';
}
