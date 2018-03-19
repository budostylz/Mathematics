(function () {

    window.onload = function () {

        try {

            //set SVG Viewport
            var svg_dom = d3.select("body").append("svg")
                .attr("width", 400)
                .attr("height", 100);


            //set scale
            var _scale = d3.scale.linear()
                .domain([0, 100])
                .range([0, 400]);

            //Set axis
            var _x = d3.svg.axis()
                .scale(_scale);

            var x_group = svg_dom.append("g")
                .call(_x);


        }
        catch (e) {
            console.log(e);
        }
    }

   

})();