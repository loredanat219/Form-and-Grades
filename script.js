document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let names = document.getElementById("names").value;
    let grades = document.getElementById("grades").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let paragraf = names + "<br>" + grades + "<br>" + email + "<br>" + password;
    document.getElementById("demo").innerHTML = paragraf;

    console.log("Names:" + names);
    console.log("Grades:" + grades);
    console.log("Email:" + email);
    console.log("Password:" + password);

});

function result(nota) {
    let text;
    if (nota >= 8) {
        text = "Ai luat nota buna!";
    } else {
        text = "Mai invata!";
    }
    return text;

    
};

document.getElementById("myForm").addEventListener("submit", function (event) {
    let selectedGrade = document.getElementById("grades").value;
    let msg = result(selectedGrade);
    document.getElementById("demo2").innerHTML = msg;
});

