var fullcontainers=document.querySelector(".full-containers");
var b1container=document.querySelector(".b1container");
var b2container=document.querySelector(".b2container");
var b3container=document.querySelector(".b3container");
var b4container=document.querySelector(".b4container");
var b5container=document.querySelector(".b5container");
var b6container=document.querySelector(".b6container");


var mbtn1=document.querySelector(".mbtn1");
var mbtn2=document.querySelector(".mbtn2");
var mbtn3=document.querySelector(".mbtn3");
var mbtn4=document.querySelector(".mbtn4");
var mbtn5=document.querySelector(".mbtn5");
var mbtn6=document.querySelector(".mbtn6");

//Start the action 🚀 
mbtn1.addEventListener("click",function(){
    b2container.style.display="none";
    b3container.style.display="none";
    b4container.style.display="none";
    b5container.style.display="none";
    b6container.style.display="none";
    b1container.style.display="block";
    b1container.style.display="flex";
})
mbtn2.addEventListener("click",function(){
    b1container.style.display="none";
    b3container.style.display="none";
    b4container.style.display="none";
    b5container.style.display="none";
    b6container.style.display="none";
    b2container.style.display="block";
    b2container.style.display="flex";
})
mbtn3.addEventListener("click",function(){
    b1container.style.display="none";
    b2container.style.display="none";
    b4container.style.display="none";
    b5container.style.display="none";
    b6container.style.display="none";
    b3container.style.display="block";
    b3container.style.display="flex";
})
mbtn4.addEventListener("click",function(){
    b1container.style.display="none";
    b2container.style.display="none";
    b3container.style.display="none";
    b5container.style.display="none";
    b6container.style.display="none";
    b4container.style.display="block";
    b4container.style.display="flex";
})
mbtn5.addEventListener("click",function(){
    b1container.style.display="none";
    b2container.style.display="none";
    b3container.style.display="none";
    b4container.style.display="none";
    b6container.style.display="none";
    b5container.style.display="block";
    b5container.style.display="flex";
})
mbtn6.addEventListener("click",function(){
    b1container.style.display="none";
    b2container.style.display="none";
    b3container.style.display="none";
    b4container.style.display="none";
    b5container.style.display="none";
    b6container.style.display="block";
    b6container.style.display="flex";
})

// Swipper actions starts 🚀
var bcon1=document.querySelector("#bcon1");
var bcon2=document.querySelector("#bcon2");
var bcon3=document.querySelector("#bcon3");
var bcon4=document.querySelector("#bcon4");
var bcon5=document.querySelector("#bcon5");
var bcon6=document.querySelector("#bcon6");
var bconmass=document.querySelector("#bconmass")
var lswiper=document.querySelector(".lswiper");
var rswiper=document.querySelector(".rswiper");
var lswiper2=document.querySelector(".lswiper2");
var rswiper2=document.querySelector(".rswiper2");

lswiper.addEventListener("click",function(){
    bcon1.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper2.addEventListener("click",function(){
    bconmass.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper.addEventListener("click",function(){
    bcon2.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper.addEventListener("click",function(){
    bcon3.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper.addEventListener("click",function(){
    bcon4.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper.addEventListener("click",function(){
    bcon5.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})
lswiper.addEventListener("click",function(){
    bcon6.scrollBy({
        top:0,
        left:100,
        behavior:"smooth"
    })
})


rswiper.addEventListener("click",function(){
    bcon1.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper2.addEventListener("click",function(){
    bconmass.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper.addEventListener("click",function(){
    bcon2.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper.addEventListener("click",function(){
    bcon3.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper.addEventListener("click",function(){
    bcon4.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper.addEventListener("click",function(){
    bcon5.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})
rswiper.addEventListener("click",function(){
    bcon6.scrollBy({
        top:0,
        left:-100,
        behavior:"smooth"
    })
})


// Machine works

var pone1=document.querySelector("#pone1");
var pone2=document.querySelector("#pone2");
var pone3=document.querySelector("#pone3");
var pone4=document.querySelector("#pone4");

var pageone=document.querySelector(".pageone");
var pagetwo=document.querySelector(".pagetwo");
var pagethree=document.querySelector(".pagethree");
var pagefour=document.querySelector(".pagefour");

pone1.addEventListener("click",function(){
    pageone.style.display="block"

    pone1.style.border="1px solid blueviolet"
    pone1.style.borderLeft = "8px solid blueviolet"
    pone2.style.border="none"
    pone2.style.borderLeft = "none"
    pone3.style.border="none"
    pone3.style.borderLeft = "none"
    pone4.style.border="none"
    pone4.style.borderLeft = "none"

    pagetwo.style.display="none"
    pagethree.style.display="none"
    pagefour.style.display="none"
})
pone2.addEventListener("click",function(){
    pageone.style.display="none"
    pagetwo.style.display="block"

    pone2.style.border="1px solid blueviolet"
    pone2.style.borderLeft = "8px solid blueviolet"
    pone1.style.border="none"
    pone1.style.borderLeft = "none"
    pone3.style.border="none"
    pone3.style.borderLeft = "none"
    pone4.style.border="none"
    pone4.style.borderLeft = "none"

    pagethree.style.display="none"
    pagefour.style.display="none"
})
pone3.addEventListener("click",function(){
    pageone.style.display="none"
    pagetwo.style.display="none"
    pagethree.style.display="block"

    pone2.style.border="none"
    pone2.style.borderLeft = "none"
    pone1.style.border="none"
    pone1.style.borderLeft = "none"
    pone4.style.border="none"
    pone4.style.borderLeft = "none"
    pone3.style.border="1px solid blueviolet"
    pone3.style.borderLeft = "8px solid blueviolet"

    pagefour.style.display="none"
})
pone4.addEventListener("click",function(){
    pageone.style.display="none"
    pagetwo.style.display="none"
    pagethree.style.display="none"
    pagefour.style.display="block"

    pone2.style.border="none"
    pone2.style.borderLeft = "none"
    pone3.style.border="none"
    pone3.style.borderLeft = "none"
    pone1.style.border="none"
    pone1.style.borderLeft = "none"
    pone4.style.border="1px solid blueviolet"
    pone4.style.borderLeft = "8px solid blueviolet"
})