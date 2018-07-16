
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
    }
}


$(document).ready(function(){
var cart = new Array();
$('.button').click(function(){
    var i = $(this).val();
    switch (i) {
        case "item1": 
            add("arturia", 120)
            break;
        case "item2": 
            add("suzuki", 1000)
            break;
        case "item3": 
            add("hammond", 1800)
            break;
    }
    subtotal();
});


function subtotal() {
    var total=0;
    for (var i=0;i<cart.length;i++){
        total+=(cart[i].price*cart[i].quantity);
    }
    $('#subtotal').text("$"+total);
    return total;
};

function credit() {
    var withoutTax = subtotal();
    var Tax = withoutTax*0.075;
    var total = withoutTax+Tax
    var text = "Your total is $"+total;
    $(".checkout").text(text);
    $("#pay").show();
}

function add(name, price){
    var selected = false;
    if(cart[0] !== null){
        for(var i=0;i<cart.length;i++){
            if(cart[i].name === name){
                selected = true;
                cart[i].quantity+=1;
                break;
            }
        }
    }
    if(!selected){
        cart.push(new Item(name, price))
    }
    	var newI = document.createElement("li");
        newI.id = cart[i].name;
        newI.innerHTML = (cart[i].name+" $"+cart[i].price+" "+cart[i].quantity)
        $('#itemList').append(newI);
}
    
$('#itemList').on('click', 'li', function(){
    var itemId = $(this).attr("id");
    for(var i=0;i<cart.length;i++){
        if(cart[i].name === itemId){
            cart[i].quantity-=1;
            break;
        }
    }
    $(this).remove();
    subtotal();
});

$("#checkout").click(function(){
    credit();
});
    
$("#pay").click(function(){
   alert("Thank You for Your Purchase!");            
});
});