"use strict";

function onSelect(d) {
        alert(d.State);
    }
var first = 'yes';
var screen1 = '';
var backPressed = '';
var google='';
var apple='';
var facebook='';
var amazon='';
var microsoft='';
var filterMe = ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google'];
var animdata = animdata || {};
var myWidth;
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText;
}, false);
function myFunction() {
	document.getElementById("myUL").className = "results";
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

animdata.data = function() {
    var a = {};
    return a.data = [], a.init = function(b) {
        d3.csv("/assets/data/data.csv", function(c, d) {
            a.data = d,  b()

        })
    }, a
}();
var animdata = animdata || {};
animdata.chart = function() {
    function a(a) {
        var b = {
            mixed: "A mix",
            "?": "No response",
            all: "All",
            "Larry Page": "Larry Page (2011–2015)",
            "7Cost": "Over $20 billon",
            "6Cost": "$11- 20 billion",
            "5Cost": "$1 - 10 billion",
            "4Cost": "$500 - $999 million",
            "3Cost": "$100 - $499 million",
            "2Cost": "Less than $100 million",
            "1Cost": "Undisclosed",
            "Steve Ballmer": "Steve Ballmer (2000–2014)",
            "Eric Schmidt": "Eric Schmidt (2001–2011)",
            "Jeff Bezos": "Jeff Bezos (1994–present)",
            "Mark Zuckerberg": "Mark Zuckerberg (2004–present)",
            "Tim Cook": "Tim Cook (2011–present)",
            "Bill Gates": "Bill Gates (1975–2000)",
            "Satya Nadella": "Satya Nadella (2014–present)",
            "Steve Jobs": "Steve Jobs (1997–2011)",
            "Sundar Pichai": "Sundar Pichai (2015–present)",
            "John Sculley": "John Sculley (1983–1993)",
			"2006--2010": "2006–2010",
			"2011--present": "2011–present",
			"2001--2005": "2001–2005",
			"1996-2000": "1996–2000",
			"1991--1995": "1991–1995",
			"1985-1990": "1985–1990",
            fixed: "Fixed"
        };
        return _.has(b, a) ? b[a] : a
    }

    function b() {


        var a = {};
        _.each(t, function(b, c) {
            a[c] = {}, _.each(b, function(b, d) {
                a[c][b] = d
            })
        }), t = a
    }

    function c(a, b) {

		if (filterMe === ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google']) {

		}

		else {


		a =	_.filter(a, function(a){
  return _.includes(filterMe, a.acquirer);
});
		}
		if (d3.select("#wrapper .sidebar .menu ul").empty()) {





		}

        var c = {};
        if (_.has(s, b.colorBy)) c = s[b.colorBy];
        else {
            var d = _.map(a, function(a) {
                return a[b.colorBy]
            });
            d = _.uniq(d), _.each(d, function(a, b) {
                c[a] = r(b)
            })
        }
        return  c
    }
	if (b.groupBy === "industrySort1") {
	c = _.sortBy(c, b.groupBy);
	}
    function d(a, b) {
        var d = c(a, b);
        _.each(a, function(a) {
            if ("none" === b.colorBy) return void(a.layout.color = null);
            var c = a[b.colorBy];
            a.layout.color = _.has(d, c) ? d[c] : null
        })
    }

    function e(a, b) {
		if (filterMe === ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google']) {

		}

		else {

			if (!b.storyIsActive || b.groupBy ==='acquirer') {
				// remove above to get animation between every screen even if data remains constant
		if (filterMe.indexOf("Apple") < 0) {

			q.svg.selectAll("rect.Apple").remove()

		}
		if (filterMe.indexOf("Amazon") < 1) {
			q.svg.selectAll("rect.Amazon").remove()

		}
		if (filterMe.indexOf("Facebook") < 1) {
			q.svg.selectAll("rect.Facebook").remove()

		}
		if (filterMe.indexOf("Microsoft") < 1) {
			q.svg.selectAll("rect.Microsoft").remove()

		}
		if (filterMe.indexOf("Google") < 1) {
			q.svg.selectAll("rect.Google").remove()

		}
			}

		a =	_.filter(a, function(a){
  return _.includes(filterMe, a.acquirer);
});
		}
        var c = {};
        p = [], _.each(a, function(a) {
            a.layout = {}, a.geometry = {}
        }),
		// called for each item
		 _.each(a, function(a) {
            var d = a[b.groupBy];
            "none" === b.groupBy && (d = "all"), _.has(c, d) || (c[d] = []), c[d].push(a)
        }), d(a, b), _.each(c, function(a, b) {
            p.push({
                name: b,
                members: a
            })
        });
        var e = null;
		var e2 = null;

		if (b.groupBy === 'industry' || b.groupBy ==='industrySort1' || b.groupBy ==='5-year' || b.groupBy ==='costGroup'  ) {
			b.orderBy = 'acquirer';
			b.sortBy = 'acquirer';
		}

		if (b.groupBy ==='acquirer'|| b.groupBy ==='ceo' ) {
			b.orderBy = 'acquirer';
			b.sortBy = '';
		}
		 		// called for each group
		if (b.direction != 'reverse' || b.sortBy ==='costBucket' || b.groupBy ==='costGroup' ) {

		if ( b.groupBy ==='costGroup') {
			// add in to order by cost rather than by acquier with most acquistuibs
		//	b.orderBy = 'cost';
		//	b.sortBy = 'cost';
		}

        _.has(t, b.sortBy) && (e = t[b.sortBy]), _.each(p, function(a) {
            a.members = _.sortBy(a.members, function(a) {
           //     return e ? e[a[_.size(a.members)]] : a[_.size(a.members)]
		    return e ? e[a[b.sortBy]] : parseInt(a[b.orderBy])
            }).reverse()
        }),

		// returns the order of the group itself
		 e = null, _.has(t, b.groupBy) && (e = t[b.groupBy]), p = _.sortBy(p, function(a) {
            return _.size(a.members)
        })

		}

		else if ( b.groupBy ==='industrySort1') {
		  _.has(t, b.sortBy) && (e = t[b.sortBy]), _.each(p, a.members).reverse()
        ,

		// returns the order of the group itself
		 e = null, _.has(t, b.groupBy) && (e = t[b.groupBy]), p = _.sortBy(p, function(a) {
            return _.size(a.members)
        }).reverse();
		}

		else {
        _.has(t, b.sortBy) && (e = t[b.sortBy]), _.each(p, function(a) {
            a.members = _.sortBy(a.members, function(a) {
           //     return e ? e[a[_.size(a.members)]] : a[_.size(a.members)]
		    return e ? e[a[b.sortBy]] : parseInt(a[b.orderBy])
            }).reverse()
        }),

		// returns the order of the group itself
		 e = null, _.has(t, b.groupBy) && (e = t[b.groupBy]), p = _.sortBy(p, function(a) {
            return _.size(a.members)
        }).reverse();

		}

		if (b.sortBy === 'acquirer') {

			var acquirerAppleCount = _.map(c, c.member);

		var appleCount = 0;
		var amazonCount = 0;
		var googleCount = 0;
		var facebookCount = 0;
		var microsoftCount = 0;

		 _.each(p, function(a) {
           _.each(_.sortBy(a.members, 'acquirer'), function(a) {
                if (a.acquirer === 'Apple') {
					appleCount = appleCount + 1;

				}
				if (a.acquirer === 'Amazon') {
					amazonCount = amazonCount + 1;

				}
				if (a.acquirer === 'Google') {
					googleCount = googleCount + 1;

				}
				if (a.acquirer === 'Facebook') {
					facebookCount = facebookCount + 1;

				}
				if (a.acquirer === 'Microsoft') {
					microsoftCount = microsoftCount + 1;

				}

            });

			var allCounts = [
			{
				"name": "apple",
				"count": appleCount,
				"order": ""
			},
			{
				"name": "amazon",
				"count": amazonCount,
				"order": ""
			},
			{
				"name": "facebook",
				"count": facebookCount,
				"order": ""
			},
			{
				"name": "google",
				"count": googleCount,
				"order": ""
			},
 			{
				"name": "microsoft",
				"count": microsoftCount,
				"order": ""
			}
   			];

			allCounts.sort(function(a, b) {
    return a.count - b.count;
});
		allCounts[0].order = 5;
		allCounts[1].order = 4;
		allCounts[2].order = 3;
		allCounts[3].order = 2;
		allCounts[4].order = 1;




			_.each(_.sortBy(a.members, 'acquirer'), function(a) {
                if (a.acquirer === 'Apple') {
					var result = allCounts.filter(function( obj ) {
  						return obj.name === 'apple';
					});


					a.count =  result[0].order;
				}
				if (a.acquirer === 'Amazon') {
					var result2 = allCounts.filter(function( obj ) {
  						return obj.name === 'amazon';
					});


					a.count =  result2[0].order;
				}
				if (a.acquirer === 'Google') {
					var result3 = allCounts.filter(function( obj ) {
  						return obj.name === 'google';
					});


					a.count =  result3[0].order;

				}
				if (a.acquirer === 'Facebook') {
					var result4 = allCounts.filter(function( obj ) {
  						return obj.name === 'facebook';
					});


					a.count =  result4[0].order;

				}
				if (a.acquirer === 'Microsoft') {
					var result5 = allCounts.filter(function( obj ) {
  						return obj.name === 'microsoft';
					});


					a.count =  result5[0].order;

				}

            });

				appleCount = 0;
		 amazonCount = 0;
		 googleCount = 0;
		 facebookCount = 0;
		 microsoftCount = 0;

        });

			var f, g = 20,
            h = o.cellSize + o.cellPadding;

		if (first === "no") {
        _.each(p, function(a) {
           _.each(_.sortBy(a.members, 'count'), function(a, b) {
                a.geometry.x = b % o.numCols * h, a.geometry.y = g + Math.floor(b / o.numCols) * h, f = a.geometry.y
            }), g = f + o.groupSpacing
        })


		}
		else {
		_.each(p, function(a) {
           _.each(_.sortBy(a.members, function (a, b) { return _.countBy(a.members, 'count') }), function(a, b) {
                a.geometry.x = b % o.numCols * h, a.geometry.y = g + Math.floor(b / o.numCols) * h, f = a.geometry.y
            }), g = f + o.groupSpacing
        })
		}
		}
		else {
        var f, g = 20,
            h = o.cellSize + o.cellPadding;
			if (first === "no") {
        _.each(p, function(a) {
            _.each((_.sortBy(a.members, function (a, b) { return _.countBy(a.members, _.size(b.sortBy)) })), function(a, b) {
                a.geometry.x = b % o.numCols * h, a.geometry.y = g + Math.floor(b / o.numCols) * h, f = a.geometry.y
            }), g = f + o.groupSpacing
        })
			}
			else {
				 _.each(p, function(a) {
            _.each((_.sortBy(a.members, function (a, b) { return _.countBy(a.members, _.size(b.sortBy)) })), function(a, b) {
                a.geometry.x = b % o.numCols * h, a.geometry.y = g + Math.floor(b / o.numCols) * h, f = a.geometry.y
            });
			if (myWidth >= 600) { g = f + 40 } else  { g = f + 20 }
        })

			}

		}
    }

    function f(b, c) {
		if (filterMe === ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google']) {

		}

		else {
		var d = c;

		b =	_.filter(b, function(b){
  return _.includes(filterMe, b.acquirer);
});
		}

        var c = q.cells.selectAll("rect").data(b);
        c.enter().append("rect").on("mouseover", function(a) {
            j(a)
        }).on("mousemove", function(a) {
            i(a)
        }).on("mouseout", function(a) {
            k(a)
        }), c.attr("width", /*function(a) {
            return a.cost * o.cellSize
        })*/ o.cellSize).attr("height", o.cellSize).transition().duration(1e3).attr("ry", "1").attr("rx", "1").attr("x", function(a) {
            return a.geometry.x
        }).attr("stroke", function(a) {
			if (d.highlighted !="['none']") {

			if (	d.highlighted.indexOf('Slide') <= -1) {
				if(a.acquisition === 'Polar') {
				return ""
			}
			}
			if (	d.highlighted.indexOf('Exos') <= -1) {
				if(a.acquisition === 'Rare') {
				return ""
			}
			}
			if(a.acquisition === 'Groove' || a.acquisition === 'Visio'  ) {
				return ""
			}

            else if(d.highlighted.indexOf(a.acquisition) > -1) {
				return a.layout.color
			}
			else {
			return ""
			}}
        }).attr("stroke-width", function(a) {
			if (d.highlighted !="['none']") {

			if (	d.highlighted.indexOf('Slide') <= -1) {
				if(a.acquisition === 'Polar') {
				return ""
			}
			}
			if (	d.highlighted.indexOf('Exos') <= -1) {
				if(a.acquisition === 'Rare') {
				return ""
			}
			}
			if(a.acquisition === 'Groove' || a.acquisition === 'Visio'  ) {
				return ""
			}


            else if(d.highlighted.indexOf(a.acquisition) > -1) {
				return 1
			}
			else {
			return ""
			}}
        }).attr("y", function(a) {
            return a.geometry.y
        }).style("fill", function(a) {
            return a.layout.color
        }).attr("class", function(a) {
			if (d.highlighted !="['none']") {

			if (	d.highlighted.indexOf('Slide') <= -1) {
				if(a.acquisition === 'Polar') {
				return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'')+" opaque";
			}
			}
			 if (	d.highlighted.indexOf('Exos') <= -1) {
				if(a.acquisition === 'Rare') {
				return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'')+" opaque";
			}
			}
			if(a.acquisition === 'Groove' || a.acquisition === 'Visio'  ) {
				return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'')+" opaque";
			}
			if (	d.highlighted.indexOf('Zetawire') > -1) {
			if(a.acquisition === 'Tonic' || a.acquisition === 'TNC'  ) {
				return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'')+" opaque";
			}
			}
            if (d.highlighted.indexOf(a.acquisition) > -1) {
				return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'');
			}
			else {
			return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'')+" opaque";
			}
			}
			else {
			return a.acquirer+' '+ a.acquisition.replace(/[^a-zA-Z]/g,'');
			}





        }), c = q.cells.selectAll("text").data(p), c.enter().append("text"), c.exit().remove(), c.text(function(b) {
           if (first === 'no') {return a(b.name) }
        }).attr('class', (function(b) {
            if (d.highlighted2 ==="['none']") {
			return a(b.name)
			}
			else {

				if (d.highlighted2.indexOf(a(b.name)) > -1) {
					return a(b.name)
				} else {
					return a(b.name) + ' fade'
				}  }})).attr("y", function(a) {

			   	if (a.name === '2011--present') {
				return 12
			}
				else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost')) {
				if (myWidth >= 1100) {
					return 415.55
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.0675;
					base = 415.55 - base;
					return base

				}
			}

			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost')) {
				if (myWidth >= 1100) {
					return 415.55
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.0675;
					base = 415.55 - base;
					return base

				}
			}

			else if ((filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')) {
				if (myWidth >= 1100) {
					return 391.7
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.045;
					base = 391.7 - base;
					return base

				}
			}

			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')|| (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') ) {
				if (myWidth >= 1100) {
					return 367.85
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.0225;
					base = 367.85 - base;
					return base

				}
			}
			else if (  (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost')  ) {

					return 344

			}
			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')  || (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')|| (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')|| (filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost')) {
				if (myWidth >= 1100) {
					return 312.85
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.025;
					base = 312.85 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') || (filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '1Cost') ) {

					return 289

			}
			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 210.5
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.1337;
					base = 210.5 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') <= -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 91
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.0218;
					base = 91 - base;
					return base

				}
			}

			else if ((filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 139
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.0655;
					base = 139 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') <= -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 188
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.112;
					base = 188 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') > -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 212.1
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.135;
					base = 212.1 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') <= -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') <= -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 163
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.1206;
					base = 163 - base;
					return base

				}
			}
			else if ((filterMe.indexOf('Apple') > -1 && filterMe.indexOf('Microsoft') > -1 && filterMe.indexOf('Amazon') <= -1 && filterMe.indexOf('Google') > -1 && filterMe.indexOf('Facebook') > -1 && a.name === '2006--2010') ) {
				if (myWidth >= 1100) {
					return 210
				}
				else {
					var base = 1100 - myWidth;
					base = base * 0.088;
					base = 210 - base;
					return base

				}
			}
			else if (d.sortBy != 'acquirer') {
			return a.members[0].geometry.y - 6
			}
			else {
				a.members.sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj1.count - obj2.count;
})
            return a.members[0].geometry.y - 6
			}
        })


    }

    function g(b, d) {

		if (filterMe === ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google']) {

		}

		else {


		b =	_.filter(b, function(b){
  return _.includes(filterMe, b.acquirer);
});
		}
		// this is where the key is added - on initial page load this is not called
if (!d.storyIsActive) {
	// this is is it is the final page

		q.legend.classed("active", false);

		// add content here for key as checkboxes - remove existing key (leaving placeholder in place) + add search field

        var e = c(b, d);
        e = _.map(e, function(a, b) {
            return {
                name: b,
                color: a
            }
        }), "none" === d.colorBy && (e = {});
        var f = null;
        _.has(t, d.colorBy) && (f = t[d.colorBy]), e = _.sortBy(e, function(a) {
            return f ? f[a.name] : a.name
        });

			// add the checkboxes
        var g = d3.select("#wrapper .sidebar .filter").selectAll("div").data(e);
        g.enter().append("div"), g.exit().remove(), g.style("background-color", function(a) {
            return a.color
         }).text(function(b) {
            return a(b.name)
        }).attr('class',function(b) { if (filterMe.indexOf(b.name) > -1) {
            return a(b.name)  + " item"
		}
		else {
		 return a(b.name)  + " item deselect"
		}
        } ).append('input').attr("id", function(b) {
            return a(b.name)
        }).attr('type','checkbox').property('checked', function(a) { if (filterMe.indexOf(a.name) > -1) { return true}})
		.on("change", function(a, b) {



		if (a.name === 'Apple') {
			if (d3.select(this).node().checked == true) {
			filterMe.push("Apple");
			d3.select("#wrapper .filter .item.Apple").classed("deselect", false);
			}
			else {
			var i = filterMe.indexOf("Apple");
			if(i != -1) {
				filterMe.splice(i, 1);
			}
			d3.select("#wrapper .filter .item.Apple").classed("deselect", true);
			}

		}
		if (a.name === 'Microsoft') {
			if (d3.select(this).node().checked == true) {
			filterMe.push("Microsoft");
			d3.select("#wrapper .filter .item.Microsoft").classed("deselect", false);
			}
			else {
			var i = filterMe.indexOf("Microsoft");
			if(i != -1) {
				filterMe.splice(i, 1);
			}
			d3.select("#wrapper .filter .item.Microsoft").classed("deselect", true);
			}
		}
		if (a.name === 'Facebook') {
			if (d3.select(this).node().checked == true) {
			filterMe.push("Facebook");
			d3.select("#wrapper .filter .item.Facebook").classed("deselect", false);
			}
			else {
			var i = filterMe.indexOf("Facebook");
			if(i != -1) {
				filterMe.splice(i, 1);
			}
			d3.select("#wrapper .filter .item.Facebook").classed("deselect", true);
			}
		}
		if (a.name === 'Google') {
			if (d3.select(this).node().checked == true) {
			filterMe.push("Google");
			d3.select("#wrapper .filter .item.Google").classed("deselect", false);
			}
			else {
			var i = filterMe.indexOf("Google");
			if(i != -1) {
				filterMe.splice(i, 1);
			}
			d3.select("#wrapper .filter .item.Google").classed("deselect", true);
			}
		}

		if (a.name === 'Amazon') {
			if (d3.select(this).node().checked == true) {
			filterMe.push("Amazon");
			d3.select("#wrapper .filter .item.Amazon").classed("deselect", false);
			}
			else {
			var i = filterMe.indexOf("Amazon");
			if(i != -1) {
				filterMe.splice(i, 1);
			}
			d3.select("#wrapper .filter .item.Amazon").classed("deselect", true);
			}
		}

			animdata.chart.update(animdata.data.data, animdata.main.uiState);

		});

		d3.selectAll(".item")
    .data(e)
    .append("text")
    .text(function(b) {
            return a(b.name)
        });



		}
		else {
			// this is for all pages except start & final
			if (first != 'yes') {
		q.legend.classed("active", true);
			}
        var e = c(b, d);
        e = _.map(e, function(a, b) {
            return {
                name: b,
                color: a
            }
        }), "none" === d.colorBy && (e = {}), q.legend.select("h3").classed("active", _.keys(e).length > 0);
        var f = null;

        _.has(t, d.colorBy) && (f = t[d.colorBy])/*, e = _.sortBy(e, function(a) {
            return f ? f[a.name] : a.name
        })*/;
		e = _.sortBy(e, function(o) { return o.name; });
        var g = q.legend.selectAll("div.item").data(e);
        g.enter().append("div").classed("item", !0), g.exit().remove(), g.text(function(b) {
            return a(b.name)
        }).append("span").style("background-color", function(a) {

            return a.color
        })
    }
	}


    function h(b) {
        var c = [
			{
                label: "Company Name",
                key: "acquisition"
            },
			 {
                label: "Industry",
                key: "industry"
            },
			{
                label: "Acquirer",
                key: "acquirer"
            },
			{
                label: "Acquisition date",
                key: "date"
            },{
                label: "Cost",
                key: "cost2"
            }],
            d = "<table>";
        return _.each(c, function(c) {
			if (c.label === 'Cost: ') {
				if (a(b[c.key]) ==='1') {
				d += "<tr><td>" + c.label + ":</td><td>Undisclosed</td></tr>"
				}
				else {
					d += "<tr><td>" + c.label + ":</td><td>$" + a(b[c.key]) + "m</td></tr>"
				}
			}
			else {
            d += "<tr><td>" + c.label + ":</td><td>" + a(b[c.key]) + "</td></tr>"}
        }), d += "</table>"
    }

    function i(a) {
        var b = d3.mouse(q.container.node()),
            c = b[0] + 5;
        b[1] += 5, c > .8 * m ? c -= o.tooltipWidth + 10 : c > .4 * m && (c -= .5 * o.tooltipWidth), q.tooltip.html(h(a)).style("left", c + "px").style("top", b[1]+ 12 + "px")
    }

    function j(a) {
        q.tooltip.style("display", "block").transition().style("opacity", 1), i(a)
    }

    function k(a) {
        q.tooltip.transition().style("opacity", 0)
    }


    function l() {
		p = _.sortBy(p, function(p) {
            return p = _.groupBy(p,  _.size('acquirer'))
        })
        var a = p[p.length - 1],


            b = a.members[a.members.length - 1],
            c = b.geometry.y;
			if (a.name === '1Cost') {
				q.svg.attr("height", "700px")
			}
			else {
        q.svg.attr("height", c + 50 + "px")
			}
    }
    var m, n = {},
        o = {
            cellSize: 26,
            cellPadding: 2,
            numCols: 40,
            groupSpacing: 55,
            tooltipWidth: 230
        },
        p = [],
        q = {},
        r = d3.scale.category20c(),
        s = {
            acquirer: {
                "Apple": "#8f8f97",
                "Microsoft": "#40CDA7",
                "Amazon": "#f5a623",
                "Google": "#e54343",
                "Facebook": "#547bf3"
            }
        },
        t = {
            acquirer: ["Apple", "Microsoft", "Amazon", "Google", "Facebook"]
        };
    return n.update = function(a, b) {
		// this is triggered on every page load after first page
		// g(a, b) - is used to trigger the key generation - which is not done on the initial page load



		if (screen1 === 'yes') {
			screen1 = '';
		}

		else {
		first = 'no';

		d3.select("#wrapper .sidebar .copy").classed("first", false);

		d3.select("#wrapper .sidebar .about").classed("first", false);
		d3.select("#wrapper #chart").classed("first", false);
		}




		if (!b.storyIsActive) {

			d3.select("#wrapper .sidebar header .last").classed("hide", false);
			d3.select("#wrapper .sidebar .filter").classed("hide", false);
			d3.select(".lastBorder").classed("hide", false);
			d3.select("#wrapper .sidebar p").classed("hide", false);
			d3.select("#wrapper .sidebar .explore").classed("first", true);
			d3.select("#wrapper .sidebar header .stories").classed("hide", false);
			d3.select("#wrapper .sidebar .copy p").classed("last", true);
			d3.select("#wrapper .sidebar .filter p").classed("hide", false);
			d3.select("#wrapper #chart").classed("last", true);
			b.highlighted = "['none']"
			b.highlighted2 = "['none']"
			if (filterMe != ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Google']) {
		//d3.selectAll("rect").remove();

			}


	//	a = _.filter(a, { 'acquirer': 'Microsoft' });

		}

		else {

			if (backPressed === 'yes') {

				if (d3.select(".progress").classed("progress-tran12")) {
				d3.select(".progress").classed("progress-tran12", false);
			}
			else if (d3.select(".progress").classed("progress-tran11")) {
				d3.select(".progress").classed("progress-tran11", false);
			}
			else if (d3.select(".progress").classed("progress-tran10")) {
				d3.select(".progress").classed("progress-tran10", false);
			}
			else if (d3.select(".progress").classed("progress-tran9")) {
				d3.select(".progress").classed("progress-tran9", false);
			}
			else if (d3.select(".progress").classed("progress-tran8")) {
				d3.select(".progress").classed("progress-tran8", false);
			}
			else if (d3.select(".progress").classed("progress-tran7")) {
				d3.select(".progress").classed("progress-tran7", false);
			}
			else if (d3.select(".progress").classed("progress-tran6")) {
				d3.select(".progress").classed("progress-tran6", false);
			}
			else if (d3.select(".progress").classed("progress-tran5")) {
				d3.select(".progress").classed("progress-tran5", false);
			}
			else if (d3.select(".progress").classed("progress-tran4")) {
				d3.select(".progress").classed("progress-tran4", false);
			}
			else if (d3.select(".progress").classed("progress-tran3")) {
				d3.select(".progress").classed("progress-tran3", false);
			}
			else if (d3.select(".progress").classed("progress-tran2")) {
				d3.select(".progress").classed("progress-tran2", false);
			}
			else if (d3.select(".progress").classed("progress-tran1")) {
				d3.select(".progress").classed("progress-tran1", false);

			}
			else {
				d3.select(".progress").classed("progress-tran0", true);
			}
			}

			else {


			if (d3.select(".progress").classed("progress-tran11")) {
				d3.select(".progress").classed("progress-tran12", true);
			}
			else if (d3.select(".progress").classed("progress-tran10")) {
				d3.select(".progress").classed("progress-tran11", true);
			}
			else if (d3.select(".progress").classed("progress-tran9")) {
				d3.select(".progress").classed("progress-tran10", true);
			}
			else if (d3.select(".progress").classed("progress-tran8")) {
				d3.select(".progress").classed("progress-tran9", true);
			}
			else if (d3.select(".progress").classed("progress-tran7")) {
				d3.select(".progress").classed("progress-tran8", true);
			}
			else if (d3.select(".progress").classed("progress-tran6")) {
				d3.select(".progress").classed("progress-tran7", true);
			}
			else if (d3.select(".progress").classed("progress-tran5")) {
				d3.select(".progress").classed("progress-tran6", true);
			}
			else if (d3.select(".progress").classed("progress-tran4")) {
				d3.select(".progress").classed("progress-tran5", true);
			}
			else if (d3.select(".progress").classed("progress-tran3")) {
				d3.select(".progress").classed("progress-tran4", true);
			}
			else if (d3.select(".progress").classed("progress-tran2")) {
				d3.select(".progress").classed("progress-tran3", true);
			}
			else if (d3.select(".progress").classed("progress-tran1")) {
				d3.select(".progress").classed("progress-tran2", true);
			}
			else if (d3.select(".progress").classed("progress-tran0")) {
				d3.select(".progress").classed("progress-tran1", true);
			}
			else   {
				d3.select(".progress").classed("progress-tran0", true);
			}
			}
			backPressed = '';
		}
        e(a, b), f(a, b),
		g(a, b), l()
    }, n.updateWidth = function(a, b, c) {

        m = a, q.svg.attr("width", .91 * a + "px"), o.cellSize = .9 * a / o.numCols - o.cellPadding, e(b, c), f(b, c), l()
    }, n.init = function() {
        q.container = d3.select("#chart"), q.svg = q.container.select("svg"), q.cells = q.svg.select("g.cells"), q.legend = d3.select("#wrapper .sidebar .legend"), q.tooltip = q.container.select(".tooltip"), b()
    }, n
}();
var animdata = animdata || {};
animdata.menu = function() {
	// this is where the fields are addded
    function a(a) {
        d3.select(this).append("div").classed("label", !0).text(a.label);
        var b = d3.select(this).append("div").attr("class", "labels");
        b.selectAll("input").data(function(a) {
            return a.options
        }).enter().append("label").append("text").attr("class", function(a) {
            return a.name}).text(function(a) {
            return a.label
        }).append("input").attr({type: "radio",
        class: "radio",
		name: a.name,
        value: function(a) {
            return a.name
        }}).on("change", function(a) {

			// trigger re-sorting of graph
			d3.select(".activeGroup").classed("activeGroup", false);
			d3.select(this.parentNode).classed("activeGroup", true);
			if (this.value === 'costBucket') {
				this.value = 'costGroup'
			}
            e.menuSelect(this.name, this.value)
        })
		if (first ==='yes') {
			d3.select(".activeGroup").classed("activeGroup", false);
			d3.select("#wrapper .sidebar .menu .acquirer").classed("activeGroup", true);
		}
    }





    function b() {
        d3.select("#wrapper .sidebar .menu").selectAll("div").data(d).enter().append("div").classed("select", !0).each(a)
    }
    var c = {},
        d = [{
            name: "groupBy",
            label: "GROUP BY: ",
            options: [
			{
                label: "Acquirer",
                name: "acquirer"
            },
			 {
                label: "CEO",
                name: "ceo"
            },
			{
                label: "Cost",
                name: "costBucket"
            },
			{
                label: "Industry",
                name: "industry"
            },
			{
                label: "Time",
                name: "5-year"
            }
			]
        }],
        e = {};
    return c.init = function(a) {
        e = a, b()
    }, c.updateVisibility = function(a) {
        d3.select("#wrapper .sidebar .menu").classed("active", a) // class active is added here to make the controls visible
    }, c
}();
var animdata = animdata || {};
animdata.story = function() {
    function a(a) {
        e.html(a)
    }

    function b() {
		d3.select("#wrapper .sidebar header .buttons .next").classed("first-trans", true);
		d3.select("#wrapper .sidebar .copy.first").classed("first-trans", true);
		d3.select(".background.first").classed("first-trans", true);
		d3.select("#wrapper .sidebar header .first").classed("first-trans", true);
		d3.select("header").classed("main", true);
		d3.select("#wrapper .sidebar .about .buttons .next").classed("first-trans", true);



		var delay=100; //2 second

setTimeout(function() {
		d3.select("#wrapper .sidebar header .buttons .next").classed("firstNext", false);
		d3.select("#wrapper .sidebar .about .buttons .next").classed("eNext", false);
		d3.select("#wrapper .sidebar .about .buttons .next").classed("hide", true);
	d3.select("#wrapper .sidebar header .first").classed("hide", true);
		d3.select("#wrapper .sidebar header .buttons.first").classed("first", false);
		d3.select("#wrapper .sidebar header .buttons .next").classed("hBorder", false);
		d3.select("#wrapper .sidebar header .buttons .next").classed("hide", false);
		d3.select("#wrapper .sidebar header .buttons .next").classed("hBorder2", true);
		d3.select("#wrapper .sidebar header .explore").classed("first", false);
		d3.select(".background.first").classed("first", false);
		d3.select("#wrapper .sidebar header .buttons .next").text("NEXT ");
		d3.select("#wrapper .sidebar header .buttons .next").append("i").classed("arrow-right", true);
		d3.select("#wrapper .sidebar .buttons .prev.button").classed("active", !0);
		d3.select(".background").classed("main", true);
		d3.select(".background").classed("first-trans", false);

		}, delay);

		var delay=100; //2 second

setTimeout(function() {

		d3.select(".background.main").classed("main-trans", true);
			d3.select("header").classed("main-trans", true);
		}, delay);

		var delay=1000; //2 second

setTimeout(function() {
  //your code to be executed after 2 second


        if (h += 1, h === f.length) return a("<div><p class='left'>Explore our visualisation to see how tech giants shaped their products and services with acquisitions, what industries saw the greatest activity, and how the rate of acquisitions has changed over time.</p></div>"), d3.select("#wrapper .sidebar .buttons").style("display", "none"), void g.newChapter(!1);

        var b = f[h];
        a(b.copy), g.newChapter(b)

 	}, delay);
 }

 function b2() {
        if (h = 12, h === f.length) return a("<div><p class='left'>Explore our visualisation to see how tech giants shaped their products and services with acquisitions, what industries saw the greatest activity, and how the rate of acquisitions has changed over time.</p></div>"), d3.select("#wrapper .sidebar .buttons").style("display", "none"), void g.newChapter(!1);
        d3.select("#wrapper .sidebar .buttons .prev.button").classed("active", !0);
        var b = f[h];
        a(b.copy), g.newChapter(b)
    }

	function b3() {
        d3.select("#wrapper .sidebar .buttons").style("display", "none"), void g.newChapter(!1);
        d3.select("#wrapper .sidebar .buttons .prev.button").classed("active", !0);
        var b = f[h];
        a(b.copy), g.newChapter(b)
    }
	function b4() {
		if (d3.select(".overlay").classed("hide")) {
        d3.select(".overlay").classed("hide", false);
		}
		else {
		d3.select(".overlay").classed("hide", true);
		}
    }

	function b5() {
        d3.select(".overlay").classed("hide", true);

    }
	function b6() {
		if (d3.select(".social-likes_vertical").classed("social-likes_visible")) {
			d3.select(".social-likes_vertical").classed("social-likes_visible", false)
		}
		else {
        d3.select(".social-likes_vertical").classed("social-likes_visible", true);
		}
    }
	function b7() {
		if (d3.select("#embed").classed("visible")) {
			d3.select("#embed").classed("visible", false)
		}
		else {
        d3.select("#embed").classed("visible", true);
		}
    }
	function b8() {
		if (d3.select("#embed").classed("visible")) {
			d3.select("#embed").classed("visible", false)
		}
		else {
        d3.select("#embed").classed("visible", true);
		}
    }
	function b9() {
		window.open("https://twitter.com/share?url=https://www.geckoboard.com/tech-acquisitions&text=.@Geckoboard visualized all acquisitions by the big 5 tech companies, here’s what they learned", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;
    }

	function b10() {
		var winHeight = window.innerHeight;
		var winHeight2 = (winHeight / 2);
		var winWidth = window.innerWidth;
	 var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Tech Takeovers&p[summary]=From Apple to Microsoft: see all the mergers and acquisitions made by the five companies set to dominate the future of tech.&p[url]=https://www.geckoboard.com/tech-acquisitions&p[images][1]=', 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + (winWidth / 2) + ',height=' + (winHeight2));
    }
	function b11() {
		if (myWidth <= 780) {
			if (document.getElementById('tooltip').style.opacity=='1') {
		 if(e.target != document.getElementById('tooltip')) {

    }
	else {
		document.getElementById('tooltip').style.opacity='0';
	}
		}
		else if (document.getElementById('tooltip').style.opacity=='1') {
			if(e.target === document.getElementById('tooltip')) {
				document.getElementById('tooltip').style.opacity='1';
			}
		}
		}
    }
    function c() {
        h -= 1, 0 === h && d3.select("#wrapper .sidebar .buttons .prev.button").classed("active", !1);
        var b = f[h];
		var substring ="<div><p class='left'>With 617 acquisitions between them";
		if ((b.copy).indexOf(substring) !== -1) {
			first ='yes';
			screen1 = 'yes';
			d3.select(".background").classed("first", true);
			d3.select(".background").classed("main", false);
			d3.select("#wrapper #chart").classed("first", true);
			d3.select(".background").classed("main-trans", false);
			d3.select(".progress").classed("progress-tran0", false);
			d3.select(".progress").classed("progress-tran1", false);
			d3.select(".progress").classed("progress-tran2", false);
			d3.select(".progress").classed("progress-tran3", false);
			d3.select(".progress").classed("progress-tran4", false);
			d3.select(".progress").classed("progress-tran5", false);
			d3.select(".progress").classed("progress-tran6", false);
			d3.select(".progress").classed("progress-tran7", false);
			d3.select(".progress").classed("progress-tran8", false);
			d3.select(".progress").classed("progress-tran9", false);
			d3.select(".progress").classed("progress-tran10", false);
			d3.select(".progress").classed("progress-tran11", false);
			d3.select(".progress").classed("progress-tran12", false);
			d3.select("header").classed("main", false);
			d3.select("header").classed("main-trans", false);
			d3.select("#wrapper .sidebar header .first").classed("first-trans", false);
			d3.select("#wrapper .sidebar header .first").classed("hide", false);
			d3.select("#wrapper .sidebar header .buttons").classed("first", true);
			d3.select("#wrapper .sidebar header .buttons").classed("first", true);
			d3.select(".explore").classed("first", true);
			d3.select(".about").classed("first", true);
			d3.select(".copy").classed("first", true);
			d3.select(".filter p").classed("hide", true);
			d3.select(".legend").classed("active", false);
			d3.select("#wrapper .sidebar header .buttons .next").classed("firstNext", true);
			d3.select("#wrapper .sidebar .about .buttons .next").classed("eNext", true);
			d3.select("#wrapper .sidebar .about .buttons .next").classed("hide", false);
			d3.select("#wrapper .sidebar .about .buttons .next").classed("first-trans", false);
			d3.select("#wrapper .sidebar header .buttons .next").classed("hBorder2", false);
			d3.select("#wrapper .sidebar header .buttons .next").classed("hide", true);
			d3.select("#wrapper .sidebar header .buttons .next").classed("hBorder", true);
			d3.select("#wrapper .sidebar header .buttons .next").classed("first-trans", false);
			d3.select("#wrapper .sidebar .about .buttons .next").classed("first-trans", false);
			d3.select("#wrapper .sidebar header legend").classed("active", false);
			d3.select("#wrapper .sidebar header .buttons .next").text("EXPLORE STORIES").append('i').classed('arrow-right', true);
			d3.select("#wrapper .sidebar .copy.first").classed("first-trans", false);


		}
		backPressed = 'yes';

        a(b.copy), g.newChapter(b)
    }
    var d = {},
        e = d3.select("#wrapper .sidebar .about .copy"),
        f = [{
            groupBy: "acquirer",
            colorBy: "acquirer",
			orderBy: "cost",
			direction: "reverse",
			change: "no",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><p class='left'>With 617 acquisitions between them, <span class='amazon'>Amazon</span>, <span class='apple'>Apple</span>, <span class='facebook'>Facebook</span>, <span class='google'>Google</span>, and <span class='microsoft'>Microsoft</span> spent nearly $130 billion in mergers and acquisitions. And that’s just based on the deals where financial details have been disclosed. See the stories behind the acquisitions made by the five companies set to dominate the future of tech.</p><p class='right'</p></div>"
        }, {
            groupBy: "acquirer",
            colorBy: "acquirer",
			orderBy: "cost",
			direction: "reverse",
			change: "no",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><h1>STRENGTH IN NUMBERS</h1><p class='left'>Google leads the way, ramping up a whopping 215 acquisitions in 18 years of operation, leaving behind the rest of the tech giants, including Microsoft who have accomplished 197 despite being around for forty years.</p><p class='right'>Apple has 87 known acquisitions under their belt, Amazon has 61, while Facebook - being the youngest of tech giants - has 60.</p></div>"
        }, {
            groupBy: "5-year",
            colorBy: "acquirer",
			sortBy: "acquirer", // if added this controls how blocks are sorted within groups
			orderBy: "cost",
			direction: "reverse",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><h1>ONWARDS AND UPWARDS</h1><p class='left'>As the top five tech firms established themselves, the pace of their acquisitions only grew more ambitious. Recent years saw an unprecedented amount of activity in M&amp;As from all the five firms, as they seek to establish dominance in the field.</p></div>"
        }, {
            groupBy: "ceo",
            colorBy: "acquirer",
			orderBy: "cost",
			direction: "reverse",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><h1>SPENDING SPREES</h1><p class='left'>Steve Balmer might have more acquisitions than other CEOs, but it’s Larry Page, who has been the most prolific leader by securing a staggering 109 acquisitions in four years of his second term as Google's CEO. Similarly, Satya Nadella has been Microsoft’s CEO for only 3 years, but has already acquired 36 companies – a rate Microsoft has not seen in a decade.</p><p class='right'>Tim Cook made the lion’s share of Apple’s acquisitions having bought 51 companies – more than Steve Jobs, who reputedly saw acquisitions as ‘failure to innovate’.</p></div>"
        },
			{
            groupBy: "costGroup",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><h1>FROM MILLIONS TO BILLIONS</h1><p class='left'>Although financial details of most acquisitions remain undisclosed, the known amounts the tech giants spent on acquisitions are truly astounding. Microsoft doesn't shy away from a steep price tag, as they've bought 9 companies for $1 billion dollars or more.</p><p class='right'>Facebook, Google, and Apple have gone past $1 billion mark a few times, whereas Amazon tends to keep their acquisitions expenses to millions.</p></div>"
        },
		{
            groupBy: "costGroup",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			highlighted: "['Beats Electronics', 'Twitch', 'Motorola Mobility', 'WhatsApp']",
			highlighted2: "['6Cost', '5Cost', '4Cost', '$11- 20 billion', '$1 - 10 billion', '$500 - $999 million' ]",
            copy: "<div><h1>CROWN JEWELS</h1><p class='left'>The largest acquisition in Apple’s history was Beats Electronics - a $3 billion deal championed by Tim Cook. Google's most expensive purchase was Motorola Mobility. It cost the search giant $12.5 billion in 2012, but it's since been sold to Lenovo $2.9 billion.</p><p class='right'>Facebook’s chart-topping acquisition was Whatsapp – a deal that was worth a $16 billion. Amazon has set its acquisition record recently by purchasing Twitch - a video streaming platform mostly used by gamers - for $970 million.</p></div>"
        },
		{
            groupBy: "costGroup",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "cost",
			highlighted: "['LinkedIn']",
			highlighted2: "['7Cost', 'Over $20 billon']",
            copy: "<div><h1>ONE FOR THE MONEY</h1><p class='left'>However astounding, the above acquisitions pale in comparison to Microsoft's purchase of LinkedIn for $26B making it the most expensive deal any of the tech giants have done to date.</p><p class='right'>LinkedIn acquisition put Microsoft's total M&A paycheck at $62.7 billion, which is only $3.2 billion less than the amount all other tech giants have spent on acquisitions combined.</p></div>"
        },
		{
            groupBy: "industry",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			direction: "reverse",
			highlighted: "['none']",
			highlighted2: "['none']",
            copy: "<div><h1>ACTIVE ON ALL FRONTS</h1><p class='left'>Whereas LinkedIn was by many accounts a massive deal in the tech world and beyond, social media is not the industry where the Big Five have made the most acquisitions as they continue to be active in a variety of fields.</p></div>"
        },
		{
            groupBy: "industry",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			direction: "reverse",
			highlighted: "['Friendster patents', 'Groove Networks', 'Lightbox.com', 'Genius Labs', 'JustSpotted', 'Color Labs', 'FriendFeed', 'Hot Potato', 'ShareGrove', 'SocialDeck', 'Spotsetter', 'Dodgeball', 'Friend.ly', 'Goodreads', 'Instagram', 'Pyra Labs', 'Tianya.cn', 'Aardvark', 'ConnectU', 'LinkedIn', 'Shelfari', 'Angstro', 'Glancee', 'Jambool', 'Katango', 'Branch', 'Fridge', 'Yammer', 'Zingku', 'Jaiku', 'Karma', 'Polar', 'Slide', 'Kifi', 'Milk', 'TNC']",
			highlighted2: "['Social']",
            copy: "<div><h1>GOOGLE TRIED TO BE SOCIAL</h1><p class='left'>In other social media acquisitions, however, it is Google who has bought more companies than its counterparts - 18. Most of these companies were purchased to support Google’s efforts to build its own social network - Google+, now widely seen as a failed project.</p></div>"
        },
		{
            groupBy: "industry",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			direction: "reverse",
			highlighted: "['5th Finger', '6Wunderkinder', 'Acompli', 'Acrylic Software', 'Agawi', 'allPAY', 'Android', 'Annapurna Labs', 'Apportable', 'Bitspin', 'BlindType', 'bruNET', 'Bump', 'Capptain', 'Clever Sense', 'Danger', 'Datazen', 'Directr', 'Divide', 'Divshot', 'Double Labs', 'Dryft', 'fflick', 'FlexyCore', 'GoPago', 'HockeyApp', 'Inception Mobile', 'LabPixies', 'LaunchKit', 'Launchpad Toys', 'Lexcycle', 'LinX', 'Liquavista', 'LuxVue Technology', 'Mobicomp', 'Mobile Data Labs', 'Mobipocket', 'Modu', 'MotionBridge', 'Motorola Mobility', 'N-trig', 'Nokia Mobile', 'Omnibrowse', 'osmeta', 'Parse', 'Perceptive Pixel', 'Pixate', 'ProtoGeo Oy', 'Pulse.io', 'RelativeWave', 'Reqwireless', 'ScreenTonic', 'Sendit', 'Snaptu', 'Softcard', 'Sparrow', 'Spool', 'STNC', 'TalkBin', 'Talko', 'Tellme Networks', 'Timeful', 'Touchco', 'TouchType', 'WaveGroup Sound', 'WIMM Labs', 'Xamarin', 'Zetawire']",
			highlighted2: "['Mobile']",
            copy: "<div><h1>THE POWER OF APPLE'S INNOVATION</h1><p class='left'>Despite iPhones and iPads dominating the mobile market, Apple has made barely any acquisitions in the purely mobile space, relying instead on its own capacity to innovate. It is, in fact, Google and Microsoft who made the most acquisitions in this space (30 and 23 respectively) each having bought once titans of mobile market Motorola and Nokia. </p></div>"
        },
		{
            groupBy: "industry",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			direction: "reverse",
			highlighted: "[AbeBooks', 'FameBit', 'Accept.com', 'Appetas', 'Audible.com', 'Avalon Books', 'BeatThatQuote.com', 'Bookpages', 'Box Office Mojo', 'Brilliance Audio', 'BufferBox', 'BuyVIP', 'CDNow', 'Channel Intelligence', 'Classic Custom Vacations', 'CompareNet', 'CustomFlix', 'DailyDeal', 'DCG', 'Dealmap', 'Egghead', 'eShop', 'Exchange.com', 'Fabric.com', 'Farecast', 'Frommer's', 'Greenfield Online', 'Incentive Targeting', 'Intellisol', 'ITA Software', 'Jellyfish.com', 'Joyo.com', 'KikScore', 'Like.com', 'NCompass Labs', 'Nextstop', 'Oyster', 'Parature', 'Punchd', 'Quidsi', 'Rangespan', 'Ruba', 'Sales Management Systems', 'Shoefitr', 'Shopbob', 'Sparkbuy', 'Tagtile', 'Teachstreet', 'Telebook', 'Telekinesys Research', 'The Book Depository', 'TheFind', 'Travelscape', 'TxVia', 'Vacationspot', 'Woot', 'Zagat', 'Zappos', 'Zave Networks']",
			highlighted2: "['E-Commerce']",
            copy: "<div><h1>TRADE WARS</h1><p class='left'>Amazon who dominates the mergers and acquisitions in the E-commerce sector, with 22 companies they bought over the years. Google, however, has acquired 20 companies in the sector, with its recent e-commerce acquisition Oyster going to the very heart of Amazon’s business – online book sales.</p></div>"
        },
		{
			groupBy: "industry",
            colorBy: "acquirer",
			sortBy: "acquirer",
			orderBy: "acquirer",
			direction: "reverse",
			highlighted: "['Industrial Perception', 'Redwood Robotics', 'Boston Dynamics', 'Dark Blue Labs', 'Vision Factory', 'Meka Robotics', 'Neven Vision', 'API.AI', 'Tuplejump', 'Angel.ai' 'Bot & Dolly', 'DNNresearch', 'FingerWorks', 'Moodstocks', 'Polar Rose', 'Colloquis', 'Faceshift', 'Nest Labs', 'Perceptio', 'Snap Tell', 'Novauris', 'DeepMind', 'Emotient', 'Entropic', 'Face.com', 'PittPatt', 'Flutter', 'Holomni', 'Numovis', 'Viewdle', 'VocalIQ', 'Aorato', 'Jetpac', 'Orbeus', 'RecRec', 'Revolv', 'SayNow', 'Schaft', 'Wit.ai', 'Genee', 'Ivona', 'Wavii', 'Kiva', 'Siri', 'Turi', 'Cue', 'evi', 'Yap']",
			highlighted2: "['AI']",
            copy: "<div><h1>RISE OF THE ROBOTS</h1><p class='left'>Battling for dominance of the future, the Big Five have all been actively acquiring Artificial Intelligence (AI) companies. On its way to the AI-first world, Google is way ahead of the field with 23 acquisitions in this space.</p><p class='right'>Apple, however, is catching up with 5 out of its last 10 acquisitions being AI or machine learning companies. Amazon, having beaten Google to the first AI-for-the-home device on the market, follows closely with 7 AI acquisitions to date.</p></div>"
        }],
        g = {},
        h = 0;
    return d.init = function(d) {
        g = d, d3.select("#wrapper .sidebar .buttons .next")
		.on("click", b),
		d3.select("#wrapper .sidebar .explore")
		.on("click", b2),
		d3.select("#wrapper .sidebar .stories")
		.on("click", b3),
		d3.select("footer .links .info")
		.on("click", b4),
		d3.select(".overlay .close")
		.on("click", b5),
		d3.select(".share")
		.on("click", b6),
		d3.select(".social .embedLink")
		.on("click", b7),
		d3.select(".closeEmbed")
		.on("click", b8),
		d3.select(".twitter-share-button")
		.on("click", b9),
		d3.select(".social-likes__widget_facebook")
		.on("click", b10),
		d3.select("#wrapper .sidebar .buttons .prev")
		.on("click", c),
		d3.select("#wrapper .sidebar .buttons .eNext")
		.on("click", b),
		d3.select("#wrapper")
		.on("click", b11),
		a(f[0].copy)
    }, d
}();
var animdata = animdata || {};
animdata.main = function() {
    function a() {
        var a;
        window.onresize = function(c) {
			if (myWidth > 768) {
            clearTimeout(a), a = setTimeout(function() {
                b()
            }, 200)
			}
        }
    }

    function b() {

            var a = 1100,
                b = 900,
                c = window,
                d = document,
                e = d.documentElement,
                i = d.getElementsByTagName("body")[0],
                j = c.innerWidth || e.clientWidth || i.clientWidth;
            c.innerHeight || e.clientHeight || i.clientHeight
			myWidth = c.innerWidth;


        if (j > a && (j = a), g.wrapper.style("width", j + "px"), j > b) {
            var k = Math.floor(j) - 2 * h.containerPadding;

            g.chart.style("width", k + "px"), animdata.chart.updateWidth(k, animdata.data.data, f.uiState), g.sidebar.style("width", k + "px").style("position", "relative"), g.wrapper.classed("portrait", !1)
        } else {
            var l = j - 2 * h.containerPadding;
            g.chart.style("width", l + "px"), g.sidebar.style("width", l + "px").style("position", "static"), g.wrapper.classed("portrait", !0), animdata.chart.updateWidth(l, animdata.data.data, f.uiState)
        }
    }



    function c(a, b) {

		if (b === 'acquirer') {
		f.uiState[a] = b, f.uiState["direction"] = "reverse", f.uiState["orderBy"] = "cost", f.uiState["groupBy"] = "acquirer", "colorBy" === a && (f.uiState.sortBy = ''),  animdata.chart.update(animdata.data.data, f.uiState)
		}
		else if (b === '5-year') {
		f.uiState[a] = b, f.uiState["direction"] = "reverse", f.uiState["groupBy"] = "5-year", f.uiState["orderBy"] = "acquirer", "colorBy" === a && (f.uiState.sortBy = ''),  animdata.chart.update(animdata.data.data, f.uiState)
		}
		else if (b === 'costGroup') {
        f.uiState[a] = b, f.uiState["direction"] = "reverse", f.uiState["groupBy"] = "costGroup",f.uiState["orderBy"] = "acquirer", "colorBy" === a && (f.uiState.sortBy = ''),  animdata.chart.update(animdata.data.data, f.uiState)
		}
		else if (b === 'industry') {
        f.uiState[a] = b, f.uiState["direction"] = "reverse", "colorBy" === a && (f.uiState.sortBy = ''),  animdata.chart.update(animdata.data.data, f.uiState)
		}
		else if (b === 'ceo') {
        f.uiState[a] = b, f.uiState["direction"] = "reverse", "colorBy" === a && (f.uiState.sortBy = ''),  animdata.chart.update(animdata.data.data, f.uiState)
		}
		else {
			f.uiState["orderBy"] = "cost", f.uiState["direction"] = "", f.uiState[a] = b, "colorBy" === a && (f.uiState.sortBy = "cost"),  animdata.chart.update(animdata.data.data, f.uiState)
		}
    }
// data passed to new page if new variables required at page level add here and some parameters where story isn't active
    function d(a) {
        return a ? (f.uiState.groupBy = a.groupBy, f.uiState.colorBy = a.colorBy, f.uiState.change = a.change, f.uiState.highlighted = a.highlighted, f.uiState.highlighted2 = a.highlighted2, f.uiState.selected = a.selected,  f.uiState.sortBy = a.sortBy, f.uiState.orderBy = a.orderBy, f.uiState.direction = a.direction, animdata.chart.update(animdata.data.data, f.uiState), void animdata.menu.updateVisibility(!f.uiState.storyIsActive)) : (f.uiState.storyIsActive = !1, animdata.menu.updateVisibility(!f.uiState.storyIsActive), f.uiState.groupBy = "acquirer", f.uiState.colorBy = "acquirer", f.uiState.highlighted = "", f.uiState.highlighted2 = "", f.uiState.selected = "", f.uiState.change = "yes", void animdata.chart.update(animdata.data.data, f.uiState))
    }

    function e() {
        b()
    }
    var f = {};
    f.uiState = {
		//
        groupBy: "acquirer",
        colorBy: "acquirer",
		orderBy: "cost",
		direction: "reverse",
		selected: "yes",
		highlighted: "['none']",
		highlighted2: "['none']",
        storyIsActive: !0
    };
    var g = {},
        h = {
            containerPadding: 20
        };
    return f.go = function() {

        animdata.data.init(e), g.wrapper = d3.select("#wrapper"), g.chart = d3.select("#chart"), g.sidebar = g.wrapper.select(".sidebar"), animdata.chart.init(), animdata.story.init({
            newChapter: d
        }), animdata.menu.init({
            menuSelect: c
        }), a()
    }, f
}(),
animdata.main.go();
