/* Scrollytelling code goes under here */

	  // Code that runs when the website loads
	  document.addEventListener("DOMContentLoaded", function(e) {
        d3.select(".ai2html-container").classed("invisible", true);
        d3.selectAll("#s0_A, #s1_A, #s2_A, #s3_A, \
        #s4_A, #s5_A, #sMid_A, #sNarrow_A, \
        #sWide_A, #sExplore_A, #sCourt_A, .gate-pic").classed("invisible", true);
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

        d3.select("#step-intro-4").on('stepin', function(e) {
            d3.select("body").style("background-color", "#96bfe6"); // #81e8bc
        });
        d3.select("#step-intro-4").on('stepout', function(e) {
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
            d3.select("#s2_A").classed("invisible", true);
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
        
        d3.select("#step-two-exit").on('stepout',function(e) {
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
            d3.select("#sWide_A").classed("invisible", true);
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
				
                d3.select("#s2_A").classed("invisible", true);
                // d3.selectAll("#s5_A").classed('invisible', false);

                d3.select(".ai2html-container").classed("invisible", true);
				d3.select("#scrolly").style("background-color", "#ebd999");
				// d3.selectAll(".g-onLoad_A").classed('hidden', false);
                // d3.select(".sticky-thing").style("height", "0px");
			}
		});


        d3.select("#step-wide").on('stepin', function(e) {
            d3.select("#sWide_A").classed("invisible", false);
            d3.select("#sNarrow_A").classed("invisible", true);
        })
        d3.select("#step-narrow").on('stepin', function(e) {
            d3.select("#sWide_A").classed("invisible", true);
            d3.select("#sNarrow_A").classed("invisible", false);
            d3.select("#sMid_A").classed("invisible", true);
        })
        d3.select("#step-mid").on('stepin', function(e) {
            d3.select("#sNarrow_A").classed("invisible", true);
            d3.select("#sMid_A").classed("invisible", false);
            d3.select(".ai2html-container").style("transform", "scale(1.0) translate(0.0)");
            d3.select(".ai2html").style("transform", "scale(1.0)");
        })


        d3.select("#step-four").on('stepin', function(e) {
            d3.select("#sMid_A").classed("invisible", true);


            // d3.selectAll("#s5_A").classed('invisible', true);
            if (e.detail.direction == 'up') {
                d3.select(".ai2html-container").style("transform", "scale(1.0) translate(0.0)");
                d3.select(".ai2html").style("transform", "scale(1.0)");
                d3.select(".ai2html-container").style("z-index", 1);
                d3.selectAll(".scrolly-overlay").style("margin-left","5%");
                d3.select("#sExplore_A").classed("invisible", true);
				// d3.select("#scrolly").style("background-color", "#ebd999");
            } else if (e.detail.direction == 'down') { // entering the zone
                d3.select(".ai2html-container").style("transform", "scale(0.40)");
                d3.select(".ai2html-container").style("margin-bottom", "1%");
                d3.select(".ai2html-container").classed("invisible", false);
                d3.select(".ai2html-container").style("z-index", 100);
                d3.selectAll(".scrolly-overlay").style("margin-left","0");
                d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc
                d3.select("#sExplore_A").classed("invisible", false);
            }
        });


        // step four
        let step4s = ["a", "an", "b", "bn", "bnn", "c", "cn", "d"];
        let offsets = [
            [-22, 10],
            [10, -10],
            [-15, -18],
            [-16, 14],
            [0, -15],
            [28, 5],
            [18, 0],
            [-30, -25],
        ];

        let scales = [8.0, 8.0, 5.0, 8.0, 5.0, 8.0, 8.0, 5.0]

        step4s.forEach((n, index) => {
            d3.select("#step-4" + n).on('stepin', function(e) {
                d3.select(".ai2html").style("transform", "scale(" + scales[index] + ") translate(" +
                 offsets[index][0] + "%," + offsets[index][1] + "%)");
            })
        })

        // d3.select("#step-4a").on('stepin', function(e) {
        //     d3.select(".ai2html").style("transform", "scale(5.0) translate(-25%,20%)");
        // });
        // d3.select("#step-4an").on('stepin', function(e) {
        //     d3.select(".ai2html").style("transform", "scale(5.0) translate(-25%,20%)");
        // });


        d3.select("#step-court").on('stepin',function(e) {
            d3.selectAll("#sCourt_A").classed('invisible', false);
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html").style("transform", "scale(5.0) translate(-30%,-25%)");
            
            d3.select(".ai2html-container").style("transform", "scale(0.40)");
            d3.select(".ai2html-container").style("margin-bottom", "1%");
            d3.selectAll(".scrolly-overlay").style("margin-left","0");
            d3.selectAll(".scrolly-overlay").style("max-width","25%");
            // d3.selectAll("#s1_A").classed('hidden', true); // mory's stuff
        });

        d3.select("#step-court").on('stepout',function(e) {
            d3.selectAll("#sCourt_A").classed('invisible', true);
            d3.select(".ai2html-container").classed("invisible", false);
            d3.select(".ai2html").style("transform", "scale(5.0) translate(-30%,-25%)");
            
            d3.select(".ai2html-container").style("transform", "scale(0.40)");
            d3.select(".ai2html-container").style("margin-bottom", "1%");
            // d3.selectAll("#s1_A").classed('hidden', true); // mory's stuff
        });
        
        d3.select("#step-seven").on('stepin', function(e) {
            d3.selectAll(".scrolly-overlay").style("margin-left","5%");
            d3.selectAll(".scrolly-overlay").style("max-width","unset");
            d3.selectAll("#sCourt_A").classed('invisible', true);
            d3.select(".ai2html-container").classed("invisible", true);
            // d3.select(".ai2html").style("transform", "scale(1.0) translate(0.0,0.0)");
            d3.selectAll(".gate-pic").classed('invisible',false);
        });

        d3.select("#step-nine").on('stepin', function(e) {
            d3.select("#wooster-locked").classed("sticky-thing", false);
            d3.select("#wooster-locked").classed("sticky-thing-absolute", true);
        });




        ///// last one!!!

        d3.select("#step-eleven").on('stepin',function(e) {
            // d3.select("#scrolly").style("background-color", "#bfd8d3"); // #81e8bc
			d3.select("#scrolly").style("background-color", "#96bfe6"); // #81e8bc

            d3.selectAll(".gate-pic").classed("invisible", true);

            d3.select(".ai2html-container").classed("invisible", true);
            d3.select(".ai2html-container").style("margin-right", "1%");
		})
        
        d3.select("#step-eleven").on('stepout',function(e) {
			if (e.detail.direction == 'down') {
				// d3.select(".ai2html-container").classed("invisible", true);
                d3.select("#s1_A").classed("invisible", true);
				d3.select("#scrolly").style("background-color", "#ebd999");
			}
		});