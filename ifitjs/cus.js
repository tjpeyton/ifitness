
function initMap() {
        var myLatlng = {lat: 43.017486, lng: -78.696553};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });

        map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(14);
          map.setCenter(marker.getPosition());
        });

        var contentString = '6221 Transit Rd.'+'</br>'+
                            'East Amherst, NY '+'</br>'+
                            '14051'

        var infowindow = new google.maps.InfoWindow({
                content: contentString
              });

        marker.addListener('click', function() {
             infowindow.open(map, marker);
           });


      }
