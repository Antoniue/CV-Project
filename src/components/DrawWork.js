import { DrawSingleWork } from "./DrawSingleWork";

function DrawWork(workX, work){
    for(let index = 0; index < work.length; index++)
    {
        workX.innerHTML += DrawSingleWork(work[index]);
    }
}

export {DrawWork};