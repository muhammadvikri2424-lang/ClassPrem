// CLASSUP WEBSITE SCRIPT


// Animasi saat halaman dibuka

document.addEventListener("DOMContentLoaded", function(){

    console.log("ClassUp Website Ready");


    // tombol daftar

    const buttons = document.querySelectorAll("button");


    buttons.forEach(function(button){

        button.addEventListener("click",function(){

            alert(
            "Terima kasih sudah memilih ClassUp! Tim kami akan menghubungi Anda."
            );

        });

    });



});




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



});
