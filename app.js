const form = document.getElementById("form");
let arrStudent = [];

if(localStorage.arrStudent != null)
    arrStudent = JSON.parse(localStorage.arrStudent);

form.addEventListener("submit", (event) => {

    function Student (name, birth, gender, phone, major, img) {
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.phone = phone;
        this.major = major;
        this.img  = img;
    }
    
    let newStudent = new Student (
        event.target.name.value,
        event.target.birth.value,
        event.target.gender.value,
        event.target.phone.value,
        event.target.major.value,
        event.target.img_URl.value
    )

    event.preventDefault();
    
    arrStudent.push(newStudent);
    localStorage.setItem('arrStudent',JSON.stringify(arrStudent));
    form.reset();

    render([newStudent]);
});

function render(arrStudent) {

    let addCard = document.getElementById("addCard");

    arrStudent.forEach( (student) => {
        
        // Create div card
        let divParent = document.createElement('div');
        divParent.className = "student card ms-4 mb-4 form-font col-8 col-sm-4 col-md-3";

        let attr = document.createAttribute("data-aos");
        attr.value = "flip-left";
        divParent.setAttributeNode(attr);


        // Create and Add img in divImg
        let divImg = document.createElement('div');
        divImg.className = "mt-3 mb-3 m-auto";

        let img = document.createElement('img');
        img.className = "card-img img-fluid";
        img.src = "images/Person.png";
        img.alt = "This is Student img";

        divImg.appendChild(img);


        // Create and add information student in divInfo
        let divInfo = document.createElement('div');
        divInfo.className = "card-font";
        
        let prgName = document.createElement('p');
        let prgGender = document.createElement('p');
        let prgPhone = document.createElement('p');
        let prgMajor = document.createElement('p');

        prgName.textContent = "Name : " + student.name;
        prgGender.textContent = "Gender : " + student.gender;
        prgPhone.textContent = "Phone : " + student.phone;
        prgMajor.textContent = "Major : " + student.major;

        divInfo.appendChild(prgName);
        divInfo.appendChild(prgGender);
        divInfo.appendChild(prgPhone);
        divInfo.appendChild(prgMajor);

        // Add divIng and divIng in the Parent div
        divParent.appendChild(divImg);
        divParent.appendChild(divInfo);
        
        // Add Parent div in the global div
        addCard.appendChild(divParent);
    });
}

render(arrStudent);