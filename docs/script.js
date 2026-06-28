//===============================
// BOTÓN COMENZAR
//===============================

const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", () => {

    document.querySelector(".question").scrollIntoView({
        behavior: "smooth"
    });

});


//===============================
// ANIMACIÓN DE APARICIÓN
//===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.25
});

document.querySelectorAll("section, footer").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


//===============================
// ANIMACIÓN DE BARRAS
//===============================

const barObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bars = document.querySelectorAll(".bar");

            bars[0].style.width = "58%";
            bars[1].style.width = "42%";

        }

    });

},{
    threshold:0.4
});

const seats = document.querySelector(".seats");

if(seats){

    document.querySelectorAll(".bar").forEach(bar=>{

        bar.style.width="0";

    });

    barObserver.observe(seats);

}


//===============================
// FRAGMENTACIÓN DEL CONGRESO
//===============================

const fragmentButton = document.getElementById("fragment-btn");

fragmentButton.addEventListener("click",()=>{

    const container =
    document.getElementById("fragment-container");

    container.innerHTML="";

    const colores=[

        "#C1121F",
        "#0D3B66",
        "#F4D35E",
        "#2A9D8F",
        "#8E44AD",
        "#F77F00",
        "#5AA9E6",
        "#495057"

    ];

    colores.forEach(color=>{

        const bloque=document.createElement("div");

        bloque.classList.add("mini-block");

        bloque.style.background=color;

        container.appendChild(bloque);

    });

});


//===============================
// OPCIONES
//===============================

const options=document.querySelectorAll(".option");

options.forEach(button=>{

    button.addEventListener("click",()=>{

        options.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});


//===============================
// LÍNEA DE TIEMPO
//===============================

const years=document.querySelectorAll(".year");

years.forEach(year=>{

    year.addEventListener("click",()=>{

        years.forEach(y=>{

            y.classList.remove("selected");

        });

        year.classList.add("selected");

    });

});


//===============================
// EFECTO PARALLAX
//===============================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-img");

    let scroll=window.pageYOffset;

    hero.style.transform=`translateY(${scroll*0.3}px)`;

});