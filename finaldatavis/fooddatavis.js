$(function() {
      var mapOptions = {
        center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);
      
      var infowindow = new google.maps.InfoWindow({
            maxWidth: 200
            });

      var layer = new google.maps.FusionTablesLayer({
        query: {
          select: 'LOCATION',
          from: '1MQu0tdPhwDP1JAvJmb8l4y3Opo4fMSDnEopSHMY'
        },
        styles: [
          {
            markerOptions: {
              iconName: "caution",
            },
          },
        ],
        heatmap: {
         // enabled: true
        }
        
        
      });
      layer.setMap(myMap);
      
    
            
        });﻿

      


    
    
    

    



    
    




