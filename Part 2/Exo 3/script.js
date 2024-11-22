const root = document.documentElement
let leInput = document.getElementById("inputcolor")
let spacing = document.getElementById("spacing")
let blurla = document.getElementById("blur")



leInput.addEventListener("input", test)
function test(){
root.style.setProperty('--color', leInput.value)
}


spacing.addEventListener("input", handleChangeSpacing)
function handleChangeSpacing(){
root.style.setProperty('--spacing', spacing.value + "vh")
}

blurla.addEventListener("input", handleChangeBlur)
function handleChangeBlur(){
root.style.setProperty('--blur', blurla.value + "vh")
}
