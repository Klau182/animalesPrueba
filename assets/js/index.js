import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Tipo.js"
import Animales from "./Consulta.js";

let animalesInvestigados = [];

let nombreAnimal = document.getElementById("animal")
const btnRegistrar = document.querySelector("#btnRegistrar")

btnRegistrar.addEventListener("click", async (e) => {
    e.preventDefault();

    let edadAnimal = document.querySelector("#edad")
    let comentariosAnimal = document.querySelector("#comentarios")
    const {animales} = await Animales.getData();
    const animalObject = animales.find(animal => animal.name === nombreAnimal.value);

    let nuevoAnimal;

    //se solicita llenar todos los campos//    
    if(nombreAnimal.value && edadAnimal.value && comentariosAnimal.value) {

        if(nombreAnimal.value == "Leon") {
            nuevoAnimal = new Leon(nombreAnimal.value, edadAnimal.value, `./assets/imgs/${animalObject.imagen}`, comentariosAnimal.value, `./assets/sounds/${animalObject.sonido}`)
            
        }else if (nombreAnimal.value == "Lobo") {
            nuevoAnimal = new Lobo(nombreAnimal.value, edadAnimal.value, `./assets/imgs/${animalObject.imagen}`, comentariosAnimal.value, `./assets/sounds/${animalObject.sonido}`)

        } else if (nombreAnimal.value == "Oso") {
            nuevoAnimal = new Oso(nombreAnimal.value, edadAnimal.value, `./assets/imgs/${animalObject.imagen}`, comentariosAnimal.value, `./assets/sounds/${animalObject.sonido}`)

        }else if (nombreAnimal.value == "Serpiente") {
            nuevoAnimal = new Serpiente(nombreAnimal.value, edadAnimal.value, `./assets/imgs/${animalObject.imagen}`, comentariosAnimal.value, `./assets/sounds/${animalObject.sonido}`)
        }else if (nombreAnimal.value == "Aguila") {
            nuevoAnimal = new Aguila(nombreAnimal.value, edadAnimal.value, `./assets/imgs/${animalObject.imagen}`, comentariosAnimal.value, `./assets/sounds/${animalObject.sonido}`)
        };

        //se resetea el formulario//
        nombreAnimal.selectedIndex = 0
        edadAnimal.selectedIndex = 0
        comentariosAnimal.value = ""
        animalesInvestigados.push(nuevoAnimal)

        mostrarTabla();

    } else {
        alert("Faltan datos por llenar")
    };
});


const mostrarTabla = () => {
    const animalesTemplate = document.getElementById('Animales')
    animalesTemplate.innerHTML = ""
    animalesInvestigados.forEach((a) => {
        animalesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante" data-fighter="${a.getNombre()}">
                <div class="card">
                    <img 
                      src="${a.getImg()}" 
                      class="card-img-top"/>
                    <div class="card-body">
                        <button class="btn btn-outline-warning" onclick="sonido('${a.getSonido()}')">Sonido<button>
                    </div>
                </div>
         </div>`
    });
}

window.sonido = (rutaSonido) => {
    let sound = new Audio(rutaSonido)
    sound.play()
};



