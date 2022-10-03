const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".imagen");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        event.dataTransfer.setDragImage(elementoImg, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" 
    })

    seccion.addEventListener("drop", event => {
        const idParrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move" 
})
papelera.addEventListener("drop", event => {
    const idParrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(idParrafo)
    parrafo.remove(parrafo)
})