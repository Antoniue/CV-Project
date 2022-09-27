function AddWork({workExperience, setWorkExperience}){
    let workI = document.querySelector('.workI');

    workI.innerHTML = 
        '<form class="workForm">'+
            '<label for="companyInput" class="companyLabel" >Company Name</label><br>'+
            '<input type="text" class="companyInput" /><br>'+
            '<label for="titleInput" class="titleLabel">Work Title</label><br>'+
            '<input type="text" class="titleInput" /><br>'+
            '<label for="tasksInput" class="tasksLabel">Tasks on Job</label><br>'+
            '<input type="text" class="tasksInput" /><br>'+
            '<label for="experienceInput" class="experienceLabel">Years Experience</label><br>'+
            '<input type="number" class="experienceInput" /><br>'+
            '<input type="submit" value="submit" class="workSubmit" /><br>'+
        '</form>';
    let form = document.querySelector('.workForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let temp = document.querySelector('.companyInput');

        let name = temp.value;
        temp = document.querySelector('.titleInput');
        let title = temp.value;
        temp = document.querySelector('.tasksInput');
        let tasks = temp.value;
        temp = document.querySelector('.experienceInput');
        let experience = temp.value;

        setWorkExperience(prev => [...prev,{"companyName": name, "workTitle": title, "jobTasks": tasks, "yearsExperience": experience}]);
        e.preventDefault();
        form.reset();
    });
}

export {AddWork};