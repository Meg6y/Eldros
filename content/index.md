---
title: This is Eldros
---

<div id="map" style="width: 100%; height: 600px; z-index: 1;"></div>

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>>

<script>
    var map = L.map('map', {
        crs: L.CRS.Simple,  // Use a simple CRS since we're not using a real map
        minZoom: -1.5,  // Allows zooming out to see the whole image
        zoomSnap: 0.1,  // Smoother zoom steps
        zoomDelta: 0.25,  // Smaller zoom increments
        zoomAnimation: true  // Enable smooth zoom transitions
    }).setView([0, 0], 0);

    var imageUrl = '/Imagefolder/NaturmitGrenzen.png';  // Path to your image
    var imageBounds = [[0, 0], [1800, 2400]];  // Adjust these bounds as needed

    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    map.fitBounds(imageBounds);  // Zooms and pans the map to fit the image exactly

    // Add a click event to the map
    map.on('click', function(e) {
        var latlng = e.latlng; // Get the latitude and longitude of the click
        var popupContent = `Coordinates: ${latlng.lat.toFixed(2)}, ${latlng.lng.toFixed(2)}`;
        
        // Create a popup at the click location
        L.popup()
            .setLatLng(latlng) // Set the position of the popup
            .setContent(popupContent) // Set the content of the popup
            .openOn(map); // Open the popup on the map
    });

	
    //Marker:
	var customIcon = L.icon({
	    iconUrl: '/Imagefolder/Apollor.png',
	    iconSize: [38, 38],
	    iconAnchor: [22, 38],
	    popupAnchor: [-3, -38]
	});

    L.marker([1200, 700], { icon: customIcon }).addTo(map)
        .bindPopup('This is a simple text popup');

    // Add another marker with simple text popup
    L.marker([1200, 600], { icon: customIcon }).addTo(map)
        .bindPopup('Another simple text message');


</script>
