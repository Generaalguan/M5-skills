//jeroen kunne uitleggen wat de js doet
//een author rechts onder neer zetten via json
//kijk goed naar de scss functies



const toBeClonedSection = document.getElementById("js--toBeCloned");

fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        //get main
        const main = document.querySelector('main');
        //make section
        let toBeAddedsection = document.createElement("section");
        toBeAddedsection.classList.add("tasks");
        main.appendChild(toBeAddedsection)
        //make header
        let toBeAddedheader = document.createElement("header");
        toBeAddedheader.classList.add("tasks__header");
        toBeAddedsection.appendChild(toBeAddedheader);
        //make h2
        let toBeAddedh2= document.createElement("h2");
        toBeAddedh2.classList.add("tasks__h2");
        toBeAddedh2.innerText = data.title
        toBeAddedheader.appendChild(toBeAddedh2);
        //make headerwrapper
        let toBeAddedheaderwrapper = document.createElement("div");
        toBeAddedheaderwrapper.classList.add("tasks__header__wrapper");
        toBeAddedheader.appendChild(toBeAddedheaderwrapper);
        //make number
        let toBeAddednumber = document.createElement("div");
        toBeAddednumber.classList.add("tasks__number");
        toBeAddednumber.innerText = data.activities.length
        toBeAddedheaderwrapper.appendChild(toBeAddednumber);
        //make button
        let toBeAddededit = document.createElement("button");
        toBeAddededit.classList.add("tasks__edit");
        toBeAddededit.innerText = "...";
        toBeAddedheaderwrapper.appendChild(toBeAddededit);
        //make UL
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedsection.appendChild(toBeAddedUl);

        for (let i = 0; i < data.activities.length; i++){
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi)
            //label
            let toBeAddedlabel = document.createElement("label");
            toBeAddedlabel.classList.add("tasks__label");
            if (data.activities[i].extraClass !== "") {
                toBeAddedlabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            }
            
            toBeAddedlabel.innerText = data.activities[i].label
            toBeAddedLi.appendChild(toBeAddedlabel)
            //description
            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description
            toBeAddedLi.appendChild(toBeAddedP)
            //ik heb een block element nodig
            let toBeAddedBlock = document.createElement("div")
            toBeAddedBlock.classList.add("tasks__listItem__Block");
            toBeAddedLi.appendChild(toBeAddedBlock)
            //author
            let toBeAddedAuthor = document.createElement("p")
            toBeAddedAuthor.classList.add("tasks__listItem__Block__author");
            toBeAddedAuthor.innerText = data.activities[i].author
            toBeAddedBlock.appendChild(toBeAddedAuthor)
        }


    }
)