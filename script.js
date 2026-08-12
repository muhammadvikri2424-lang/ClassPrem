// CLASSUP WEBSITE SCRIPT


// Animasi saat halaman dibuka

document.addEventListener("DOMContentLoaded", function(){

    console.log("ClassUp Website Ready");


    


// Efek scroll navbar

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.15)";

    }else{

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    }


});




// Animasi card program

const cards = document.querySelectorAll(".card");


cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-15px)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0)";

    });

function daftarClassUp(){

let nama = document.getElementById("nama").value;

let usia = document.getElementById("usia").value;

let program = document.getElementById("program").value;


let pesan =
"Halo ClassUp, saya ingin mendaftar kursus.%0A%0A" +
"Nama: " + nama +
"%0AUsia/Jenjang: " + usia +
"%0AProgram: " + program;


window.open(
"https://wa.me/6281366929106?text=" + pesan,
"_blank"
);

}

});
