
$(function() {
    $("<h1>").text("BOSTON CRIME STATS")
			.appendTo("body");
  $("<p>").text("")
							.appendTo("body");

  


   var i = 0;
   var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    while(i < 100) { //crimes.data.length// {
      var crime = crimes.data[i];
   
      var x = parseFloat(crime[34],10);
      var y = parseFloat(crime[35],10);
      
      if(x < minX) { minX = x; }
      if(x > maxX) { maxX = x; }
      
      if(y < minY) { minY = y; }
      if(y > maxY) { maxY = y; }
    
      
         i++;
    }



    var i = 0;
    while(i < 100) { //crimes.data.length// {
      var crime = crimes.data[i];
      var neighborhood = crime[22];
      var crimeCode = crime[42];
      var x = parseFloat(crime[34],10);
      var y = parseFloat(crime[35],10);
      
      
      var diffX = maxX - minX;
      var screenX =  (x - minX) / diffX * 500;
      
      var diffY = maxY - minY;
      var screenY =  (y - minY) / diffY * 500;
    
      
      
    var div = $("<div>")
        .css({
             top: screenY,
             left: screenX,
             backgroundColor:"coral",
             width:"5",
             height:"5", 
             position:"absolute"
             })
        .attr("title", neighborhood + crimeCode);
             
    $("body").append(div);
      
      
   /*   var row = $("<div>").addClass("row"); */
      
      
	 /*   var crimeCode = $("<div>")
	        .addClass("crimeCode")
      		.text(crimeCode)
      		.appendTo(row); */
 
      /*   var x = $("<div>")
      		.addClass("xAxis")
      		.text(x)
    		.appendTo(row); */
      
        /*   var y = $("<div>")
      		.addClass("yAxis")
      		.text(y)
    		.appendTo(row); */
      		
       /*  $("p").append(row); */
 
      i++;
    }
    
});

