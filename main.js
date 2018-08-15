import DragonduelController from "./app/components/DragonduelController.js"


export default class App {
    constructor() {
        this.controllers = {
            dragonduelController: new DragonduelController()
        }
    }
}

// @ts-ignore
window.app = new App()