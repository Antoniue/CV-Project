function AddTop({personalDetails, setPersonal}){
    let topI = document.querySelector('.topI');

    topI.innerHTML = 
        '<form class="personalForm">'+
            '<label for="nameInput" class="nameLabel" >Full Name</label><br>'+
            '<input type="text" class="nameInput" /><br>'+

            '<label for="phoneInput" class="phoneLabel">Phone Number</label><br>'+
            '<input type="number" class="phoneInput" /><br>'+

            '<label for="emailInput" class="emailLabel">E-mail</label><br>'+
            '<input type="email" class="emailInput" /><br>'+

            '<input type="submit" value="submit" class="eduSubmit" /><br>'+
        '</form>';

    let form = document.querySelector('.personalForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let temp = document.querySelector('.nameInput');
        let name = temp.value;

        temp = document.querySelector('.phoneInput');
        let phone = temp.value;

        temp = document.querySelector('.emailInput');
        let email = temp.value;

        setPersonal(prev => [...prev,{"fullName": name, "phoneNumber": phone, "email": email}]);
        e.preventDefault();
        topI.innerHTML = 'SUBMITTED';
    });
}

export {AddTop};