import { DrawSingleWork } from "./DrawSingleWork";

function DrawWork(workX, work){
    workX.innerHTML = '';
    for(let index = 0; index < work.length; index++)
    {
        workX.innerHTML += DrawSingleWork(work[index]);
    }
}

export {DrawWork};