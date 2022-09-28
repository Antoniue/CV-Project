import { DrawTop } from './DrawTop';
import './Preview.css';
function Preview({work, ed, personal}){
    let top = document.querySelector('.top');
    let workX = document.querySelector('.workX');
    let edu = document.querySelector('.edu');
    
    DrawTop(top, personal);
}

export {Preview};