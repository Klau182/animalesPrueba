import Animales from './consulta.js'

const animal = document.getElementById("animal")

animal.addEventListener("click", async () => {
    const { animales } = await Animales.getData()
    const animalNombre = animal.value
    const imagenPreview = animales.find(animal => animal.name === animalNombre)
    const preview = document.getElementById("preview")
    preview.style.backgroundImage = `url("./assets/imgs/${imagenPreview.imagen}")`
})
