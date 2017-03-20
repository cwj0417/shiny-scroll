/**
 * create by cwj
 */
import throttle from "lodash.throttle"
const triggers = ["scroll"]
let check = function (throttleNum, offset, fn) {
    return throttle(function () {
        if (this.scrollHeight - offset < this.scrollTop + this.offsetHeight) {
            fn()
        }, throttleNum)
}
export const shinyScroll = (ele, fn, offset = 10, throttleNum = 200) => {
    triggers.forEach(event => {
        ele.addEventListener(event, check(throttleNum, offset, fn))
    })
}