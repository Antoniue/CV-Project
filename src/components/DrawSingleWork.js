
function DrawSingleWork(work){
    let temp = '<div class="single">';

    if(work.companyName !== '')
        temp += '<div class="companyName">Company name: '+work.companyName+'</div>';

    if(work.workTitle !== '')
        temp += '<div class="workTitle">Work Title:: '+work.workTitle+'</div>';

    if(work.jobTasks !== '')
        temp += '<div class="jobTasks">Tasks on Job: '+work.jobTasks+'</div>';
        
    if(work.yearsExperience !== '')
        temp += '<div class="yearsExperience">Experience: '+work.yearsExperience+' years</div>';

    temp+= '</div>';

    return temp;
}
export {DrawSingleWork};