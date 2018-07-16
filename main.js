
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
    var itemList = $(this).val();
    switch (itemList) {
        case "item1": 
            add("bag", 120)
            break;
        case "item2": 
            add("shoe", 1000)
            break;
        case "item3": 
            add("shirt", 1800)
            break;
    }
    subtotal();
});


function subtotal() {
    var total=0;
    for (var itemList=0;itemList<cart.length;itemList++) {
        total+=(cart[itemList].price*cart[itemList].quantity);
    }
    $('#subtotal').text("$"+total);
    return total;
};

function credit() {
    var withoutTax = subtotal();
    var Tax = withoutTax*0.05;
    var total = withoutTax+Tax
    var text = "Your total is $"+total;
    $(".checkout").text(text);
    $("#pay").show();
}

function add(name, price){
    var selected = false;
    if(cart[0] !== null){
        for (var itemList=0;itemList<cart.length;itemList++) {
            if(cart[itemList].name === name) {
                selected = true;
                cart[itemList].quantity+=1;
                break;
            }
        }
    }
    if(!selected){
        cart.push(new Item(name, price))
    }
    	var newI = document.createElement("li");
        newI.id = cart[itemList].name;
        newI.innerHTML = (cart[itemList].name+" $"+cart[itemList].price+" "+cart[itemList].quantity)
        $('#itemList').append(newI);
}
    
$('#itemList').on('click', 'li', function(){
    var itemId = $(this).attr("id");
    for(var itemList=0;itemList<cart.length;itemList++){
        if(cart[itemList].name === itemId){
            cart[itemList].quantity-=1;
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