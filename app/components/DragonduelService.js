import Dragon from '../models/Dragon.js';
import Champion from '../models/Champion.js'

// @ts-ignore
const duelApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/',
    timeout: 3000

})



let dragonId = ''
let champId = ''
let gameId = ''

export default class DragonduelService {
    constructor() {
    }


    getDragons(draw) {
        duelApi.get('dragons')
            .then(res => {
                let dragons = res.data.map(rawDragon => {
                    return new Dragon(rawDragon)
                })
                draw(dragons)
            })
    }


    getChampions(draw) {
        duelApi.get('champions')
        .then(res=> {
            let champions= res.data.map(rawChampion => {
                return new Champion(rawChampion)
            })
            draw(champions)
        })
    }

    //setDragon(dragonId){
        //activeDragonId = dragonId
    //}

    newGame(){
        if(typeof dragonId=='number'&& typeof champId== 'number'){
            duelApi.post('game', {dragonId: dragonId, championId: champId})
                .then(res=>{
                    console.log(res)
                    gameId = res.data.game._id
                    //draw(res.data.game)
                })
        }else{
            alert('Need both dragon and champ')
        }
    }

}