import { DrawEd } from './DrawEd';
import { DrawTop } from './DrawTop';
import { DrawWork } from './DrawWork';
import './Preview.css';
function Preview({work, ed, personal}){
    let top = document.querySelector('.top');
    let workX = document.querySelector('.workX');
    let edu = document.querySelector('.edu');
    
    workX.innerHTML = '';
    edu.innerHTML = '';
    
    DrawTop(top, personal);

    if(work.length > 0)
        DrawWork(workX, work);
    if(ed.length > 0)
        DrawEd(edu, ed);
}

export {Preview};