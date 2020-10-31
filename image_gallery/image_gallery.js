$(document).ready(function()
{
    $("#image_list a").each(function()
    {
    var swappedImage =new Image();
    swappedImage.src= $(this).attr("href");
    swappedImage.title = $(this).attr("title");
    });
    
    $("#image_list a").click(function(evt)
    {
        var imageURL = $(this).attr("href");
        $("#image").attr("src",imageURL);
        
        var caption = $(this).attr("title");
        $("#caption").text(caption);
        
        evt.preventDefault();
    })
       $("li:first-child a").focus(); 
});