---
title: This is Eldros
---

<div id="map" style="width: 100%; height: 600px; z-index: 0;"></div>

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

<script>
    var map = L.map('map', {
        crs: L.CRS.Simple,  // Use a simple CRS since we're not using a real map
        minZoom: -1.5,  // Allows zooming out to see the whole image
		maxZoom: 19,
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

	
    //Markericons:

	var DynastyIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Dynastyicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var NationIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Nationicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var CountryIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Countryicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var CityIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Cityicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var AußenIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Außenbereichicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var ContinentIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/continenticon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var IslandIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Islandicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	var WildIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Wildnissicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [15, 30],
	    popupAnchor: [-3, -38]
	});
	
	
	//Marker
	//Dynasties
    L.marker([957.32, 546.65], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Valoria');

    L.marker([612.11, 787.07], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Tharradur');
		
    L.marker([772.94, 990.14], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Stormhall');
		
    L.marker([1142.51, 1504.29], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Aetheria');
		
    L.marker([353.00, 1489.67], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Elarian');
		
    L.marker([514.64, 1916.92], { icon: DynastyIcon }).addTo(map)
        .bindPopup('Arvendell');
		
	//Größere Länder
    L.marker([1574.63, 830.12], { icon: NationIcon }).addTo(map)
        .bindPopup('Aurora');
		
    L.marker([1162.82, 864.24], { icon: NationIcon }).addTo(map)
        .bindPopup('Faelan');
		
    L.marker([1056.42, 908.10], { icon: NationIcon }).addTo(map)
        .bindPopup('Altrea');
		
    L.marker([724.30, 850.50], { icon: NationIcon }).addTo(map)
        .bindPopup('Marundar');
		
    L.marker([595.80, 883.00], { icon: NationIcon }).addTo(map)
        .bindPopup('Nebelheim');
		
    L.marker([837.17, 1521.45], { icon: NationIcon }).addTo(map)
        .bindPopup('Zalira');
		
    L.marker([1024.77, 1673.56], { icon: NationIcon }).addTo(map)
        .bindPopup('Silvershore');

</script>
