function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 47.610607 , lng: -122.161170},
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

       var locations = [ 
          ['Sammamish High School: 100 140th AVE SE Bellevue, WA 98008', 47.608559, -122.151066],
          ['Crossroads Bellevue: 15600 NE 8th ST, Bellevue, WA 98008', 47.618613, -122.130604],
          ['Starbucks: 3181 156th AVE SE, Bellevue, WA 98007', 47.581928, -122.134958],
          ['My Home: 2904 168th AVE SE, Bellevue, WA 98008', 47.583769, -122.116098],
          ['Bellevue Square: 575 Bellevue Way NE, Bellevue, WA 98004', 47.615645, -122.203725],
          ['Taco Bell: 1960 148th Ave NE, Redmond, WA', 47.627482, -122.142689],
          ['Seattle Humane Society: 13212 SE Eastgate Way, Bellevue, WA 98005', 47.581128, -122.163611]
        ];
    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
        position: {lat: locations[i][1], lng: locations[i][2]},
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
     }
    }