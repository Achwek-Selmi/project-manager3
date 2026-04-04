import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]',
  standalone: true
})
export class HighlightStatus implements OnInit {

  @Input() appHighlightStatus: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    switch (this.appHighlightStatus) {
      case 'Terminé':
        this.el.nativeElement.style.backgroundColor = '#dcfce7';
        break;
      case 'En cours':
        this.el.nativeElement.style.backgroundColor = '#dbeafe';
        break;
      case 'En attente':
        this.el.nativeElement.style.backgroundColor = '#fef9c3';
        break;
      default:
        this.el.nativeElement.style.backgroundColor = '#f3f4f6';
    }
  }
}