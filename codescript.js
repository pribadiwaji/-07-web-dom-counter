var counter = document.getElementById('count')
var incr    = document.getElementById('incr')
var hasil = 0
var parseinthsl = 0

function incr_tambah(){
    hasil = parseInt(incr.innerHTML)
    hasil = hasil +1
    incr.innerHTML = hasil
}

function incr_kurang(){
    hasil = parseInt(incr.innerHTML)
    hasil = hasil -1
    if (hasil < 1) {
        alert("Increment tidak boleh lebih kecil dari 1 (satu)");
    } else {
        incr.innerHTML = hasil;
    }
    
}

function tambah(){
    hasil = parseInt(counter.innerHTML)
    parseinthsl = incr.innerHTML
    hasil = hasil + parseInt(parseinthsl)
    counter.innerHTML = hasil
}

function kurang(){
    hasil = parseInt(counter.innerHTML)
    parseinthsl = incr.innerHTML
    hasil = hasil - parseInt(parseinthsl)
    counter.innerHTML = hasil
}

function showincr(){
    var divShow = document.getElementById("showDiv");
    var teksbtn = document.getElementById("btn-incr");
    if (divShow.style.display === "none") {
        divShow.style.display = "block";
        teksbtn.innerHTML = "Hide it"
    } else {
        divShow.style.display = "none";
        teksbtn.innerHTML = "Set Increment"
    }
    // alert(teksbtn.innerHTML);
}

function reset(){
    counter.innerHTML=0
}