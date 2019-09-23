/**
 * 防抖
 * @param {Function} func 需要防抖的函数
 * @param {Number} wait 间隔时间
 * @param {Boolean} immediate 开始边界 或 结束边界
 */
export function debounce(func, wait, immediate) {
    var timeout
    return function () {
        var args = arguments
        clearInterval(timeout)
        if (immediate) {
            // 等待wait的时间后才能再次触发 func
            var current = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (current) {
                func.call(this, args)
            }
        } else {
            // 当前的timeout 会被下一次触发的当前函数清空
            timeout = setTimeout(() => {
                func.call(this, args)
            }, wait)
        }
    }
}

export function randomInt() {
    return Math.floor(Math.random() * 255)
}

export function randomBgColor() {
    let r = randomInt()
    let g = randomInt()
    let b = randomInt()
    return {
        background: `rgb(${r},${g},${b})`
    }
}