var map, places,google,icon, infoWindow;
      var markers = [];
      var barsMarkers = [];
      var accomMarkers = [];
      var attractionsMarkers = [];
      var restaurantsMarkers = [];
      var hostnameRegexp = new RegExp('^https?://.+?/');
      var autocomplete;
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      
  
      
      var hostnameRegexp = new RegExp('^https?://.+?/');
      

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 54.5260, lng: 15.2551},
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });
        
infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
    
places = new google.maps.places.PlacesService(map);
autocomplete = new google.maps.places.Autocomplete(
  /** @type {!HTMLInputElement} */ (
  document.getElementById('input-destination')), {
  types: ['(cities)'],
    });
        
        
        
        
    autocomplete.addListener('place_changed', onPlaceChanged);
    document.getElementById('CheckBox').addEventListener(
      'change', );

      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          searchAccomodation();
          searchBars();
          searchAttractions();
          searchRestaurants();
        } else {
          document.getElementById('input-destination').placeholder = 'Enter a city';
        }
      }




//------------------------------------------ACOMODATION SEARCH -----------



function searchAccomodation(accomodation){
  var accomodation = {
      bounds: map.getBounds(),
      icon: 'assets/images/markers/m1.png' ,
      types: ["lodging"]
  };  
      
places.nearbySearch(accomodation, FindAccom );


  function FindAccom(results, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        clearResults();
        clearMarkers();
        for (var i = 0; i < results.length; i++) {
          var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
          var markerIcon = MARKER_PATH + markerLetter + '.png';
  
          accomMarkers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon,
            size: new google.maps.Size(2, 2),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 10),
            scaledSize: new google.maps.Size(5, 1)
          });
        
          accomMarkers[i].placeResult = results[i];
            google.maps.event.addListener(accomMarkers[i], 'click');
            setTimeout(dropMarker(i), i * 100);
            addResult(results[i], i);
        }
      };
    FindAccom();
  }
}





//---------------------------------------------BARS SEARCH------

function searchBars(bars){
  var bars = {
    bounds: map.getBounds(),
    icon: 'assets/images/markers/m2.png',
    types: ["bar"]
  };  

  places.nearbySearch(bars, FindBars );

  function FindBars(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      for (var i = 0; i < results.length; i++) {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';
        
                 
        barsMarkers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon,
          size: new google.maps.Size(2, 2),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 10),
          scaledSize: new google.maps.Size(5, 1)
        });
              
        barsMarkers[i].placeResult = results[i];
          google.maps.event.addListener(barsMarkers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);        
      }
    };
  }
  FindBars();
  
}


     
     
      
     

//--------------------------------------ATTRACTIONS SEARCH ----------------


function searchAttractions(attractions){
 var attractions = {
    bounds: map.getBounds(),
    icon: 'assets/images/markers/m3.png',
    types: ['food']   
  };    

  places.nearbySearch(attractions, FindAttractions );

  function FindAttractions(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      for (var i = 0; i < results.length; i++) {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';
                 
        attractionsMarkers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon,
          size: new google.maps.Size(0, 0),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 10),
          scaledSize: new google.maps.Size(5, 1)
        });
              
        attractionsMarkers[i].placeResult = results[i];
          google.maps.event.addListener(attractionsMarkers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i] ,i);        
      }
    }
  };
FindAttractions();
}


//-----------------------------------RESTAURANTS---------------------------


function searchRestaurants(restaurants){
 var restaurants = {
          bounds: map.getBounds(),
          icon: 'assets/images/markers/m1.png',
          types: ["restaurant"]
            
   };     

  places.nearbySearch(restaurants, FindRestaurants );

  function FindRestaurants(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();
      for (var i = 0; i < results.length; i++) {
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';
                 
        restaurantsMarkers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: markerIcon,
          size: new google.maps.Size(0, 0),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(5, 5),
          scaledSize: new google.maps.Size(1, 1)
        });
              
        restaurantsMarkers[i].placeResult = results[i];
          google.maps.event.addListener(restaurantsMarkers[i], 'click', showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);        
      }
    }
  };
FindRestaurants();
}


function clearMarkers() {
  for (var i = 0; i < markers.length; i++){
    if(markers[i]) {
      markers[i].setMap(null);
    }
    }
  markers = [];
} 



function dropMarker(i) {
  return function() {
    markers[i];
    barsMarkers[i].setMap(map);
    attractionsMarkers[i].setMap(map);
    accomMarkers[i].setMap(map);
  };
}

}

   function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';



        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click', showInfoWindow);
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);

        results.setAttribute("style", "color:black; padding: 10px;");


      }

        
       
       
        

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }
     

      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
             
              
              buildIWContent(place);
            });
      }

      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

    
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }    