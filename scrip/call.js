const addElement = (array) =>{
  
  array.forEach(element => {
    let html = `    
          <div class="pj">
            <img src="${element.image}" alt="">
            <p class="name"><b>Name:</b> ${element.name}</p>
            <p class="specie"><b>Specie:</b> ${element.species}</p>
            <p class="gender"><b>Gender:</b> ${element.gender} </p>
            <button class="info"> More info </button>
          </div>`
    containerPj.innerHTML += html
  });
}  

let newElement = () => {
  while (containerPj.firstChild) {
    containerPj.removeChild(containerPj.firstChild)
  }
}

const setrickyPage = async ({btnN, btnP, url }) => {
  peticionChar = await fetch(url)
  response = await peticionChar.json()
  btnN.dataset.nextPage = response.info.next
  btnP.dataset.prevPage = response.info.prev

<<<<<<< HEAD
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
=======
  let arrayPj = response.results;

 return arrayPj
}
>>>>>>> c11125709fdc706782757d56b009622cb202fada


let containerPj = document.querySelector('.container')
let next = document.getElementById("next-btn")
let prev = document.getElementById("prev-btn")

setrickyPage({url: next.dataset.nextPage, btnN: next, btnP: prev}).then((list) => addElement(list))

if (next){
  next.addEventListener('click', () => {
    if(prev.dataset.nextPage !== "null"){
      setrickyPage({url: next.dataset.nextPage, btnN: next, btnP: prev})
      .then((list) => {
        newElement()
        addElement(list) 
        scroll(0,0)
      })
    }
  })

  prev.addEventListener('click', () => {
    
    if(prev.dataset.prevPage === "null"){
      element.classList.add("disbled");
    }else{
      setrickyPage({url: prev.dataset.prevPage, btnN: next, btnP: prev})  
      .then((list) => {
        newElement()
        addElement(list) 
        scroll(0,0)
      })
    }
  })
}prev.dataset.prevPage