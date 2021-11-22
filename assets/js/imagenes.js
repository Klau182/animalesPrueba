import Animales from './Consulta.js'

const animal = document.getElementById("animal")
const preview = document.getElementById("preview")

animal.addEventListener("click", async () => {
    const { animales } = await Animales.getData()
    const animalNombre = animal.value
    const imagenPreview = animales.find(animal => animal.name === animalNombre)
    preview.style.backgroundImage = `url("./assets/imgs/${imagenPreview.imagen}")`
})
