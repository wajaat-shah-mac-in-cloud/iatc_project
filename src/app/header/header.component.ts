import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    const menuBtn = document.querySelector('.hamburger') as HTMLElement;
    const mobileMenu = document.querySelector('.mobile-nav') as HTMLElement;

    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
      });
    }
  }

  private handleScroll(): void {
    if (window.scrollY > 100) {
      const header = document.querySelector('header');
      if (header) {
        header.classList.add('is-scrolling');
      }
    } else {
      const header = document.querySelector('header');
      if (header) {
        header.classList.remove('is-scrolling');
      }
    }
  }
}