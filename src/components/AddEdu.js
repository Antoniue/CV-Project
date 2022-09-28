function AddEdu({education, setEducation}){
    let eduI = document.querySelector('.eduI');

    eduI.innerHTML = 
        '<form class="eduForm">'+
            '<label for="uniInput" class="uniLabel" >University Name</label><br>'+
            '<input type="text" class="uniInput" /><br>'+

            '<label for="titleInput" class="titleLabel">Study Title</label><br>'+
            '<input type="text" class="titleInput" /><br>'+

            '<label for="yearsInput" class="yearsLabel">Years of Study</label><br>'+
            '<input type="number" class="yearsInput" /><br>'+

            '<input type="submit" value="submit" class="eduSubmit" /><br>'+
        '</form>';

    let form = document.querySelector('.eduForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let temp = document.querySelector('.uniInput');
        let name = temp.value;

        temp = document.querySelector('.titleInput');
        let title = temp.value;

        temp = document.querySelector('.yearsInput');
        let years = temp.value;

        setEducation(prev => [...prev,{"uniName": name, "studyTitle": title, "yearsStudy": years}]);
        e.preventDefault();
        form.reset();
    });
}

export {AddEdu};