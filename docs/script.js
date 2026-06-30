// ======================================================
// REPRESENTAR O FRAGMENTAR
// SCRIPT V4
// ======================================================


// ===========================================
// BOTÓN COMENZAR
// ===========================================

const startButton = document.getElementById("start-btn");

if(startButton){

    startButton.addEventListener("click",()=>{

        const intro = document.querySelector(".intro");

        if(intro){

            intro.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}


// ===========================================
// ANIMACIONES SCROLL
// ===========================================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:0.18

});


revealElements.forEach(section=>{

    revealObserver.observe(section);

});


// ===========================================
// HERO PARALLAX
// ===========================================

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    if(hero){

        const scroll = window.pageYOffset;

        hero.style.backgroundPositionY =
        `${scroll * 0.45}px`;

    }

});


// ===========================================
// ANIMACIÓN LOGO
// ===========================================

const heroLogo =
document.querySelector(".hero-logo");

window.addEventListener("load",()=>{

    if(heroLogo){

        heroLogo.style.opacity="0";

        heroLogo.style.transform="translateY(40px)";

        heroLogo.style.transition="1.2s ease";

        setTimeout(()=>{

            heroLogo.style.opacity="1";

            heroLogo.style.transform="translateY(0)";

        },300);

    }

});


// ===========================================
// EFECTO HOVER EN IMÁGENES
// ===========================================

const images =
document.querySelectorAll(

".chapter-image img, .intro-image img, .visual-story-image img"

);

images.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.03)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


// ===========================================
// APARICIÓN SUAVE DE TARJETAS
// ===========================================

const cards =
document.querySelectorAll(

".chapter-card, .number-card"

);

cards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".8s ease";

});


const cardsObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const index =
            [...cards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            },index*150);

        }

    });

},{
    threshold:0.25
});


cards.forEach(card=>{

    cardsObserver.observe(card);

});
// ===========================================
// TIMELINE INTERACTIVA
// ===========================================

const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineTitle =
document.getElementById("timeline-title");

const timelineText =
document.getElementById("timeline-text");


const timelineData={

    "1989":{

        title:"1989",

        text:"Primeras elecciones parlamentarias tras el retorno a la democracia. La Concertación obtiene mayoría en la Cámara de Diputados."

    },

    "1993":{

        title:"1993",

        text:"La Concertación aumenta su representación parlamentaria y consolida el predominio de las dos grandes coaliciones."

    },

    "1997":{

        title:"1997",

        text:"Surgen algunas listas alternativas, aunque el sistema binominal continúa favoreciendo la competencia entre dos bloques."

    },

    "2001":{

        title:"2001",

        text:"El Congreso mantiene una composición altamente estable y dominada por las principales coaliciones."

    },

    "2005":{

        title:"2005",

        text:"Continúa la lógica bipartidista bajo el sistema binominal."

    },

    "2009":{

        title:"2009",

        text:"Última elección parlamentaria antes de las reformas que modificarían el sistema electoral."

    },

    "2013":{

        title:"2013",

        text:"Se desarrolla la última elección bajo el sistema binominal."

    },

    "2017":{

        title:"2017",

        text:"Comienza el sistema proporcional. Se amplía la representación y aparecen nuevas fuerzas políticas."

    },

    "2021":{

        title:"2021",

        text:"El Congreso presenta una de las composiciones más diversas desde el retorno a la democracia."

    },

    "2025":{

        title:"2025",

        text:"La fragmentación partidaria se consolida como uno de los principales desafíos del sistema político."

    }

};


// ===========================================
// CAMBIO DE INFORMACIÓN
// ===========================================

timelineItems.forEach(item=>{

    item.addEventListener("click",()=>{

        timelineItems.forEach(year=>{

            year.classList.remove("active");

        });

        item.classList.add("active");

        const year=item.dataset.year;

        timelineTitle.textContent=
        timelineData[year].title;

        timelineText.textContent=
        timelineData[year].text;

    });

});


// ===========================================
// APARICIÓN DE LA TIMELINE
// ===========================================

const timeline =
document.querySelector(".timeline");

if(timeline){

    timeline.style.opacity="0";

    timeline.style.transform="translateY(40px)";

    timeline.style.transition="1s ease";

    const timelineObserver=
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                timeline.style.opacity="1";

                timeline.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.25

    });

    timelineObserver.observe(timeline);

}


// ===========================================
// EFECTO HOVER EN LOS AÑOS
// ===========================================

timelineItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="scale(1.12)";

    });

    item.addEventListener("mouseleave",()=>{

        if(!item.classList.contains("active")){

            item.style.transform="scale(1)";

        }

    });

});


// ===========================================
// ANIMACIÓN DE LA CAJA DE TEXTO
// ===========================================

if(timelineTitle && timelineText){

    timelineItems.forEach(item=>{

        item.addEventListener("click",()=>{

            timelineTitle.style.opacity="0";

            timelineText.style.opacity="0";

            setTimeout(()=>{

                timelineTitle.style.opacity="1";

                timelineText.style.opacity="1";

            },150);

        });

    });

}
// ===========================================
// FRAGMENTACIÓN DEL CONGRESO
// ===========================================

const fragmentButton =
document.getElementById("fragment-btn");

const fragmentContainer =
document.getElementById("fragment-container");

if(fragmentButton && fragmentContainer){

    fragmentButton.addEventListener("click",()=>{

        fragmentContainer.innerHTML="";

        const partidos=[

            {nombre:"RN",color:"#15254B"},
            {nombre:"UDI",color:"#243B72"},
            {nombre:"PS",color:"#EA3747"},
            {nombre:"FA",color:"#E89B57"},
            {nombre:"PC",color:"#8E44AD"},
            {nombre:"DC",color:"#2A9D8F"},
            {nombre:"PDG",color:"#495057"},
            {nombre:"PSC",color:"#C77DFF"},
            {nombre:"PPD",color:"#0E7490"},
            {nombre:"IND",color:"#6C757D"}

        ];

        partidos.forEach((partido,index)=>{

            setTimeout(()=>{

                const bloque=document.createElement("div");

                bloque.classList.add("mini-block");

                bloque.style.background=partido.color;

                bloque.style.display="flex";
                bloque.style.justifyContent="center";
                bloque.style.alignItems="center";

                bloque.style.color="white";
                bloque.style.fontWeight="700";
                bloque.style.fontFamily="Montserrat";

                bloque.innerText=partido.nombre;

                fragmentContainer.appendChild(bloque);

            },index*140);

        });

        fragmentButton.innerText="Fragmentación mostrada";

        fragmentButton.disabled=true;

    });

}


// ===========================================
// EFECTO EN LA SECCIÓN OSCURA
// ===========================================

const fragmentSection =
document.querySelector(".fragment-section");

if(fragmentSection){

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                fragmentSection.style.backgroundPositionY="center";

            }

        });

    },{

        threshold:.3

    });

    observer.observe(fragmentSection);

}


// ===========================================
// ANIMACIÓN DE LOS PARTIDOS
// ===========================================

const parties =
document.querySelectorAll(".party-grid div");

const partyObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const index=[...parties].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            },index*80);

        }

    });

},{

    threshold:.25

});

parties.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s ease";

    partyObserver.observe(card);

});


// ===========================================
// EFECTO HOVER BOTÓN
// ===========================================

if(fragmentButton){

    fragmentButton.addEventListener("mouseenter",()=>{

        fragmentButton.style.transform="scale(1.05)";

    });

    fragmentButton.addEventListener("mouseleave",()=>{

        fragmentButton.style.transform="scale(1)";

    });

}


// ===========================================
// CONTADOR DE BLOQUES
// ===========================================

let bloquesCreados=0;

function actualizarContador(){

    bloquesCreados++;

    console.log(

        "Bloques creados:",

        bloquesCreados

    );

}
// ===========================================
// ANIMACIÓN DE LOS NÚMEROS
// ===========================================

const numberCards =
document.querySelectorAll(".number-card span");

const numbersObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("scale");

        }

    });

},{

    threshold:.3

});

numberCards.forEach(number=>{

    numbersObserver.observe(number);

});


// ===========================================
// EFECTO ESCRITURA EN LA CITA FINAL
// ===========================================

const quote =
document.querySelector(".quote-box p");

if(quote){

    const originalText = quote.innerText;

    quote.innerText = "";

    let started = false;

    const quoteObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting && !started){

                started = true;

                let i = 0;

                const typing = setInterval(()=>{

                    quote.innerText += originalText.charAt(i);

                    i++;

                    if(i >= originalText.length){

                        clearInterval(typing);

                    }

                },20);

            }

        });

    },{

        threshold:.5

    });

    quoteObserver.observe(quote);

}


// ===========================================
// APARICIÓN DEL FOOTER
// ===========================================

const footer =
document.querySelector("footer");

if(footer){

    footer.style.opacity="0";

    footer.style.transform="translateY(60px)";

    footer.style.transition="1s ease";

    const footerObserver =
    new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                footer.style.opacity="1";

                footer.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.2

    });

    footerObserver.observe(footer);

}


// ===========================================
// EFECTO HOVER EN BOTONES
// ===========================================

const buttons =
document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


// ===========================================
// RESALTAR SECCIÓN ACTIVA EN SCROLL
// ===========================================

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 200;

        if(window.scrollY >= top){

            current = section.className;

        }

    });

});


// ===========================================
// MENSAJE EN CONSOLA
// ===========================================

console.log(
"Representar o Fragmentar - WebStory cargada correctamente."
);


// ===========================================
// FIN DEL SCRIPT
// ===========================================