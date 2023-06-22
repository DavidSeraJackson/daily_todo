import { createStore } from "./core.js"
import reducer from "./reducer.js"
import widthLogger from "./logger.js"

const {attack,connect, dispatch} = createStore(widthLogger(reducer))

window.dispatch = dispatch

export {
    attack, connect
}