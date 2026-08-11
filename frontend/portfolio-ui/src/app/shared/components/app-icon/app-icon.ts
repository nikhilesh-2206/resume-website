import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

import {
  simpleGithub,
  simpleGeeksforgeeks
} from '@ng-icons/simple-icons';

import {
  lucideMail
} from '@ng-icons/lucide';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      simpleGithub,
      simpleGeeksforgeeks,
      lucideMail
    })
  ],
  template: `
    <ng-container [ngSwitch]="name">

      <!-- GitHub -->
      <ng-icon
        *ngSwitchCase="'github'"
        name="simpleGithub">
      </ng-icon>

      <!-- LinkedIn -->
      <svg
        *ngSwitchCase="'linkedin'"
        class="icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V8.98H3.56v11.47H3.56zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
        />
      </svg>

      <!-- GeeksforGeeks -->
      <ng-icon
        *ngSwitchCase="'geeksforgeeks'"
        name="simpleGeeksforgeeks">
      </ng-icon>

      <!-- Email -->
      <ng-icon
        *ngSwitchCase="'mail'"
        name="lucideMail">
      </ng-icon>

      <!-- Phone -->
      <svg
        *ngSwitchCase="'phone'"
        class="icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2
             c.27-.27.67-.36 1.02-.24
             c1.12.37 2.33.57 3.57.57
             c.55 0 1 .45 1 1V20
             c0 .55-.45 1-1 1
             C10.61 21 3 13.39 3 4
             c0-.55.45-1 1-1h3.5
             c.55 0 1 .45 1 1
             c0 1.25.2 2.45.57 3.57
             c.11.35.03.74-.25 1.02l-2.2 2.2z"
        />
      </svg>

    </ng-container>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    ng-icon,
    .icon {
      width: 22px;
      height: 22px;
      display: inline-flex;
      flex-shrink: 0;
    }
  `]
})
export class AppIcon {

  @Input({ required: true })
  name!: string;
}
