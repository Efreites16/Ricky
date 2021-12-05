let container = document.querySelector('.container')

var offSet = 0
var limit = 4
var finish = 1

let next = document.querySelector('.next')
let back = document.querySelector('.back')


let newElement = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}



const addElement = (array, offSet, limit) => {
  for (i = offSet; i < offSet + limit; i++) {
    let date = new Date(array[i].created)
    console.log()
    let html = `
      <div class="dimension">
        <h1>${array[i].name}</h1>
        <p>Type: ${array[i].type}</p>
        <p> Creado: ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()} </p>
      </div>`
    container.innerHTML += html
  }
}



const createLocation = async () =>{
  let peticion;

  peticion = await fetch('https://rickandmortyapi.com/api/location')
  respuesta = await peticion.json()

  let totalPages = respuesta.info.pages

  let count = 1

  let arrayArea = [];

  while (count <= totalPages) {
    peticionChar = await fetch(`https://rickandmortyapi.com/api/location?page=${count}`)
    character = await peticionChar.json()

    for (i = 0; i < character.results.length; i++) {
      arrayArea.push(character.results[i])
    }

    count += 1
  }

  addElement(arrayArea, offSet, limit)

  next.addEventListener('click', () => {

    max = parseInt(arrayArea.length / limit)

    if (finish <= max) {
      finish += 1
      offSet += 4
      newElement()
      addElement(arrayArea, offSet, limit)
      scroll(0,0)
    }
    console.log('hola')
  })

  back.addEventListener('click', () => {
    if (offSet != 0) {
      offSet -= 4
      finish -= 1
      newElement()
      addElement(arrayArea, offSet, limit)
      scroll(0,0)
    }
  })

}

createLocation()