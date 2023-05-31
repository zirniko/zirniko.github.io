// Array
const frameworks = [
    {
        name:"LARAVEL", 
        description:"Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8"
    },
    {
        name:"REACT JS", 
        description:"React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. "
    },
    {
        name:"VUE JS", 
        description:"Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. "
    },
    {
        name:"NODE JS", 
        description:"Node.js es un entorno de servidor de código abierto. Node.js es multiplataforma y se ejecuta en Windows, Linux, Unix y macOS."
    },
    {
        name:"FLUTTER", 
        description:"Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google. "
    },
    {
        name:"SWIFT", 
        description:"Swift es un lenguaje de programación multiparadigma creado por Apple enfocado en el desarrollo de aplicaciones para iOS y macOS."
    },
    {
        name:"DJANGO", 
        description:"Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador."
    },
    {
        name:"SPRING", 
        description:"Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java."
    },
    {
        name:"FLASK", 
        description:"Flask es un framework minimalista escrito en Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código."
    },
    {
        name:"LARAVEL", 
        description:"Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5, PHP 7 y PHP 8"
    },
    {
        name:"REACT JS", 
        description:"React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. "
    },
    {
        name:"VUE JS", 
        description:"Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. "
    },
    {
        name:"NODE JS", 
        description:"Node.js es un entorno de servidor de código abierto. Node.js es multiplataforma y se ejecuta en Windows, Linux, Unix y macOS."
    },
    {
        name:"FLUTTER", 
        description:"Flutter es un SDK de código fuente abierto de desarrollo de aplicaciones móviles creado por Google. "
    },
    {
        name:"SWIFT", 
        description:"Swift es un lenguaje de programación multiparadigma creado por Apple enfocado en el desarrollo de aplicaciones para iOS y macOS."
    },
    {
        name:"DJANGO", 
        description:"Django es un framework de desarrollo web de código abierto, escrito en Python, que respeta el patrón de diseño conocido como modelo–vista–controlador."
    },
    {
        name:"SPRING", 
        description:"Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java."
    },
    {
        name:"FLASK", 
        description:"Flask es un framework minimalista escrito en Python que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código."
    }
]

// render html
var html = "";
frameworks.forEach(e=>{
    html +="<div class='child'><div class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})
