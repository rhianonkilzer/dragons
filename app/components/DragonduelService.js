import Dragon from '../models/Dragon.js';
import Champion from '../models/Champion.js'


// @ts-ignore
const dragonsApi = axios.create({
    baseURL:'https://dragon-duel.herokuapp.com/api/dragons/',
    timeout: 3000

})

export default class DragonduelService{
    constructor(){
    }


    getDragons(draw){
        dragonsApi.get()
        .then(res=> {
            let dragons = res.data.data.map(rawDragon => {
                return new Dragon(rawDragon)
            })
            draw(dragons)
        })
    }




    
}