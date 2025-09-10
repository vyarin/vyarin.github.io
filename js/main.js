function updateNavDate(time) {
    document.getElementById("nav-date").innerHTML = `${time.toLocaleString('default', { month: 'short' })}. ${time.getFullYear()}`;
}

function updateFootDate(time) {
    document.getElementById("foot-date").innerHTML = time.getFullYear();
}

function toggleMenu() {
    let menu = document.getElementById("mobile-menu-items");
    let menuButton = document.getElementById("menu-toggle");
    let body = document.body.style;
    
    menuButton.onclick = function () {
        menuButton.classList.toggle("active");
        menu.classList.toggle("active");
        
        if (body.overflow == "hidden") {
            body.removeProperty("overflow");
        } else {
            body.overflow = "hidden";
        }

        menu.ariaExpanded = (menu.ariaExpanded == "false") ? "true" : "false";
        menu.ariaHidden = (menu.ariaHidden == "false") ? "true" : "false";
    }; 
}


addEventListener("DOMContentLoaded", function () { 
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1.25,
        mobile: {
            smooth: false
        },
        tablet: {
            smooth: false
        }
    });

    let currentTime = new Date();

    updateNavDate(currentTime);
    updateFootDate(currentTime);
    toggleMenu();
})