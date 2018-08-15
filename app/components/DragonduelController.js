import DragonduelService from './DragonduelService.js'


let dragonService = new DragonduelService()

function drawDragons(dragons) {
    let template = ''
    for (let i = 0; i < dragons.length; i++) {
        const dragon = dragons[i];
        template += `
        <div class="col-12 dragons">
        <p>${dragon.id}</p>
        <p>${dragon.name}</p>
        <p>${dragon.maxHp}</p>
        <p>${dragon.currentHp}</p> 
        <img src="${dragon.imgUrl}" alt="draaaaaayginz">
        </div>
        `
    }
    document.getElementById('dragons').innerHTML = template
}

export default class DragonduelController {
    constructor() {
        dragonService.getDragons(drawDragons)
    }
    
}