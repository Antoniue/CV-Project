import { DrawSingleEd } from "./DrawSingleEd";

function DrawEd(edu, ed){
    for(let index = 0; index < ed.length; index++)
    {
        edu.innerHTML += DrawSingleEd(ed[index]);
    }
}

export {DrawEd};