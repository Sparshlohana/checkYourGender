//https://api.genderize.io/?name=preet
let btn = document.getElementById("btn");
let result = document.querySelector("#result");
result.style.display = 'none';

btn.addEventListener("click", CallApi);

function CallApi() {
    let nme = document.querySelector("#nme").value;
    if (nme != null || nme != undefined || nme != '') {
        let url = `https://api.genderize.io/?name=${nme}`;
        CheckGender(url);
    }
    else {
        alert("add your name");
    }
}
document.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') {
        CallApi();
    }
})
function CheckGender(url) {
    let result = document.querySelector("#result");

    let nme = document.querySelector("#nme");
    nme.value = '';
    let output;
    fetch(url).then(response => response.json()).then(data => {
        output = `${data.name} is ${Math.floor(data.probability * 100)}% ${data.gender}`
        result.innerHTML = output.toUpperCase();
        result.style.display = 'block';
    });
}
