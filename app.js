import { watches } from "./watches.js"

//Selects "watch" class in DOM
const watch = document.querySelector('.watch')

//Allows watch info for each watch to put into a bootstrap card for code resuability 
let watchMarkup = watches.map(watch => 
  `<div class="card text-center" style="width: 18rem;">
    <img src="${watch.image}">
    <div class="card-body">
      <h5 class="card-title">${watch.title}</h5>
      <p class="card-text">${watch.description}</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
  </div>`
).join('')

watch.innerHTML = watchMarkup

