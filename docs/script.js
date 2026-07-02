// ======================================================
// REPRESENTAR O FRAGMENTAR
// SCRIPT V3.0 (Interactividad Extendida y Modales)
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
   
    // 1. BOTÓN COMENZAR (SCROLL)
    const startButton = document.getElementById("start-btn");
    if(startButton){
        startButton.addEventListener("click", () => {
            document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. MODALES INTERACTIVOS (SISTEMAS ELECTORALES)
    const triggers = document.querySelectorAll(".btn-info-trigger");
    const closeButtons = document.querySelectorAll(".close-modal");
    const overlays = document.querySelectorAll(".info-modal-overlay");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const modalId = trigger.getAttribute("data-modal");
            const targetModal = document.getElementById(modalId);
            if(targetModal) targetModal.classList.add("active");
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-target");
            const targetModal = document.getElementById(modalId);
            if(targetModal) targetModal.classList.remove("active");
        });
    });

    // Cerrar modal al hacer clic en el fondo difuminado
    overlays.forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if(e.target === overlay) {
                overlay.classList.remove("active");
            }
        });
    });

    // 3. OBSERVER: APARICIÓN GRADUAL DE SECCIONES
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section, footer, .protagonista-card, .disuelto-card").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

    // 4. ANIMACIÓN DE ESCAÑOS 1989 (CONCERTACIÓN VS ALIANZA)
    const seats = document.querySelector(".seats");
    if(seats){
        const barObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const bars = document.querySelectorAll(".bar");
                    if(bars.length >= 2) {
                        bars[0].style.width = "58%";
                        bars[1].style.width = "42%";
                    }
                }
            });
        }, { threshold: 0.2 });
        barObserver.observe(seats);
    }

    // 5. SIMULADOR DE FRAGMENTACIÓN EXTENDIDO
    const fragmentButton = document.getElementById("fragment-btn");
    if(fragmentButton){
        fragmentButton.addEventListener("click", () => {
            const container = document.getElementById("fragment-container");
            container.innerHTML = "";

            const colores = [
                "#EA3747", "#15254B", "#4A4B70", "#E89B57",
                "#8E44AD", "#2A9D8F", "#495057", "#C77DFF",
                "#F4A261", "#577590"
            ];

            // Multiplicamos bloques para simular una fragmentación real de bancadas
            const bloquesSimulados = [...colores, ...colores, ...colores];

            bloquesSimulados.forEach((color, index) => {
                setTimeout(() => {
                    const bloque = document.createElement("div");
                    bloque.classList.add("mini-block");
                    bloque.style.background = color;
                    container.appendChild(bloque);
                }, index * 40); // Secuencia fluida y acelerada
            });
        });
    }

    // 6. LÍNEA DE TIEMPO INTERACTIVA
    const timelineData = {
        "1989": "Primeras elecciones tras la dictadura. Nace el duopolio binominal.",
        "1993": "La Concertación se expande y asume el control de 70 escaños legislativos.",
        "1997": "Primeros indicios de desgaste; surgen facciones independientes marginales.",
        "2001": "Empate técnico implícito. El duopolio opera de forma rígida.",
        "2005": "Continuidad institucional absoluta bajo las reglas binominales.",
        "2009": "Mutación de coaliciones tradicionales en busca de capital electoral.",
        "2013": "Último proceso parlamentario regido de forma estricta por el binominal.",
        "2017": "Hito histórico: debuta el modelo proporcional y el Congreso se abre a 7 pactos.",
        "2021": "Irrupción de fuerzas personalistas extremas (ej. PDG) que quiebran bloques.",
        "2025": "Hemiciclo hiperfragmentado. Alta complejidad legislativa para lograr quórum."
    };

    const timelineSection = document.querySelector(".timeline .text-side");
    const years = document.querySelectorAll(".timeline .year");

    if(timelineSection && years.length > 0){
        const infoBox = document.createElement("div");
        infoBox.classList.add("timeline-info");
        infoBox.innerText = timelineData["1989"];
        timelineSection.appendChild(infoBox);

        years.forEach(year => {
            year.addEventListener("click", () => {
                years.forEach(y => y.classList.remove("selected"));
                year.classList.add("selected");
               
                infoBox.style.animation = 'none';
                infoBox.offsetHeight; // Truco de reflujo CSS para reiniciar animación
                infoBox.style.animation = 'aparecer 0.4s ease forwards';
                infoBox.innerText = timelineData[year.innerText];
            });
        });
    }
});