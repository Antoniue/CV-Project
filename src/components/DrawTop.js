function DrawTop(top, personal){
    top.innerHTML = '';
    if(personal.length > 0)
    {
        top.innerHTML = '<div class="previewTop">'
        +'<h3 class="firstN">'+personal[0].fullName+'</h3>'
        +'<h3 class="phoneNumber">'+personal[0].phoneNumber+'</h3>'
        +'<h3 class="email">'+personal[0].email+'</h3>'
        +'</div>';
    }
}

export {DrawTop};