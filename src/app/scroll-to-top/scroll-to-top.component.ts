import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.handleScrollToTop();
    });
  }

  private handleScrollToTop(): void {
    const scrollToTop = document.querySelector('.back-to-top') as HTMLElement;
    if (window.scrollY > 200) {
      scrollToTop.classList.add('is-scrolling');
    } else {
      scrollToTop.classList.remove('is-scrolling');
    }
  }

}
