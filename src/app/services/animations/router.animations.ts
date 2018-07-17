import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

//
// export function slideToRight() {
//   return trigger('routerTransition', [
//     state('void', style({position: 'fixed', width: '100%'}) ),
//     state('*', style({position: 'fixed', width: '100%'}) ),
//     transition(':enter', [
//       style({transform: 'translateX(-100%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//     ]),
//     transition(':leave', [
//       style({transform: 'translateX(0%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(100%)'})),
//     ]),
//     state('void', style({position: 'initial', width: '100%'}) ),
//   ]);
// }

export function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({transform: 'translateX(100%)', position: 'fixed', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)', position: 'fixed', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
