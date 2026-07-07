document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    if(startButton){
        startButton.addEventListener("click", () => {
            document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
        });
    }

    const triggers = document.querySelectorAll(".btn-info-trigger");
    const closeButtons = document.querySelectorAll(".close-modal");
    const overlays = document.querySelectorAll(".info-modal-overlay");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            const modalId = trigger.getAttribute("data-modal");
            const targetModal = document.getElementById(modalId);
            if(targetModal) targetModal.classList.add("active");
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const modalId = btn.getAttribute("data-target");
            const targetModal = document.getElementById(modalId);
            if(targetModal) targetModal.classList.remove("active");
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("active");
        });
    });

    const clickableCards = document.querySelectorAll(".clickable-target");
    clickableCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-active");
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll("section, footer").forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    const seatsSection = document.querySelector(".seats");
    if(seatsSection){
        const seatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const bars = document.querySelectorAll(".bar");
                    if(bars.length >= 2){
                        bars[0].style.width = "58%";
                        bars[1].style.width = "42%";
                    }
                }
            });
        }, { threshold: 0.5 });
        seatsObserver.observe(seatsSection);
    }

    const fragmentBtn = document.getElementById("fragment-btn");
    const fragmentContainer = document.getElementById("fragment-container");

    if(fragmentBtn && fragmentContainer){
        const blockColors = ['#15254B', '#15254B', '#4A4B70', '#4A4B70', '#EA3747', '#EA3747', '#E89B57', '#E89B57', '#8E44AD', '#8E44AD', '#2A9D8F', '#495057', '#C77DFF'];
        fragmentBtn.addEventListener("click", () => {
            fragmentContainer.innerHTML = "";
            for(let i = 0; i < 35; i++){
                const block = document.createElement("div");
                block.classList.add("mini-block");
                block.style.background = blockColors[Math.floor(Math.random() * blockColors.length)];
                fragmentContainer.appendChild(block);
            }
        });
    }

    const timelineData = {
        "1989": "Retorno a la democracia. Elección fundacional bajo las reglas del sistema binominal...",
        "1993": "Consolidación del duopolio parlamentario...",
        "2017": "Hito de cambio estructural. Se implementa el nuevo sistema electoral proporcional..."
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
                if(timelineData[year.innerText]) infoBox.innerText = timelineData[year.innerText];
            });
        });
    }
});