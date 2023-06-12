async function getAllProducts(){
    var productResponse = await fetch('https://fakestoreapi.com/products',{method:'GET'});
    var data =await productResponse.json();
    console.log(data);
    for( var prod of data){
        document.getElementById("container").innerHTML+='<div class="container-item"><div class="image"><img src="'+prod.image+'"/></div><div class="details"><h4>'+prod.title+'</h4><h2 style="color:green;">&#8377;'+prod.price+'</h2><span>'+prod.description+'</span><h5>Raiting : '+prod.rating.rate+'<br>Count : '+prod.rating.count+'</h5></div></div>';
    }  
}
getAllProducts();
