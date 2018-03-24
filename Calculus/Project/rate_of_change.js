(function () {

    window.onload = function () {

        try {



                // Set graph
                var width = 700,
                    height = 700,
                    padding = 100;

                // create an svg container
                var vis = d3.select("#graph")
                    .append("svg:svg")
                    .attr("width", width)
                    .attr("height", height);

                var xScale = d3.scale.linear().domain([10, 0]).range([width - padding, padding]);
                var yScale = d3.scale.linear().domain([-10, 10]).range([height - padding, padding]);

                // define the y axis
                var yAxis = d3.svg.axis()
                    .orient("left")
                    .scale(yScale);

                // define the y axis
                var xAxis = d3.svg.axis()
                    .orient("bottom")
                    .scale(xScale);

                var xAxisPlot = vis.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + (height / 2) + ")")
                    .call(xAxis.tickSize(-height, 0, 0));

                var yAxisPlot = vis.append("g")
                    .attr("class", "axis axis--y")
                    .attr("transform", "translate(" + (width / 2) + ",0)")
                    .call(yAxis.tickSize(-width, 0, 0));


                xAxisPlot.selectAll(".tick line")
                    .attr("y1", (width - (2 * padding)) / 2 * -1)
                    .attr("y2", (width - (2 * padding)) / 2 * 1);

                yAxisPlot.selectAll(".tick line")
                    .attr("x1", (width - (2 * padding)) / 2 * -1)
                    .attr("x2", (width - (2 * padding)) / 2 * 1);


            //define data
            var data = [
                // stage 1-9, intensity %, draw disk
                { x: 1, y: 0, point: true },
                { x: 4, y: 30, point: true },
                { x: 5, y: 70, point: false },
                { x: 6, y: 200, point: true },
                { x: 7, y: 90, point: true },
                { x: 8, y: 40, point: true },
                { x: 9, y: 10, point: false }
            ];

            //normalize data
            for (i in data) {
                data[i].y = 5.5 * data[i].y / 100;
                data[i].id = i;

                //console.log(data[i])
            }

            //define margin
            var margin = { top: 10, right: 190, bottom: 275, left: 35 },
                width = 915 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;


            var x = d3.scale.linear() //.time.scale()
                .domain([1, 9])		// 9 stages
                .range([0, width]);

            var y = d3.scale.linear()
                .domain([0, 6])
                .range([height, 0]);

            var line = d3.svg.line()
                .interpolate("monotone")
                .x(function (d) { return x(d.x); })
                .y(function (d) { return y(d.y); });

            var svg = d3.select(".curveChart").append("svg")
                .datum(data)
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg.append("path")
                .attr("class", "line")
                .attr("d", line);

            console.log(svg);

        }
        catch (e) {
            console.log(e);
        }
    }

   

})();