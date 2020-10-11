var $ = function (id) {
    return document.getElementById(id); 
};
function init() {
$("subtotal").focus();
$("clear").onclick =clear;
$("subtotal").onclick = function ()
{
    $("subtotal").value = "";
};
$("tax_rate").onclick = function ()
    {
        $("tax_rate").value = "";
    }
}
function processEntries()
{
    var sub_total = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);
    
    //validation
    if (sub_total < 0 ||sub_total > 10000 || tax_rate < 0 || tax_rate > 12)
        {
            alert("Subtotal must be greater than 0 and more than 10000\n Tax Rate must be greater than 0 and more than 12");
            $("subtotal").value = "";
            $("tax_rate").value = "";
            $("subtotal").focus();
            return;
        }

    
    //calculation
    var salestax = sub_total *tax_rate /100;
    var total = sub_total + salestax;
    
    $("sales_tax").value = salestax;
    $("total").value = total;
    $("subtotal").focus();
    

}
var clear = function()
{
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("total").value = "";
    $("sales_tax").value = "";
    $("subtotal").focus = "";
    
    
    
}