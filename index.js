const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    const newCats = [...cats,name]
    return newCats

}
function prependCat(name){
    const newNewCats = [name,...cats]
    return newNewCats
}
function removeLastCat(){
    const removeCat = [...cats]
    removeCat.pop()
    return removeCat
}
function removeFirstCat(){
    const firstCat = [...cats]
    firstCat.shift()
    return firstCat
}