
function DrawSingleWork(work){
    return('<div class="single"><div class="companyName">Company name: '+work.companyName+'</div>'
    +'<div class="workTitle">Work Title:: '+work.workTitle+'</div>'
    +'<div class="jobTasks">Tasks on Job: '+work.jobTasks+'</div>'
    +'<div class="yearsExperience">Experience: '+work.yearsExperience+' years</div></div>');
}
export {DrawSingleWork};