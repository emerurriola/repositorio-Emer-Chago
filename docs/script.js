// ======================================================
// REPRESENTAR O FRAGMENTAR
// SCRIPT V2.5
// ======================================================

// ===========================================
// BOTÓN COMENZAR
// ===========================================
const startButton = document.getElementById("start-btn");
if(startButton){
    startButton.addEventListener("click",()=>{
        document.querySelector(".intro").scrollIntoView({
            behavior:"smooth"
        });
    });
}

// ===========================================
// APARICIÓN GRADUAL DE SECCIONES (Observer)
// ===========================================
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold: 0.15
});

document.querySelectorAll("section, footer").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// ===========================================
// ANIMACIÓN DE ESCAÑOS 1989
// ===========================================
const seats = document.querySelector(".seats");
if(seats){
    const barObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const bars = document.querySelectorAll(".bar");
                if(bars.length >= 2) {
                    bars[0].style.width = "58%";
                    bars[1].style.width = "42%";
                }
            }
        });
    },{
        threshold: 0.3
    });
    barObserver.observe(seats);
}

// ===========================================
// FRAGMENTACIÓN DEL CONGRESO (Simulador)
// ===========================================
const fragmentButton = document.getElementById("fragment-btn");
if(fragmentButton){
    fragmentButton.addEventListener("click",()=>{
        const container = document.getElementById("fragment-container");
        container.innerHTML = "";

        const colores = [
            "#EA3747", // rojo
            "#15254B", // azul marino
            "#4A4B70", // morado
            "#E89B57", // naranjo
            "#8E44AD",
            "#2A9D8F",
            "#495057",
            "#C77DFF",
            "#F4A261",
            "#577590"
        ];

        // Duplicamos o triplicamos elementos para simular alta densidad de fragmentación
        const bloquesSimulados = [...colores, ...colores, ...colores.slice(0,4)];

        bloquesSimulados.forEach((color, index)=>{
            setTimeout(()=>{
                const bloque = document.createElement("div");
                bloque.classList.add("mini-block");
                bloque.style.background = color;
                container.appendChild(bloque);
            }, index * 60); // Animación un poco más rápida y fluida
        });
    });
}

// ===========================================
// LÍNEA DE TIEMPO INTERACTIVA E INYECTOR DE TEXTO
// ===========================================
const timelineData = {
    "1989": "Primeras elecciones parlamentarias tras el retorno a la democracia.",
    "1993": "La Concertación aumenta su presencia a 70 escaños.",
    "1997": "Aparecen candidaturas independientes y el pacto Chile 2000.",
    "2001": "Se mantiene la lógica de las dos grandes coaliciones.",
    "2005": "Persistencia del sistema binominal.",
    "2009": "Última década de hegemonía bipartidista.",
    "2013": "Última elección antes de la reforma proporcional.",
    "2017": "Se implementa el nuevo sistema electoral proporcional con redistritaje.",
    "2021": "El PDG logra una irrupción significativa en la cámara.",
    "2025": "Mayor fragmentación y consolidación de nuevas fuerzas políticas."
};

const timelineSection = document.querySelector(".timeline .text-side");
const years = document.querySelectorAll(".timeline .year");

if(timelineSection && years.length > 0){
    const infoBox = document.createElement("div");
    infoBox.classList.add("timeline-info");
    infoBox.innerText = timelineData["1989"];
    timelineSection.appendChild(infoBox);

    years.forEach(year=>{
        year.addEventListener("click",()=>{
            years.forEach(y=> y.classList.remove("selected"));
            year.classList.add("selected");
            
            // Efecto sutil de refresco de contenido
            infoBox.style.animation = 'none';
            infoBox.offsetHeight; // Truco de reflujo de renderizado CSS
            infoBox.style.animation = 'aparecer 0.4s ease forwards';
            infoBox.innerText = timelineData[year.innerText];
        });
    });
}

// ===========================================
// EFECTO DE APARICIÓN SCON INTERSECCIÓN EN PARTIDOS
// ===========================================
const partidos = document.querySelectorAll(".grid-partidos div");
if(partidos.length > 0) {
    const partidosObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const index = [...partidos].indexOf(entry.target);
                setTimeout(()=>{
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 80);
            }
        });
    },{
        threshold: 0.15
    });

    partidos.forEach(partido=>{
        partido.style.opacity = "0";
        partido.style.transform = "translateY(30px)";
        partido.style.transition = "all .6s ease";
        partidosObserver.observe(partido);
    });
}