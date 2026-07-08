// ======================================================
// REPRESENTAR O FRAGMENTAR
// SCRIPT V3.1 (Interactividad Extendida y Modales)
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

    document.querySelectorAll("section, footer, .protagonista-card, .disuelto-card, .decorative-card").forEach(el => {
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
        "1989": "Nace la Concertación de Partidos por la Democracia, integrada por 17 partidos de oposición, entre ellos la Democracia Cristiana (DC), el Partido por la Democracia (PPD), el Partido Radical (PR) y diversas facciones del Partido Socialista (PS). En las primeras elecciones parlamentarias tras el retorno a la democracia obtuvo 67 escaños en la Cámara de Diputados. Por su parte, la Alianza, conformada por Renovación Nacional (RN) y la Unión Demócrata Identificadora (UDI), consiguió 48 escaños, una cifra significativa considerando que estaba integrada únicamente por dos partidos. Los restantes escaños fueron obtenidos por un candidato independiente y por las coaliciones Unidad para la Democracia y Liberal Socialista Chileno, ambas de tendencia izquierdista.",
        "1993": "La Concertación aumentó su representación parlamentaria al obtener 70 escaños, mientras que la Alianza alcanzó 50. El resultado consolidó el predominio de ambos bloques políticos, dejando escaso espacio para fuerzas políticas ajenas a estas coaliciones y reforzando el carácter bipolar del sistema binominal.",
        "1997": "La coalición Chile 2000, de orientación populista y liderada por Francisco Javier Errázuriz (Fra Fra), obtuvo dos escaños en la Cámara de Diputados, aunque no volvería a participar con éxito en las siguientes elecciones. Además, resultaron electos dos candidatos independientes: Rosa González Román, por el Distrito 1, y Samuel Venegas Vargas, por el Distrito 15, constituyendo una de las pocas excepciones al predominio de las grandes coaliciones.",
        "2001": "La Concertación y la Alianza retomaron el control casi absoluto del Congreso Nacional. La Concertación obtuvo 63 escaños, mientras que la Alianza alcanzó 57, manteniendo la lógica de competencia entre los dos principales bloques políticos.",
        "2005": "La Concertación consiguió 65 escaños, la Alianza 54 y la Fuerza Regional Independiente obtuvo un escaño. Estos resultados reflejaron la continuidad del sistema político bajo las reglas del sistema electoral binominal, situación que se mantendría en las siguientes elecciones.",
        "2009": "En las últimas elecciones en que participó la Concertación como coalición, el bloque obtuvo 57 escaños, su resultado más bajo desde el retorno a la democracia. Paralelamente, su candidato presidencial, Eduardo Frei Ruiz-Tagle, fue derrotado por Sebastián Piñera Echenique, marcando el primer triunfo presidencial de la derecha desde 1990. En la Cámara de Diputados, la Alianza superó por primera vez a la Concertación al obtener 58 escaños, uno más que su principal rival.",
        "2013": "Se conformó la Nueva Mayoría, coalición sucesora de la Concertación e integrada, además, por el Partido Comunista. Ese mismo año, Michelle Bachelet fue elegida por segunda vez Presidenta de la República y la Nueva Mayoría obtuvo 65 escaños. La Alianza alcanzó 49 escaños, siendo esta su última elección bajo dicha denominación.",
        "2017": "Entró en vigencia el sistema electoral proporcional, reemplazando al sistema binominal. Los distritos se reorganizaron en 28 circunscripciones para la Cámara de Diputados, aumentando el número de escaños de 120 a 155, distribuidos según la población de cada distrito. En estas elecciones, Chile Vamos obtuvo 72 escaños, mientras que el Frente Amplio irrumpió como una nueva fuerza política con 20 diputados, reduciendo el predominio de la Nueva Mayoría, que enfrentó su última elección como coalición.",
        "2021": "La primera elección parlamentaria tras el estallido social y el proceso constituyente evidenció un Congreso mucho más fragmentado. Surgieron nuevas fuerzas políticas, como el Frente Social Cristiano, que obtuvo 15 escaños, y el Partido de la Gente (PDG), con 6 diputados. En total, nueve coaliciones o pactos lograron representación en la Cámara de Diputados, un escenario muy distinto al observado durante la vigencia del sistema binominal.",
        "2025": "Las elecciones de 2025 confirmaron la consolidación de un Congreso altamente fragmentado. Tanto los sectores de izquierda como de derecha ampliaron su diversidad interna mediante la incorporación de nuevos partidos y movimientos políticos, configurando un escenario de mayor pluralismo y una distribución del poder más dispersa que en las décadas anteriores."
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