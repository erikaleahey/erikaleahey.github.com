$(function() {
  
var i = 0;
     var mapOptions = {
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
 
 
    var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      
   
   
   var myHeatmapData = [];

      var i =0;
        while(i < potholes.length) {
        var row = potholes[i];
        
        var Lat = row.LATITUDE;
        var Lng = row.LONGITUDE;

        myHeatmapData.push(
          new google.maps.LatLng(Lat,Lng)  
        )
  
        i++;      
      }
      
  
   var heatmap = new google.maps.visualization.HeatmapLayer({
   data: myHeatmapData,
     radius: 50
      });
      
      
      heatmap.setMap(myMap);

    });
      
      
      
      
    /*  while (i < potholes.length) {
      var location = potholes[i]

        var Lat = location.LATITUDE;
        var Lng = location.LONGITUDE;
      
      // Add in a marker:
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Lat,Lng),
        title: "MassArt",
        map: myMap
      });


         i++;
    } */


    
    
    

    



    
    




