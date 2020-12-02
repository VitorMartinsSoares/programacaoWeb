let somatotal=0;
let arrayT=[0,0,0,0];
function buyTLOU2(){
    somatotal+=130;
    document.getElementById("carrinho").innerHTML = "Carrinhos: "+somatotal;
    arrayT[0]+=1;
    areaCarrinho()
    //130
}
function buyGOW(){
    somatotal+=120;
    document.getElementById("carrinho").innerHTML = "Carrinhos: "+somatotal;
    arrayT[1]+=1;
    areaCarrinho()
    //120
}
function buyRDR2(){
    somatotal+=200;
    document.getElementById("carrinho").innerHTML = "Carrinhos: "+somatotal;
    arrayT[2]+=1;
    areaCarrinho()
    //200
}
function buyDS(){
    somatotal+=80;
    document.getElementById("carrinho").innerHTML = "Carrinhos: "+somatotal;
    arrayT[3]+=1;
    areaCarrinho()
    //80
}
function areaCarrinho(){
    let variavel = "The Last of Us Part II: "+arrayT[0]+" \nGod of War: "+arrayT[1]+"\nRed Dead Redemption 2: "+arrayT[2]+"\nDeath Stranding: "+arrayT[3];
    document.getElementById("carrinhoarea").innerText = variavel
}
function apagar(){
    somatotal=0;
    arrayT=[0,0,0,0];
    document.getElementById("carrinhoarea").innerText = "";
    document.getElementById("carrinho").innerHTML = "Carrinhos:";
}