import Dragon from '../models/Dragon.js';
import Champion from '../models/Champion.js'

// @ts-ignore
const championsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/champions/',
    timeout: 3000

})
// @ts-ignore
const dragonsApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/dragons/',
    timeout: 3000

})

export default class DragonduelService {
    constructor() {
    }


    getDragons(draw) {
        dragonsApi.get()
            .then(res => {
                let dragons = res.data.map(rawDragon => {
                    return new Dragon(rawDragon)
                })
                draw(dragons)
            })
    }


    getChampions(draw) {
        championsApi.get()
        .then(res=> {
            let champions= res.data.map(rawChampion => {
                return new Champion(rawChampion)
            })
            draw(champions)
        })
    }


}