//////////////logoHover//////////////////
var logo=document.getElementById("logo")
logo.onmouseover=function(){
    logo.style.cursor="pointer"
}
//////////////linksHover//////////////////
var links=document.getElementsByClassName("link")
function linkOverFun(event){
    event.target.style.textDecoration="underline"
    event.target.style.cursor="pointer"
}

function linkOutFun(event){
    event.target.style.textDecoration="none"
}
for(link of links){
    link.onmouseover=linkOverFun
    link.onmouseout=linkOutFun

}
///////////////iconsHover////////////////
var icons=document.getElementsByClassName("icon")
function iconOverFun(event){
    event.target.style.transform="scale(1.3)"
    event.target.style.transitionDuration="0.5s"
    event.target.style. transitionTimingFunction="ease-out"
    event.target.style.cursor="pointer"

}
function iconOutFun(event){
    event.target.style.transform="scale(1)"
    event.target.style.transitionDuration="0.5s"
    event.target.style. transitionTimingFunction="ease-in"
}
for(icon of icons){
    icon.onmouseover=iconOverFun
    icon.onmouseout=iconOutFun
}
///////////////headHover/////////////////////////////////////
var head=document.getElementsByClassName("head")[0]
head.onmouseover=function(){
    head.style.cursor="pointer"
    

}

////////////////discoverHover//////////////////////////
var discover=document.getElementById("discoverImg")
discover.onmouseover=function(){
    discover.style.cursor="pointer"

}
////////sliderHover&arows/////////////////
var slider=document.getElementsByClassName("slider")[0]
var left=document.getElementById("left")
var right=document.getElementById("right")
var sliderImg=document.getElementById("sliderImg")
slider.onmouseover=()=>{
    left.style.display="block"
    right.style.display="block"
    slider.style.cursor="pointer"

}
slider.onmouseout=()=>{
    left.style.display="none"
    right.style.display="none"

}
left.onmouseover=()=>{
    left.style.backgroundColor="black"
    left.style.color="white"
}
right.onmouseover=()=>{
    right.style.backgroundColor="black"
    right.style.color="white"
}
left.onmouseout=()=>{
    left.style.backgroundColor="#F7DA4C"
    left.style.color="black"
}
right.onmouseout=()=>{
    right.style.backgroundColor="#F7DA4C"
    right.style.color="black"
}

left.onclick=()=>{
    if(sliderImg.srcset=="//townteam.com/cdn/shop/files/1712SweatEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=2000 2000w,"){
        sliderImg.srcset="//townteam.com/cdn/shop/files/1712PullEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=2000 2000w,"
    }
    else
    sliderImg.srcset="//townteam.com/cdn/shop/files/1712SweatEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=2000 2000w,"
    }



right.onclick=()=>{
    if(sliderImg.srcset=="//townteam.com/cdn/shop/files/1712SweatEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=2000 2000w,"){
        sliderImg.srcset="//townteam.com/cdn/shop/files/1712PullEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712PullEN.png?v=1734508893&amp;width=2000 2000w,"
    }
    else
    sliderImg.srcset="//townteam.com/cdn/shop/files/1712SweatEN_375x.png?v=1734508893 375w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=740 740w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=750 750w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1100 1100w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1370 1370w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1500 1500w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1770 1770w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1780 1780w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=1880 1880w,//townteam.com/cdn/shop/files/1712SweatEN.png?v=1734508893&amp;width=2000 2000w,"
    }
//////////////////////collectionHover///////////////
var collections=document.getElementsByClassName("collection")
function collectionFun( event){
    event.target.style.cursor="pointer"
}
for(collection of collections){
    collection.onmouseover=collectionFun
}


//////////InfluencersImg/////////////
var InfluencersImg=document.getElementsByClassName("InfluencersImg")
function InfluencersImgOverFun(event){
    event.target.style.transform="translatez(25px)"
    event.target.style.transitionDuration="0.5s"
    event.target.style. transitionTimingFunction="ease-out"
    event.target.style.cursor="pointer"

}
function InfluencersImgOutFun(event){
    event.target.style.transform="translatez(1px)"
    event.target.style.transitionDuration="0.5s"
    event.target.style. transitionTimingFunction="ease-in"
}
for(img of InfluencersImg){
    img.onmouseover=InfluencersImgOverFun
    img.onmouseout=InfluencersImgOutFun
}
///////////////////////////////servicesHover////////////////////
var services=document.getElementsByClassName("services")[0]
services.onmouseover=function(){
    services.style.cursor="pointer"

}
///////////////////footerHover//////////////////////////////////
// var links=document.getElementsByClassName("link")
// function linkOverFun(event){
//     event.target.style.textDecoration="underline"
//     event.target.style.cursor="pointer"
// }

// function linkOutFun(event){
//     event.target.style.textDecoration="none"
// }
// for(link of links){
//     link.onmouseover=linkOverFun
//     link.onmouseout=linkOutFun

// }
/////iconsHover//////
// var socials=document.getElementsByClassName("social")
// function socialOverFun(event){
//     event.target.style.backgroundColor="white"
//     event.target.style.color="black"
//     event.target.style.border="3px solid black"
//     event.target.style.outline="3px solid white"
//     event.target.style.padding="10px"
//     event.target.style.width="40px"
//     event.target.style.height="40px"
//     event.target.style.borderRadius="50%"
//     event.target.style.textAlign="center"
// }

// function socialOutFun(event){
//     event.target.style.backgroundColor="black"
//     event.target.style.color="white"
//     event.target.style.border="none"
//     event.target.style.outline="none"
//     event.target.style.padding="0"
//     event.target.style.width="0"
//     event.target.style.height="0"
//     event.target.style.borderRadius="0%"
//     event.target.style.textAlign="center"
// }
// for(social of socials){
//     social.onmouseover=socialOverFun
//     social.onmouseout=socialOutFun

// }




//////////////////////////////copyWrite year/////////////////////
var copyWrite=document.getElementById("copyWrite")
var data=new Date().getFullYear()
copyWrite.innerHTML+=data
/////////////////////searchIcon//////////////
var search=document.getElementById("search")
search.onclick=function(){
    location.assign("search/search.html")
}

/////////////////////cartIcon//////////////
var cart=document.getElementById("cart")
cart.onclick=function(){
    location.assign("html/cart.html")
}
/////////////////////headImg//////////////
var headImg=document.getElementById("headImg")
headImg.onclick=function(){
    location.assign("html/newarrival.html")
}
/////////////////////collectionOne//////////////
var collectionOne=document.getElementById("collectionOne")
collectionOne.onclick=function(){
    location.assign("html/men.html")
}
/////////////////////collectionTwo//////////////
var collectionTwo=document.getElementById("collectionTwo")
collectionTwo.onclick=function(){
    location.assign("html/kids.html")
}
/////////////////////collectionThree//////////////
var collectionThree=document.getElementById("collectionThree")
collectionThree.onclick=function(){
    location.assign("html/summer.html")
}
/////////////////////headImg//////////////
var slider=document.querySelector(".slider")
slider.onclick=function(){
    location.assign("html/men.html")
}
//////////////scroll////////////
var scrolll=document.getElementById("scroll")

window.onscroll=function() {
    if(window.scrollY >= 400){
        scrolll.style.display="block"
    }
    else
    scrolll.style.display="none"

}
scrolll.onclick=function(){
    window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"

    })
}
/////////////////////create sign up//////////////
var sign=document.getElementById("sign")
sign.onclick=function(){
    location.assign("../sign-up/register.html")


}
///////////////////logo////////
var logo =document.getElementById("logo")
logo.onclick=function(){
  location.assign("index.html")
}


