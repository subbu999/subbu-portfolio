import {
    style,
    query,
    group,
    animate
} from '@angular/animations';

export const slideLeft = [
    style({ position: 'relative' }),
    query(':enter', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateX(-50%)'
        })
    ], { optional: true }),
    query(':enter', [
        animate('600ms ease', style({
            opacity: 1,
            transform: 'translateX(0)'
        }))
    ], { optional: true })
];
export const slideRight = [
    style({ position: 'relative' }),
    query(':enter', [
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'translateX(50%)'
        })
    ], { optional: true }),
    query(':enter', [
        animate('600ms ease', style({
            opacity: 1,
            transform: 'translateX(0)'
        }))
    ], { optional: true })
];