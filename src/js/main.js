import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import phoneMask from './phoneMask';
import onlyNumeric from './onlyNumeric';
import fileUpload from './fileUpload';
import newsSlider from './newsSlider';
import fixedHeader from './fixedHeader';
import accordions from './accordions';
import anchorLinks from './anchorLinks';
import menu from './menu';
import vhUnits from './vhUnits';
import modals from './modals';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    phoneMask();
    onlyNumeric();
    fileUpload();
    newsSlider();
    fixedHeader();
    accordions();
    anchorLinks();
    menu();
    vhUnits();
    modals();
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
