// import Person from './modules/Person';
// // var Person = require('./modules/Person');

// class Adult extends Person {
//     payTaxes() {
//         console.log(this.name + ' owes taxes.');
//     }
// }

// var john = new Person('John Doe', 'blue');
// var jane = new Adult('Jane Smith', 'green');

// john.greet();
// jane.greet();
// jane.payTaxes();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var featureItemsEffect = new RevealOnScroll($('.feature-item'), '85%');
var testimonialItemsEffect = new RevealOnScroll($('.testimonial-item'), '60%');