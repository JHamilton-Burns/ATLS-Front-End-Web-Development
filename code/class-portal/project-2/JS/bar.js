const data = [
    { name: '2009', score: 12 },
    { name: '2019', score: 34000 },
  ];
  
  const width = 600;
  const height = 600;
  const margin = { top: 50, bottom: 50, left: 100, right: 50 };
  
  const svg = d3.select('#bar-graph')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 35000])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr("fill", '#A22B29')
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(b.score, a.score)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.score))
      .attr('title', (d) => d.score)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.score))
      .attr("width", x.bandwidth());
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '25px')
      .attr("fill", "white")
      .attr("color", "white")
  }
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].name))
      .attr("font-size", '25px')
      .attr("fill", "white")
      .attr("color", "white")
  }
  
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();