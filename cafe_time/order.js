"use strict";
var $ = function(id) { return document.getElementById(id); };
var total = 0.00;

function rollover (origImg, newImg)
{
    origImg.src = newImg;
}

function mouseaway (origImg, newImg)
{
    origImg.src = newImg;
}

function money (cost, item, fieldID)
{
    
    var field = document.getElementById(fieldID);
    var option = document.createElement("option");
    option.text= "$"+cost +" - "+ item;
    field.add(option);  
    total =total+cost;
    total.toString();
    $(document).ready(function()
                     {
        $("#total").html("Total: $" + total.toFixed(2));
    });
    
}

function erase ()
{
    $('#order').empty();
    total = 0.00;
    $('#total').empty();
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

//preloads images!
function preLoad(url) 
{ 
    var link;
    var links = $("imageList").getElementsByTagName("src");
    links = $("imageList").getElementsByTagName("id");
    for (var i = 0; i < links.length; i++)
        {
            link = links[i];
            var image = new Image()
            image.src = link.href; 
        }
}

//$(document).ready(function(){
//    
  //  $("#clear_order").click(function(){
    ///    $("#order option").remove();
       // document.getElementById("total").textContent = " ";
    //});
//}
                 
                 
                 
//);
