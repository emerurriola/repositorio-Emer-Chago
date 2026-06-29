// ======================================================
// REPRESENTAR O FRAGMENTAR
// SCRIPT V2
// ======================================================


// ===========================================
// BOTÓN COMENZAR
// ===========================================

const startButton = document.getElementById("start-btn");

if(startButton){

    startButton.addEventListener("click",()=>{

        document.querySelector(".intro")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}


// ===========================================
// APARICIÓN DE SECCIONES
// ===========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


document.querySelectorAll("section, footer")
.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ===========================================
// ANIMACIÓN DE ESCAÑOS 1989
// ===========================================

const seats = document.querySelector(".seats");

if(seats){

    const barObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const bars =
                document.querySelectorAll(".bar");

                bars[0].style.width = "58%";
                bars[1].style.width = "42%";

            }

        });

    },{

        threshold:0.4

    });

    barObserver.observe(seats);

}


// ===========================================
// FRAGMENTACIÓN DEL CONGRESO
// ===========================================

const fragmentButton =
document.getElementById("fragment-btn");

if(fragmentButton){

    fragmentButton.addEventListener("click",()=>{

        const container =
        document.getElementById("fragment-container");

        container.innerHTML = "";

        const colores = [

            "#EA3747", // rojo
            "#15254B", // azul
            "#4A4B70", // morado
            "#E89B57", // naranjo
            "#8E44AD",
            "#2A9D8F",
            "#495057",
            "#C77DFF",
            "#F4A261",
            "#577590"

        ];

        colores.forEach((color,index)=>{

            setTimeout(()=>{

                const bloque =
                document.createElement("div");

                bloque.classList.add("mini-block");

                bloque.style.background = color;

                container.appendChild(bloque);

            }, index * 120);

        });

    });

}


// ===========================================
// TIMELINE INTERACTIVA
// ===========================================

const years =
document.querySelectorAll(".timeline .year");

years.forEach(year=>{

    year.addEventListener("click",()=>{

        years.forEach(y=>{

            y.classList.remove("selected");

        });

        year.classList.add("selected");

    });

});


// ===========================================
// EFECTO DE APARICIÓN EN PARTIDOS
// ===========================================

const partidos =
document.querySelectorAll(".grid-partidos div");

const partidosObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const index =
            [...partidos].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0)";

            }, index * 120);

        }

    });

},{
    threshold:0.3
});


partidos.forEach(partido=>{

    partido.style.opacity = "0";

    partido.style.transform =
    "translateY(40px)";

    partido.style.transition =
    "all .8s ease";

    partidosObserver.observe(partido);

});


// ===========================================
// EFECTO DE LECTURA EN TIMELINE
// ===========================================

const timelineData = {

    "1989":
    "Primeras elecciones parlamentarias tras el retorno a la democracia.",

    "1993":
    "La Concertación aumenta su presencia a 70 escaños.",

    "1997":
    "Aparecen candidaturas independientes y el pacto Chile 2000.",

    "2001":
    "Se mantiene la lógica de las dos grandes coaliciones.",

    "2005":
    "Persistencia del sistema binominal.",

    "2009":
    "Última década de hegemonía bipartidista.",

    "2013":
    "Última elección antes de la reforma proporcional.",

    "2017":
    "Se implementa el nuevo sistema electoral proporcional.",

    "2021":
    "El PDG logra una irrupción significativa.",

    "2025":
    "Mayor fragmentación y nuevas fuerzas políticas."
};


const timelineSection =
document.querySelector(".timeline");

if(timelineSection){

    const infoBox =
    document.createElement("p");

    infoBox.classList.add("timeline-info");

    infoBox.innerText =
    timelineData["1989"];

    timelineSection.appendChild(infoBox);


    years.forEach(year=>{

        year.addEventListener("click",()=>{

            infoBox.innerText =
            timelineData[year.innerText];

        });

    });

}


// ===========================================
// CAMBIO DE FONDO SEGÚN ETAPA HISTÓRICA
// ===========================================

const breakSection =
document.querySelector(".break-section");

if(breakSection){

    const stageObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                document.body.classList
                .add("fragmented-era");

            }else{

                document.body.classList
                .remove("fragmented-era");

            }

        });

    },{

        threshold:0.5

    });

    stageObserver.observe(breakSection);

}