const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {

    document.querySelector(".question")
    .scrollIntoView({
        behavior:"smooth"
    });

});


const fragmentButton = document.getElementById("fragment-btn");

fragmentButton.addEventListener("click", () => {

    const fragments =
        document.querySelectorAll(".fragment");

    fragments.forEach((fragment,index)=>{

        fragment.style.width="120px";

        fragment.style.transform=
        `translateX(${index*100}px)
         rotate(${index*12}deg)`;

    });

});