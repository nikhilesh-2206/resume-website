import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactService } from '../../core/services/contact.service';
import { SocialLinkService } from '../../core/services/social-link.service';
import { SocialLink } from '../../core/models/social-link.model';
import { ContactRequest } from '../../core/models/contact.model';

import { AppIcon } from '../../shared/components/app-icon/app-icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppIcon
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {

  private contactService = inject(ContactService);
  private socialLinkService = inject(SocialLinkService);

  /* =========================
     SOCIAL LINKS
  ========================= */

  socialLinks: SocialLink[] = [];


  /* =========================
     CONTACT FORM
  ========================= */

  form: ContactRequest = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';


  /* =========================
     INITIALIZATION
  ========================= */

  ngOnInit(): void {

    this.socialLinkService.getSocialLinks().subscribe({

      next: (links) => {

        console.log(
          'Contact social links:',
          links
        );

        this.socialLinks = [...links].sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

      },

      error: (error) => {

        console.error(
          'Failed to load contact social links',
          error
        );

      }

    });

  }


  /* =========================
     CONTACT LABEL
  ========================= */

  getContactLabel(link: SocialLink): string {

    switch (link.type.toLowerCase()) {

      case 'email':
        return 'Email';

      case 'phone':
        return 'Phone';

      case 'linkedin':
        return 'LinkedIn';

      case 'github':
        return 'GitHub';

      default:
        return link.type;

    }

  }


  /* =========================
     CONTACT VALUE
  ========================= */

  getContactValue(link: SocialLink): string {

    const type = link.type.toLowerCase();

    switch (type) {

      case 'email':

        return link.url.replace(
          /^mailto:/,
          ''
        );

      case 'phone':

        return link.url.replace(
          /^tel:/,
          ''
        );

      case 'linkedin':

        return 'Connect with me';

      case 'github':

        return 'View my projects';

      default:

        return link.url;

    }

  }


  /* =========================
     CONTACT HREF
  ========================= */

  getContactHref(link: SocialLink): string {

    const type = link.type.toLowerCase();

    if (
      type === 'email' &&
      !link.url.startsWith('mailto:')
    ) {

      return `mailto:${link.url}`;

    }

    if (
      type === 'phone' &&
      !link.url.startsWith('tel:')
    ) {

      return `tel:${link.url}`;

    }

    return link.url;

  }


  /* =========================
     EXTERNAL LINK
  ========================= */

  isExternalLink(link: SocialLink): boolean {

    const type = link.type.toLowerCase();

    return (
      type !== 'email' &&
      type !== 'phone'
    );

  }


  /* =========================
     SUBMIT FORM
  ========================= */

  onSubmit(): void {

    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.isSubmitted = false;
    this.errorMessage = '';

    this.contactService
      .sendMessage(this.form)
      .subscribe({

        next: () => {

          console.log(
            'Contact form submitted successfully'
          );

          this.isSubmitting = false;
          this.isSubmitted = true;

          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };

        },

        error: (error) => {

          console.error(
            'Contact form failed:',
            error
          );

          this.isSubmitting = false;

          this.errorMessage =
            'Something went wrong while sending your message. Please try again.';

        }

      });

  }

}
``
