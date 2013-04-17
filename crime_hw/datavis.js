
$(function() {
    $("<h1>").text("BOSTON CRIME STATS")
			.appendTo("body");
	$("<h2>").text("KEY")
			.appendTo("body");
	$("<li>").text("Total Incidents")
	        .addClass("incidentli")
			.appendTo("h2");
    $("<li>").text("Domestic Incidents")
	        .addClass("domesticli")
			.appendTo("h2");
    $("<p>").text("")
							.appendTo("body");

  
  
});

$(function() {

    var i = 0;
    while(i < data.length) {
      var info = data[i];
      var neighborhood = info.name;
      var total = parseInt(info.incidents);
      var domestic = parseInt(info.domestic);
      
      
      
      var maxIncidents = 10651;
      var incFraction = total / maxIncidents; 
      
      var maxDomestic = 2840;  
      var domFraction = domestic / maxDomestic; 
      
      
      
      var incidentWidth = incFraction * 2000;     
      var domWidth = domFraction * 200; 
      
      
      
      var row = $("<div>").addClass("row");
      
      
	  var neighborhoodDiv = $("<div>")
	        .addClass("name")
      		.text(neighborhood + " ")
      		.appendTo(row);
 
      var totalDiv = $("<div>")
      		.addClass("incidents")
      		.text(total)
      		.css({width:incidentWidth })
    		.appendTo(row);
      
        var domDiv = $("<div>")
      		.addClass("domestic")
      		.text(domestic)
      		.css({width:domWidth })
    		.appendTo(row);
      		
      $("p").append(row);
 
      i++;
    }
    
});

