function price(id){
 const text = document.getElementById(id).innerText;
 const textToNum = parseFloat(text);
 return textToNum;
};
function pName(id){
    const pName = document.getElementById(id).innerText;
    const OrderList = document.getElementById('list');
    const li = document.createElement('li')
    li.innerText = pName;
    OrderList.appendChild(li);
};

function totalPriceFun(totalPrice){
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2) ;
    if(totalPrice >= 200)
    document.getElementById('cupon-btn').removeAttribute('disabled');
    else
    document.getElementById('cupon-btn').setAttribute('disabled', true);

    if(totalPrice > 0)
    document.getElementById('purchase-btn').removeAttribute('disabled');
    else
    document.getElementById('purchase-btn').setAttribute('disabled', true);
}

function clicking(p, n){
    pName(n);
    let pp = price(p);
    let totalPrice = price('totalPrice');
    totalPrice = totalPrice + pp;
    totalPriceFun(totalPrice);
    let discount = 0;
    document.getElementById('discount').innerText = discount.toFixed(2);
    document.getElementById('total').innerText = totalPrice.toFixed(2);
    

}






document.getElementById('cupon-btn').addEventListener('click',function(){
    let totalPrice = price('totalPrice');
    let discount = price('discount');
    let total = price('total');
    if(document.getElementById('cupon-bar').value === 'SELL200'){
        discount = totalPrice * (20 / 100);
        total = totalPrice - discount;
        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = total.toFixed(2);
    }
    else{
        discount = 0;
        alert("Kop dite parlen na mama.... \n: (");
        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('total').innerText = totalPrice.toFixed(2);
    }
});


document.getElementById('kitchenP1').addEventListener('click',function(){
    clicking('kitchenP1P', 'kitchenP1N')
});
document.getElementById('kitchenP2').addEventListener('click',function(){
    clicking('kitchenP2P', 'kitchenP2N')
});
document.getElementById('kitchenP3').addEventListener('click',function(){
    clicking('kitchenP3P', 'kitchenP3N')
});


document.getElementById('sportswearP1').addEventListener('click',function(){
    clicking('sportswearP1P', 'sportswearP1N')
});
document.getElementById('sportswearP2').addEventListener('click',function(){
    clicking('sportswearP2P', 'sportswearP2N')
});
document.getElementById('sportswearP3').addEventListener('click',function(){
    clicking('sportswearP3P', 'sportswearP3N')
});

document.getElementById('furnitureP1').addEventListener('click',function(){
    clicking('furnitureP1P', 'furnitureP1N')
});
document.getElementById('furnitureP2').addEventListener('click',function(){
    clicking('furnitureP2P', 'furnitureP2N')
});
document.getElementById('furnitureP3').addEventListener('click',function(){
    clicking('furnitureP3P', 'furnitureP3N')
});