// Array
const frameworks = [
    {
        name:"2019 - 2022", 
        description:" Técnico programacion y analisis de sistemas . Instituto profeccional AIEP"
    },
    {
        name:"2017-2019", 
        description:" Técnico administracion de empresas mención recursos humanos . Complejo educacional la frontera "
    },
    {
        name:"2018", 
        description:" Pasantia profesional Paris Ltda. "
    },
    {
        name:"2018-2019", 
        description:"Pasantia profesional Jhonson Ltda."
    },
    {
        name:"?????", 
        description:"?????."
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
