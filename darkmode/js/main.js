//java script input change

const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");

input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
}

//java script onclick heart
const hearts = document.getElementsByClassName("heart");
for (let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for (let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
    
}

//java script dark mode

const rootelement = document.querySelector(":root");
const modeswitch = document.getElementById("js--toggle");

modeswitch.onchange = function () {
    console.log(modeswitch);
    if (modeswitch.checked === true) {
        rootelement.style.setProperty("--background-color", "#293462");
        rootelement.style.setProperty("--header-color", "#293462");
        rootelement.style.setProperty("--font--color", "#fff");

        
        return;
    }
    rootelement.style.setProperty("--font--color", "black");

    rootelement.style.setProperty("--background-color", "#fbf8f1");
    rootelement.style.setProperty("--header-color", "#fbf8f1");
}