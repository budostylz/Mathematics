
$(document).ready(function () {


    try {


        //Bolier Plate Code
        //https://www.mattlayman.com/2015/d3js-area-chart.html
        //https://www.dashingd3js.com/svg-paths-and-d3js
        var data = [
            { x: 0, y: 0, },
            { x: 1, y: 1, }
            //{ x: 2, y: 35, },
            //{ x: 3, y: 20, },
        ];

        var margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = 575 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;


        var x = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.x; })])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.y; })])
            .range([height, 0]);


        //set x-axis properties
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        //set y-axis properties
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");



        //set curve properties
        var area = d3.svg.area()
            .x(function (d) { return x(d.x); })
            .y0(300)
            .y1(function (d) { return y(d.y); });



        //get svg element and set properties
        var svg = d3.select("svg#area")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        //append curve
        svg.append("path")
            .datum(data)
            .attr("class", "area")
            .attr("d", area);

        //append x-axis to svg element
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        //append y-axis to svg element
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        //Make an SVG Container
        var svgContainer = d3.select("svg#area").append("svg")
            .attr("width", 900) //rectangle mwidths are dependent on this property
            .attr("height", 500);

        //Draw the Rectangle
        var rec1 = svgContainer.append("rect")
            .attr("x", 70)
            .attr("y", 310)
            .attr("width", 30)
            .attr("height", 10)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");


        //Draw the Rectangle
        var rec2 = svgContainer.append("rect")
            .attr("x", 100)
            .attr("y", 290)
            .attr("width", 50)
            .attr("height", 30)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");


        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 150)
            .attr("y", 260)
            .attr("width", 50)
            .attr("height", 60)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 200)
            .attr("y", 230)
            .attr("width", 50)
            .attr("height", 90)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 250)
            .attr("y", 200)
            .attr("width", 50)
            .attr("height", 120)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 300)
            .attr("y", 170)
            .attr("width", 50)
            .attr("height", 150)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 350)
            .attr("y", 140)
            .attr("width", 50)
            .attr("height", 180)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 400)
            .attr("y", 110)
            .attr("width", 50)
            .attr("height", 210)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 450)
            .attr("y", 80)
            .attr("width", 50)
            .attr("height", 240)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");


        

        //Draw the Rectangle
        var rec3 = svgContainer.append("rect")
            .attr("x", 500)
            .attr("y", 50)
            .attr("width", 50)
            .attr("height", 270)
            .attr("fill", "blue")
            .attr("style", "stroke:pink");

        







    }
    catch (e) {
        console.log(e);
    }




});

