import { clear_sidebar_items, render_project_details } from "./utilities.js";

let $content = document.querySelector(".content")
let $title = document.querySelector('title');
let $sidebar_items = document.querySelectorAll('.sidebar__item > a');

window.addEventListener("hashchange", e => { router() })

document.addEventListener('DOMContentLoaded', e => { router() })
function router() {
    let { hash } = window.location;

    switch (hash) {
        case '#proyectos':
            fetch(`./view/projects.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    $title.innerHTML = 'Proyectos';
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[1].classList.add('sidebar-item--selected')
                }).catch((error) => { console.error("error") });

            break;
        case '#acerca-de-mi':
            fetch(`./view/about.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    console.info($sidebar_items[0])
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[0].classList.add('sidebar-item--selected')
                    $title.innerHTML = 'Acerca de mí'
                }).catch((error) => { console.error("error") })
            break;
        case '':
            fetch(`./view/about.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[0].classList.add('sidebar-item--selected')
                    $title.innerHTML = 'Acerca de mí'
                }).catch((error) => { console.error("error") })
            break;
        case '#experiencia-laboral':
            fetch(`./view/work-experience.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    $title.innerHTML = 'Experiencia laboral';
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[2].classList.add('sidebar-item--selected')
                }).catch((error) => { console.error("error") })
            break;
        case '#formacion':
            fetch(`./view/training.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[3].classList.add('sidebar-item--selected')
                    $title.innerHTML = 'Formación ';
                }).catch((error) => { console.error("error") })
            break;
        case '#tecnologias':
            fetch(`./view/technologies.html`)
                .then(res => res.ok ? res.text() : Promise.reject(error))
                .then((html) => {
                    $content.innerHTML = html;
                    clear_sidebar_items($sidebar_items)
                    $sidebar_items[4].classList.add('sidebar-item--selected')
                    $title.innerHTML = 'Tecnologías';
                }).catch((error) => { console.error("error") })
            break;
        case '#proyecto-espacio-n':
            let html_1 = render_project_details('espacio_n');
            $content.innerHTML = html_1;
            clear_sidebar_items($sidebar_items);
            $sidebar_items[1].classList.add('sidebar-item--selected')
            $title.innerHTML = 'Proyecto educativo';
            break;
        case '#proyecto-calidad-financiera':
            let html_2 = render_project_details('calidad_financiera');
            $content.innerHTML = html_2;
            clear_sidebar_items($sidebar_items);
            $sidebar_items[1].classList.add('sidebar-item--selected')
            $title.innerHTML = 'Proyecto administrativo';
            break;
        case '#proyecto-tu-puedes':
            let html_3 = render_project_details('tu_puedes');
            $content.innerHTML = html_3;
            clear_sidebar_items($sidebar_items);
            $sidebar_items[1].classList.add('sidebar-item--selected')
            $title.innerHTML = 'Proyecto educativo';
            break;
        case '#proyecto-asistente-virtual-gregorin':
            let html = render_project_details('asistente_virtual_gregorin');
            $content.innerHTML = html;
            clear_sidebar_items($sidebar_items);
            $sidebar_items[1].classList.add('sidebar-item--selected')
            $title.innerHTML = 'Proyecto de sistema experto';
            break;

        case '#proyecto-sonidos-del-habla':
            let html2 = render_project_details('sonidos_del_habla');
            $content.innerHTML = html2;
            clear_sidebar_items($sidebar_items);
            $sidebar_items[1].classList.add('sidebar-item--selected')
            $title.innerHTML = 'Proyecto educativo';
            break;



        default:
            break;
    }
}

