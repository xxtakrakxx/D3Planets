var names = ["KitKat", " Snickers", " Reeses"]

d3.select("#A1")
  .selectAll("p")
  .data(names)
  .append("p")
  .text(names)

var seperate = function(d){
    return d;
}
d3.select("#A2")
    .append("span")
    .selectAll("span")
    .data(names)
    .enter()
    .append("span")
    .text(seperate)
    
var planetPro = d3.json("planets.json")

planetPro.then(function(pData){
    d3.select("h1").text("you played yourself")
    console.log("pData", pData);
},
    function(yikes){
    d3.select("h1").text("Big Yikes")
    console.log("Big Yikes", yikes);
});