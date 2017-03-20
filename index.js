/**
 * create by cwj
 */
import throttle from 'lodash.throttle'
const triggers = ["scroll"]
let watch = () => {
    console.log(this)
}
let check = function (throttleNum) {
    return throttle(watch, throttleNum)
}
export const shinyScroll = (ele, fn, offset = 10, throttleNum = 200) => {
    triggers.forEach(event => {
        ele.addEventListener(event, check(throttleNum))
    })
}