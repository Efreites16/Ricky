
let containerPj = document.querySelector('.container')

var offSet = 0
var limit = 20
var finish = 1

let next = document.querySelector('.nextB')
let back = document.querySelector('.backB')



const addElement = (array, offSet, limit) =>{
  for (i = offSet; i < offSet + limit; i++) {
  let html = `    
          <div class="pj">
            <img src="${array[i].image}" alt="">
            <p class="name"><b>Name:</b> ${array[i].name}</p>
            <p class="specie"><b>Specie:</b> ${array[i].species}</p>
            <p class="gender"><b>Gender:</b> ${array[i].gender} </p>
            <button class="info"> More info </button>
          </div>`
    containerPj.innerHTML += html
  }
}  

let newElement = () => {
  while (containerPj.firstChild) {
    containerPj.removeChild(containerPj.firstChild)
  }
}


const createElement = async () => {
  let peticion;
 
  peticion = await fetch('https://rickandmortyapi.com/api/character')
  let respuesta = await peticion.json()

  let totalPages = respuesta.info.pages

  let count = 1 

  
  const element = async (count) =>{
    var arrayPj = [];
    var holaComo;
    peticionChar = await fetch(`https://rickandmortyapi.com/api/character?page=${count}`)
    character = await peticionChar.json()

    for (i = 0; i < character.results.length; i++) {
      arrayPj.push(character.results[i])
    }

    return arrayPj
  }
  

  addElement(arrayPj, offSet, limit)

  next.addEventListener('click', () => {
    max = parseInt(arrayPj.length / limit)
    if (finish <= max) {
      finish += 1
      offSet += 20
      newElement()
      addElement(arrayPj, offSet, limit)
      scroll(0,0)
      count += 1
    }
  })

  back.addEventListener('click', () => {
    if (offSet != 0) {
      offSet -= 20
      finish -= 1
      newElement()
      addElement(arrayPj, offSet, limit)
      scroll(0, 0)
      count -= 1
    }
  })


  element(1).then

}

createElement()

