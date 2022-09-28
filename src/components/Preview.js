import { DrawEd } from './DrawEd';
import { DrawTop } from './DrawTop';
import { DrawWork } from './DrawWork';
import './Preview.css';
function Preview({work, ed, personal}){
    let top = document.querySelector('.top');
    let workX = document.querySelector('.workX');
    let edu = document.querySelector('.edu');
    
    DrawTop(top, personal);
    DrawWork(workX, work);
    DrawEd(edu, ed);
}

export {Preview};