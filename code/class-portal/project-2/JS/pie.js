function main() {
	// d3 code goes here
    var width = "850", height="600"; 
    // var colors = d3.scaleOrdinal(d3.schemePaired)
    var colors = d3.scaleOrdinal(d3.schemeSpectral[8]);
    var svg = d3.select("#pie-chart").append("svg")
                .attr("width", width).attr("height", height)
    var details = [{grade:"Alpha-gal", number:33, percent:"33%"},{grade:"Foods", number:28, percent:"28%"}, 
                    {grade:"Venom", number:19, percent: "19%"}, {grade:"Exercise", number:6, percent:"6%"}, 
                    {grade:"Mastocytosis", number:5.9, percent: "6%"}, {grade:"Medications", number:5, percent:"5%"}, 
                    {grade:"Cold", number:2, percent:"2%"}, {grade:"Catamenial", number:1, percent:"1%"}  ];
    var data = d3.pie().sort(null).value(function(d){return d.number;})(details);
    console.log(data);
    var segments = d3.arc()
                    .innerRadius(100)
                    .outerRadius(200)
                    .padAngle(.05)
                    .padRadius(60);
    var sections = svg.append("g").attr("transform", "translate(250,250)")
                    .selectAll("path").data(data);
    sections.enter().append("path").attr("d", segments).attr("fill",
    function(d){return colors(d.data.number)});

    var content = d3.select("g").selectAll("text").data(data);
    content.enter().append("text").classed("inside", true).each(function(d){
        var center = segments.centroid(d);
        d3.select(this).attr("x", center[0]).attr("y", center[1])
                        .text(d.data.percent);
    });

    var legends = svg.append("g").attr("transform", "translate(500, 100)")
                    .selectAll(".legends").data(data);
    var legend = legends.enter().append("g").classed("legends", 
    true).attr("transform", function(d,i){return "translate(0," + (i+1)*30 +
    ")";});
    legend.append("rect").attr("width", 20).attr("height", 20).attr("fill",
    function(d){return colors(d.data.number);});
    legend.append("text").classed("label", true).text(function(d){return d.data.grade;})
            .attr("fill", function(d){return colors(d.data.number);})
            .attr("x", 30)
            .attr("y", 20);
}