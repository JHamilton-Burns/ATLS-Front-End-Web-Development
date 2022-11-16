(function() {
  var margin = {top:0, left:0, right:0, bottom:0},
    height = 600 - margin.top - margin.bottom, 
    width = 900 - margin.left - margin.right;

  var svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  d3.queue()
    .defer(d3.json, "us.json")
    .defer(d3.csv, "ticks.csv")
    .await(ready)

  var projection = d3.geoAlbersUsa()
    .translate([ width / 2, height /2])
    .scale(1200)

  var path = d3.geoPath()
    .projection(projection)

  function ready (error, data, ticks) { 

    var counties = topojson.feature(data, data.objects.counties).features
    svg.selectAll(".county")
      .data(counties)
      .enter().append("path")
      .attr("class", "county")
      .attr("d", path)

    var states = topojson.feature(data, data.objects.states).features
      svg.selectAll(".state")
      .data(states)
      .enter().append("path")
      .attr("class", "state")
      .attr("d", path)

    svg.selectAll(".tick")
      .data(ticks)
      .enter().append("circle")
      .attr("class", "tick")
      .attr("r", 10)
      .attr("cx", function(d) {
        var coords = projection([d.Longitude, d.Latitude])
        return coords[0]
      })
      .attr("cy", function(d) {
        var coords = projection([d.Longitude, d.Latitude])
        return coords[1]
      })
      .attr("opacity", ".5")
      .attr("fill", "#A22B29")

    }
})();