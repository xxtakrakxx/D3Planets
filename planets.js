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
    console.log("pData", pData);
    return planet(pData), nameList(pData), emptyTable(pData)
},
    function(yikes){
    console.log("Big Yikes", yikes);
});

var planet = function(pData){
    d3.select("#B3")
    .selectAll("img")
    .data(pData)
    .enter()
    .append("img")
    .attr("src", function(d){
        return d.img;
    })
}

var nameList = function(pData){ 
    d3.select("#B4")
    .append("ol")
    .selectAll("li")
    .data(pData)
    .enter()
    .append("li")
    .text(function(d)
         {return d.name;})
}


var emptyTable = function(pData){ 
    d3.select("#C1")
    .append("table")
    .selectAll("tr")
    .data(pData)
    .enter()
    .append("tr")
    
}