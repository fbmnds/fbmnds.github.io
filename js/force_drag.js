
 var width = 640,
     height = 570;

var color = d3.scale.category20();

var radius = d3.scale.sqrt()
    .range([0, 6]);

var svg = d3.select("#tagged_links").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .size([width, height])
    .charge(-1500)
    .linkDistance(function(d) { return radius(d.source.size) + radius(d.target.size) + 30; });

d3.json("data/graph.json", function(graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .on("tick", tick)
      .start();

  var link = svg.selectAll(".link")
      .data(graph.links)
      .enter().append("g")
      .attr("class", "link");

  link.append("line")
      .style("stroke-width", function(d) { return "2px"; });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("circle")
      .attr("r", function(d) { return radius(d.size*2); })
      .style("fill", function(d) { return (typeof d.category !== "undefined" ? color(d.category) : color(d.link)); });

  node.append("text")
      .attr("dy", ".7em")
      .attr("text-anchor", "middle")
      .text(function(d) { 
        var res = typeof d.category !== "undefined" ? d.category : "";
        //return (res.length > 4 ? res.slice(0,4) + "[]" : res); 
        return res;
      });

  function tick() {
    link.selectAll("line")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }
});