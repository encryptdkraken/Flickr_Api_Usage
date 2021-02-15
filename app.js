//js ajaj

var myform = document.getElementById("myform");
var err = document.getElementById("myform");


//On submit to return results so either enter or submit button
myform.addEventListener('submit', (e) => { 
    loadFlickr();
    e.preventDefault();
    return false

});

//Load Api call
function loadFlickr(){

//Error handeling for empty search calls
var searchTerm = $('#search').val()
if (!searchTerm)
{ alert("No Search Term") 
return } 

//establishing the api variable
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + $("#search").val(); //concat search to val to api for personalized search

//Ajax to make the http req with json feed
$.ajax({
url: flickerAPI,
dataType: "jsonp", // jsonp, important because it will not return any data unless it's sepcific json p
jsonpCallback: 'jsonFlickrFeed', // add this property
success: function (result, status, xhr) {
 
//Clear child element for parent div to get new elements on every call
$("outputDiv").empty();    
    
$.each(result.items, function (i, item) {
$("<img>").attr("src", item.media.m).appendTo("#outputDiv"); //appending image to html class



//Specifying 20 elements per page
if (i === 20) {
return false;
}
});
},

//More errorh handling
error: function (xhr, status, error) {
console.log(xhr)
$("#outputDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
}
});

//Reloads the page upon every search
$("#outputDiv").load(location.href + " #outputDiv");
}


//Nav bar and hamb design js
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Listening for burger to be clicked on
    burger.addEventListener('click', ()=>{
        
        //Toggle nav
        nav.classList.toggle('nav-active');
        
        //Animate nav links
        navLinks.forEach((link, index)=> { // keeps nav options animated EVERYTIME burger is selected
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             
                // return links in burger menu with a delay betweene each arrival
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                
            }
            });
        
            //Burger Animation
            burger.classList.toggle('toggle'); //burger aniamtion will form x when toggled

    });
 
}

// functtion to call navSlide
const app = ()=>{
    navSlide();
}

app();



