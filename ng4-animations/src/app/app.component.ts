import {Component} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
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
    ]),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ]),
    trigger('expAnimation', [
      transition('* => *', [
        query('.col', style({opacity: 0, transform: 'translateX(-40px)'})),
        query('.col', stagger('500ms', [
            animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Angular4 Animations';
  state = 'large';
  flyState = 'in';
  items = [];

  constructor() {
    this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  pushItem() {
    this.items.push('Oh yeah that is awesome');
  }

  removeItem() {
    this.items.pop();
  }
}
