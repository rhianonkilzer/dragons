import DragonduelService from './DragonduelService.js'


let dragonService = new DragonduelService()

function drawChampions(champions) {
    let template = ''
    for (let i = 0; i < champions.length; i++) {
        const champion = champions[i];
        template += `
        <div class="col-12 champions text-center">
        <img src="${champion.imgUrl}" alt="champs">
        <p>${champion.id}</p>
        <p>${champion.name}</p>
        <p>${champion.race}</p>
        <p>${champion.hp}</p> 
        <p>${champion.class}</p>
        </div>
        `
    }
    document.getElementById('champions').innerHTML = template
}

function drawDragons(dragons) {
    let template = ''
    for (let i = 0; i < dragons.length; i++) {
        const dragon = dragons[i];
        template += `
        <div class="col-12 dragons">
        <img src="${dragon.imgUrl}" alt="draaaaaayginz">
        <p>${dragon.id}</p>
        <p>${dragon.name}</p>
        <p>${dragon.maxHp}</p>
        <p>${dragon.currentHp}</p> 
        
        </div>
        `
    }
    document.getElementById('dragons').innerHTML = template
}

export default class DragonduelController {
    constructor() {
        dragonService.getDragons(drawDragons)
        dragonService.getChampions(drawChampions)
    }

}