//add event listener to all input fields when they got first input and change(id is star, acc, notes, 320)
console.log("ppcal.js loaded");
document.getElementById("star").addEventListener("input", updatePP);
document.getElementById("acc").addEventListener("input", updatePP);
document.getElementById("notes").addEventListener("input", updatePP);
document.getElementById("320").addEventListener("input", updatePP);

document.getElementById("star").addEventListener("change", updatePP);
document.getElementById("acc").addEventListener("change", updatePP);
document.getElementById("notes").addEventListener("change", updatePP);
document.getElementById("320").addEventListener("change", updatePP);
//get star value
function getStar() {
    var star = document.getElementById("star").value;
    //if none, return 0
    if (star == "null") {
        return 0;}
    return star;
}
//get acc value
function getAcc() {
    var acc = document.getElementById("acc").value;
    //if none, return 0
    if (acc == "null") {
        return 0;}
    return acc;
}
//get notes value
function getNotes() {
    var notes = document.getElementById("notes").value;
    if (notes == "null") {
        return 0;}
    return notes;
}
//get 320 value
function get320() {
    var three20 = document.getElementById("320").value;
    if (three20 == "null") {
        return 0;}
    return three20;
}


//if one of those values is updates, calculate pp and update the pp value
function updatePP() {
    console.log("updatePP");
    var star = getStar();
    var acc = getAcc();
    if (acc >1 ){acc /= 100;}
    var notes = getNotes();
    var three20 = get320();
    var pp = calculatePP(star, acc, notes, three20);
    document.getElementById("pp").innerHTML = pp;
    console.log("star: " + star + " acc: " + acc + " notes: " + notes + " 320: " + three20 + " pp: " + pp);
}

//calculate pp
function calculatePP(star, acc, notes, three20) {
    var maxpp = 8*Math.pow(Math.max(star - 0.15, 0.05), 2.2)  * (1 + 0.1 * Math.min(1, notes / 1500));
    var v2acc = acc*0.9375 + 0.0625*(three20/notes);
    var pp = maxpp * Math.max(0, 5 * v2acc - 4);
    return pp.toFixed(2);
}