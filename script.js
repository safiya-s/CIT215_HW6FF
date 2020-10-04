var products = [
  {
    id:0,
    name:"Apples",
    price:"2.99",
    image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
    color:"red"
  },
  {
    id:1,
    name:"Bananas",
    price:"2.50",
    image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
    color:"gold"
  },
  {
    id:2,
    name:"oranges",
    price:"3.50",
    image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
    color:"orange"
  }
];
var wrapperEle = document.body;


function game(){
  wrapperEle.innerHTML="";
  var that=this;
  this.player();
}
game.prototype.player=function() {
  this.apple(products[0]);
  this.banana(products[1]);
  this.orange(products[2]);
}
game.prototype.apple=function(ap){
  var that=this;
  this.aproduct = ap.id;
  this.aprice=ap.price;
  this.aname=ap.name;
  this.aimage=ap.image;
  this.acolor=ap.color;
  this.aele = document.createElement("div");
  this.aele.classList.add("product");
  this.anameEle = document.createElement("h3");
  this.apriceEle = document.createElement("h3");
  this.anameEle.innerHTML = "Name: " + this.aname;
  this.apriceEle.innerHTML = "Price: "+this.aprice;
  this.aimgEle = document.createElement("img");
  this.aimgEle.src=this.aimage;
  this.aimgEle.classList.add("productImg");
  this.aele.appendChild(this.aimgEle);
  this.aele.appendChild(this.anameEle);
  this.aele.appendChild(this.apriceEle);
    this.aele.addEventListener("mouseover", function(){
    that.aele.style.borderColor=that.acolor;
  })
  this.aele.addEventListener("mouseout", function(){
    that.aele.style.borderColor="black";
  })
  this.aele.addEventListener("click", function(){
    that.addUp(this.aele, 0);
  })
  wrapperEle.appendChild(this.aele);
}
game.prototype.banana=function(ba){
  var that=this;
  this.bproduct = ba.id;
  this.bprice=ba.price;
  this.bname=ba.name;
  this.bimage=ba.image;
  this.bcolor=ba.color;
  this.bele = document.createElement("div");
  this.bele.classList.add("product");
  this.bnameEle = document.createElement("h3");
  this.bpriceEle = document.createElement("h3");
  this.bnameEle.innerHTML = "Name: " + this.bname;
  this.bpriceEle.innerHTML = "Price: "+this.bprice;
  this.bimgEle = document.createElement("img");
  this.bimgEle.src=this.bimage;
  this.bimgEle.classList.add("productImg");
  this.bele.appendChild(this.bimgEle);
  this.bele.appendChild(this.bnameEle);
  this.bele.appendChild(this.bpriceEle);
    this.bele.addEventListener("mouseover", function(){
    that.bele.style.borderColor=that.bcolor;
  })
  this.bele.addEventListener("mouseout", function(){
    that.bele.style.borderColor="black";
  })
  this.bele.addEventListener("click", function(){
    that.addUp(this.bele, 1);
  })
  wrapperEle.appendChild(this.bele);
}
game.prototype.orange=function(or){
  var that=this;
  this.oproduct = or.id;
  this.oprice=or.price;
  this.oname=or.name;
  this.oimage=or.image;
  this.ocolor=or.color;
  this.oele = document.createElement("div");
  this.oele.classList.add("product");
  this.onameEle = document.createElement("h3");
  this.opriceEle = document.createElement("h3");
  this.onameEle.innerHTML = "Name: " + this.oname;
  this.opriceEle.innerHTML = "Price: "+this.oprice;
  this.oimgEle = document.createElement("img");
  this.oimgEle.src=this.oimage;
  this.oimgEle.classList.add("productImg");
  this.oele.appendChild(this.oimgEle);
  this.oele.appendChild(this.onameEle);
  this.oele.appendChild(this.opriceEle);
    this.oele.addEventListener("mouseover", function(){
    that.oele.style.borderColor=that.ocolor;
  })
  this.oele.addEventListener("mouseout", function(){
    that.oele.style.borderColor="black";
  })
  this.oele.addEventListener("click", function(){
    that.addUp(this.oele, 2);
  })
  wrapperEle.appendChild(this.oele);
}
game.prototype.addUp=function(y, r){
  this.pele = document.createElement("div");
  this.pele.classList.add("popUp");
  this.namezEle = document.createElement("h3");
  this.pricezEle = document.createElement("h3");
  this.namezEle.innerHTML = "Name: " + products[r].name;
  this.pricezEle.innerHTML = "Price: "+products[r].price;
  this.imgzEle = document.createElement("img");
  this.imgzEle.src=products[r].image;
  this.imgzEle.classList.add("productImg");
  this.pele.appendChild(this.imgzEle);
  this.pele.appendChild(this.namezEle);
  this.pele.appendChild(this.pricezEle);
  wrapperEle.appendChild(this.pele);
  this.pele.addEventListener("click", function(){
      var newResetGame = new game();
    })
}


var newGame= new game();