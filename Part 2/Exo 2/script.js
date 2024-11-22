// Définir la variable permettant de récupérer l'input de type color


/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement de type change et jouant la fonction permettant d'ajouter une propriété de style (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/

const root = document.documentElement
let leInput = document.getElementById("chooser")


leInput.addEventListener("input", test)

function test(){

root.style.setProperty('--main-color', leInput.value)

}