const url = "LINK_WEB_APP_KAMU";

fetch(url)
.then(res => res.json())
.then(data => {

let list = document.getElementById("list");

data.reverse().forEach((row,index) => {

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<div class="type">${row[1]}</div>
<div class="text">${row[2]}</div>
<div class="date">${row[0]}</div>
<button class="delete" onclick="hapus(${data.length-index})">Hapus</button>
`;

list.appendChild(card);

});

});


// hapus satu pesan
function hapus(row){

fetch(url + "?delete=" + row)
.then(()=>{

alert("Pesan dihapus");
location.reload();

});

}


// hapus semua
function hapusSemua(){

if(confirm("Hapus semua aspirasi?")){

fetch(url + "?deleteAll=true")
.then(()=>{

alert("Semua pesan dihapus");
location.reload();

});

}

}