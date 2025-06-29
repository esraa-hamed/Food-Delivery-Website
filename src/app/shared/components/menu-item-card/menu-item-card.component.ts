import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-card',
  imports: [],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.scss'
})
export class MenuItemCardComponent {
@Input() name !: string;
@Input() description !: string;
@Input() price !: number;
@Input() imagePath !: string;
}
