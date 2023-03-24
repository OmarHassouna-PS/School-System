const form = document.getElementById("form");


form.addEventListener("submit", (event) => {

    let userInfo = [
        event.target.name.value,
        event.target.birth.value,
        event.target.gender.value,
        event.target.phone.value,
        event.target.grade.value
    ];

    event.preventDefault();
    render(userInfo);
    
});

function render(userInfo) {

    let tableBody = document.getElementById("addInfoToTable");
    let tr = document.createElement('tr');
    

    userInfo.forEach( (value) => {

        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });

    tableBody.appendChild(tr);
    form.reset();
}


