/* Scrollytelling code goes under here */

	  // Code that runs when the website loads
	  document.addEventListener("DOMContentLoaded", function(e) {
        d3.select(".ai2html-container").classed("invisible", true);
        d3.selectAll("#s0_A, #s1_A, #s2_A, #s3_A, #s4_A, #s5_A").classed("invisible", true);
    });

		// for debugging
		///////////////
		//
		// document.addEventListener("mousemove", (e) => {
		// 	console.log("(" + e.clientX + ", " + e.clientY + ")");
		// });

        // introduction

        d3.select("#step-intro").on('stepin', function(e) {
            d3.select("body").style("background-color", "#96bfe6"); // #81e8bc
        });
        d3.select("#step-intro").on('stepout', function(e) {
            if (e.detail.direction == 'up')
                d3.select("body").style("background-color", "#ebd999"); // #81e8bc
        });

        d3.select("#step-intro-3").on('stepin', function(e) {
            d3.select("body").style("background-color", "#96bfe6"); // #81e8bc
        });
        d3.select("#step-intro-3").on('stepout', function(e) {
            if (e.detail.direction == 'down')
                d3.select("body").style("background-color", "#ebd999"); // #81e8bc
        });


		/// STEP ZERO

		//   Entering Step Zero
		d3.select("#step-zero").on('stepin',function(e) {
			// d3.select("#scrolly").style("background-color", "#bfd8d3"); // #81e8bc
			d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
			// d3.selectAll("#s0_A").classed('hidden', false);

            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html-container").style("margin-right", "1%");

            d3.select("#s0_A").classed('invisible', false);
            d3.select("#s1_A").classed('invisible', true);
			// d3.select("#bgimg1").style("margin-left", (window.innerWidth > 700) ? "auto" : "0");
			// d3.select("#bgimg1").style("margin-right", (window.innerWidth > 700) ? "10%" : "auto");
			// d3.select(".ai2html-container").style("transform", "scale(1.0)");
			// d3.selectAll("#s1_A").classed('hidden', true); // mory's stuff
		})

		// exiting zero
		d3.select("#step-zero").on('stepout',function(e) {
			if (e.detail.direction == 'up') {

				// d3.select(".sticky-thing").select("img").style("margin-right", "auto");
				d3.select(".ai2html-container").classed("invisible", true);
				// d3.select("#bgimg1").attr("src", "new_haven_road_map_1.png");
				d3.selectAll("#s0_A").classed('invisible', true);
				d3.select("#scrolly").style("background-color", "#ebd999");
			}
		})

		//   Entering Step One
		d3.select("#step-one").on('stepin',function(e) {
			d3.selectAll("#s0_A").classed('invisible', true);
			d3.selectAll("#s1_A").classed('invisible', false); // mory's stuff
			// // d3.selectAll(".g-onLoad_A").classed('hidden', true);
			// d3.selectAll("#s2_A").classed('hidden', true);

			// d3.select(".ai2html-container").style("transform", "scale(5.0) translate(3%, 4%)");
		})

        d3.select("#step-one-exit").on('stepin',function(e) {
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select("#s1_A").classed("invisible", false);
            d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
        })


        d3.select("#step-one-exit").on('stepout',function(e) {
			if (e.detail.direction == 'down') {
				d3.select(".ai2html-container").classed("invisible", true);
                d3.select("#s1_A").classed("invisible", true);
				d3.select("#scrolly").style("background-color", "#ebd999");
			}
		});


        // one quick thing on #step-two
		d3.select("#step-two").on('stepin',function(e) {
            d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
            
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select("#s2_A").classed("invisible", false);
            d3.select(".ai2html-container").style("margin-right", "1%");
        });
        
        d3.select("#step-two").on('stepout',function(e) {
            d3.select("#s2_A").classed("invisible", true);
            d3.select(".ai2html-container").classed("invisible", true);
            d3.select("#scrolly").style("background-color", "#ebd999");
            
        });
        
        // SECOND ITERATION OF THE WHOLE SCROLLY THING
        
        //   Entering Step Zero
		d3.select("#step-three").on('stepin',function(e) {
            // d3.select("#scrolly").style("background-color", "#bfd8d3"); // #81e8bc
			d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
			// d3.selectAll("#s0_A").classed('hidden', false);
            
            d3.select("#s3_A").classed("invisible", false);
            // d3.select("#s5_A").classed("invisible", false);

            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html-container").style("margin-right", "1%");
            // d3.select(".sticky-thing").style("height", false);

			// d3.select(".ai2html-container").style("transform", "scale(1.0)");
			// d3.selectAll("#s1_A").classed('hidden', true); // mory's stuff
		})
        
		// exiting zero
		d3.select("#step-three").on('stepout',function(e) {
            if (e.detail.direction == 'up') {

				// d3.select(".sticky-thing").select("img").style("margin-right", "auto");
				// d3.select("#bgimg1").attr("src", "new_haven_road_map_1.png");
				
                d3.select("#s2_3").classed("invisible", true);
                // d3.selectAll("#s5_A").classed('invisible', false);

                d3.select(".ai2html-container").classed("invisible", true);
				d3.select("#scrolly").style("background-color", "#ebd999");
				// d3.selectAll(".g-onLoad_A").classed('hidden', false);
                // d3.select(".sticky-thing").style("height", "0px");
			}
		})

        d3.select("#step-four").on('stepin', function(e) {
            d3.selectAll("#s5_A").classed('invisible', true);
            d3.select(".ai2html").style("transform", "scale(1.0)");
        });

        d3.select("#step-five").on('stepin',function(e) {
            d3.selectAll("#s5_A").classed('invisible', false);
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html").style("transform", "scale(3.0) translate(-25%,-25%)");
            
            d3.select(".ai2html-container").style("transform", "scale(0.5) translate(50%,47%)");
            // d3.selectAll("#s1_A").classed('hidden', true); // mory's stuff
        });
        
        d3.select("#step-six").on('stepin', function(e) {
            d3.selectAll("#s5_A").classed('invisible', true);
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html").style("transform", "scale(1.0) translate(0.0,0.0)");

        });


        ///// last one!!!

        d3.select("#step-eleven").on('stepin',function(e) {
            // d3.select("#scrolly").style("background-color", "#bfd8d3"); // #81e8bc
			d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
			// d3.selectAll("#s0_A").classed('hidden', false);
            
            // d3.select("#s3_A").classed("invisible", false);
            // d3.select("#s5_A").classed("invisible", false);

            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html-container").style("margin-right", "1%");
		})
        
        d3.select("#step-eleven").on('stepout',function(e) {
			if (e.detail.direction == 'down') {
				d3.select(".ai2html-container").classed("invisible", true);
                d3.select("#s1_A").classed("invisible", true);
				d3.select("#scrolly").style("background-color", "#ebd999");
			}
		});

        d3.select("#step-final").on('stepin', function(e) {
            d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
            
            d3.select("#sFinal_A").classed("invisible", false);
            d3.select(".ai2html-container").classed("invisible", false);
            // d3.select(".ai2html-container").style("margin-right", "1%");
        });

        d3.select("#step-final").on('stepout', function(e) {

            d3.select("#sFinal_A").classed("invisible", true);
            d3.select(".ai2html-container").classed("invisible", true);
            d3.select("#scrolly").style("background-color", "#ebd999");

        });