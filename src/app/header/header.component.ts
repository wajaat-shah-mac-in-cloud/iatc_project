import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

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
        this.setFixedHeader(mobileMenu.classList.contains('is-active'));
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

  private setFixedHeader(isMobileMenuActive: boolean): void {
    const header = this.el.nativeElement.querySelector('header');
    if (header) {
      if (isMobileMenuActive) {
        this.renderer.setStyle(header, 'position', 'fixed');
      } else {
        this.renderer.setStyle(header, 'position', 'absolute');
      }
    }
  }

}