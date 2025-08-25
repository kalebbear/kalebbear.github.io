export function returnValue (key, val) {
    let values = ''
    if (val) {
        val.forEach(item => {
            if (item.searchValue === key) {
                values = item.value
            }
        })
    }
    return values
}



export function checkLan () {
    return getCookie('zh_choose')
}