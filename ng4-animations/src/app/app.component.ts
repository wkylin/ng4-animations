import {Component} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('my-animation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      /*transition('small => large', animate('300ms ease-in', style({
        transform: 'translateY(40px)'
      })))*/
      transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
          style({opacity: 1, transform: 'translateY(-75%)', offset: 1})
      ])))
    ])
  ]
})
export class AppComponent {
  title = 'Angular4 Animations';
  state = 'large';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
