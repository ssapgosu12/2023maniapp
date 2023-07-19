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
    if (star == "") {
        return 0;}
    return star;
}
//get acc value
function getAcc() {
    var acc = document.getElementById("acc").value;
    //if none, return 0
    if (acc == "") {
        return 0.95;}
    return acc;
}
//get notes value
function getNotes() {
    var notes = document.getElementById("notes").value;
    console.log(notes);
    if (notes == "") {
        console.log("notes is none");
        return -1;}
    return notes;
}
//get 320 value
function get320() {
    var three20 = document.getElementById("320").value;
    if (three20 == "") {
        console.log("three20 is none");
        return -1;}
    return three20;
}


//if one of those values is updates, calculate pp and update the pp value
function updatePP() {
    console.log("updatePP");
    var star = getStar();
    var acc = getAcc();
    if (acc > 1 ){acc /= 100;}
    var notes = getNotes();
    var three20 = get320();
    if (notes == -1 && three20 == -1){
        notes = 1500;
        three20 = acc_to_ratio(acc)*notes;
        document.getElementById("gnotes").innerHTML = "i guess it is" + notes.toFixed().toString();
        document.getElementById("g320").innerHTML = "i guess it is" + three20.toFixed().toString();
    }
    else if (notes == -1){
        notes = three20/acc_to_ratio(acc);
        document.getElementById("gnotes").innerHTML = "i guess it is" + notes.toFixed().toString();
        document.getElementById("g320").innerHTML = "";
        
    }
    else if (three20 == -1){
        three20 = acc_to_ratio(acc)*notes;
        document.getElementById("g320").innerHTML = "i guess it is" + three20.toFixed().toString();
        document.getElementById("gnotes").innerHTML = "";
    }
    else{
        document.getElementById("gnotes").innerHTML = "";
        document.getElementById("g320").innerHTML = "";
    var pp = calculatePP(star, acc, notes, three20);
    document.getElementById("pp").innerHTML = pp;
    console.log("star: " + star + " acc: " + acc + " notes: " + notes + " 320: " + three20 + " pp: " + pp);
}

//calculate pp
function calculatePP(star, acc, notes, three20) {
    var maxpp = 8*Math.pow(Math.max(star - 0.15, 0.05), 2.2)  * (1 + 0.1 * Math.min(1, notes / 1500));
    var v2acc = acc*0.9375 + 0.0625*(three20/notes);
    var pp = maxpp * Math.max(0, 5 * v2acc - 4);
    console.log(acc_to_ratio(acc), acc)
    return pp.toFixed(2);
}

//guess three20/notes
function acc_to_ratio(acc){
    acc *=100;
    var ratio = 0.21951074725992828 + -1.8917388061679286/(acc-103.52761478506012)
    console.log(ratio);
    return ratio;
}
