function DrawSingleEd(ed){
    let temp = '<div class="single">';

    if(ed.uniName !== '')
        temp += '<div class="uniName">University name: '+ed.uniName+'</div>';

    if(ed.studyTitle !== '')
        temp += '<div class="studyTitle">Study Title: '+ed.studyTitle+'</div>';

    if(ed.yearsStudy !== '')
        temp += '<div class="yearsStudy">Years studied: '+ed.yearsStudy+'</div>'

    temp += '</div>';
    return temp;
}

export {DrawSingleEd};