(function() {
    "use strict";

    // Selectionner un element facilement
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
      }

    // Ajouter un evenement facilement a une selection
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
    
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
      }

    const scrollto = (el) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Mobile Nav-Bar
    on('click', '.mobile-nav-toggle', function() {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    
}) ()

