function showSubmenu(submenu) {
    if (submenu.className == "header-nav-item" || submenu.className == "options-menu") {
        document.querySelector(".options-menu#"+submenu.getAttribute("id").replace("-menu","")+"-menu").setAttribute('style', "");
    } else if (submenu.className == "mobile-nav-item" || submenu.className == "mobile-options-menu") {
        document.querySelector(".mobile-options-menu#"+submenu.getAttribute("id").replace("-menu","")+"-menu").setAttribute('style', "");
    }
}

function hideSubmenu(submenu) {
    if (submenu.className == "header-nav-item" || submenu.className == "options-menu") {
        document.querySelector(".options-menu#"+submenu.getAttribute("id").replace("-menu","")+"-menu").setAttribute('style', "display: none;");
    } else if (submenu.className == "mobile-nav-item" || submenu.className == "mobile-options-menu") {
        document.querySelector(".mobile-options-menu#"+submenu.getAttribute("id").replace("-menu","")+"-menu").setAttribute('style', "display: none;");
    }
}

function showMobileNav() {
    document.getElementsByClassName("mobile-nav-container")[0].className = "mobile-nav-container mobile-show";
}

function hideMobileNav() {
    document.getElementsByClassName("mobile-nav-container")[0].className = "mobile-nav-container";
}

function handleMobileChange(media) {
    if (media.matches) {
        hideMobileNav()   
    }
}

function handleMobileSubmenu(submenu) {
    if (document.querySelector(".mobile-options-menu#"+submenu.getAttribute("id")+"-menu").getAttribute("style") == "display: none;") {
        showSubmenu(submenu);
        console.log("notdoing");
    } else {
        console.log("doing");
        hideSubmenu(submenu);
    }
}

document.querySelector(".header-nav #option-services").addEventListener('mouseenter', function(e) { showSubmenu(e.target) });
document.querySelector(".header-nav #option-services").addEventListener('mouseleave', function(e) { hideSubmenu(e.target) });
document.querySelector("#option-services-menu").addEventListener('mouseenter', function(e) { showSubmenu(e.target) });
document.querySelector("#option-services-menu").addEventListener('mouseleave', function(e) { hideSubmenu(e.target) });

document.querySelector(".header-nav-drop-down-button").addEventListener('click', function(e) { showMobileNav() });
document.querySelector(".mobile-nav-container .usoverlay").addEventListener('click', function(e) { hideMobileNav() })

document.querySelector(".mobile-nav-item#option-services").addEventListener('click', function(e) { handleMobileSubmenu(e.target) });

let mobilemedia = window.matchMedia("(min-width: 768px)");
handleMobileChange(mobilemedia);
mobilemedia.addListener(handleMobileChange);