import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  currentYear = new Date().getFullYear();

}
