---
title: This is Eldros
---

Gesammtüberblick Länder: [[0All - Erde - public]]

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
	    iconSize: [60, 60],
	    iconAnchor: [30, 30],
	    popupAnchor: [-3, -38]
	});
	
	var NationIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Nationicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [25, 25],
	    popupAnchor: [-3, -38]
	});
	
	var CountryIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Countryicon.png',
	    iconSize: [40, 40],
	    iconAnchor: [20, 20],
	    popupAnchor: [-3, -38]
	});
	
	var CityIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Cityicon.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	
	var AußenIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Außenbereichicon.png',
	    iconSize: [20, 20],
	    iconAnchor: [10, 10],
	    popupAnchor: [-3, -38]
	});
	
	var ContinentIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/continenticon.png',
	    iconSize: [50, 50],
	    iconAnchor: [25, 25],
	    popupAnchor: [-3, -38]
	});
	
	var IslandIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Islandicon.png',
	    iconSize: [50, 50],
	    iconAnchor: [25, 25],
	    popupAnchor: [-3, -38]
	});
	
	var WildIcon = L.icon({
	    iconUrl: '/Imagefolder/IconsMap/Wildnissicon.png',
	    iconSize: [35, 35],
	    iconAnchor: [17, 17],
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


	//Kleinere Länder
	L.marker([843.61, 545.02], { icon: CountryIcon }).addTo(map)
        .bindPopup('Silberfels');
		
	L.marker([1234.30, 904.04], { icon: CountryIcon }).addTo(map)
        .bindPopup('Elvaria');
		
	L.marker([1131.58, 1011.16], { icon: CountryIcon }).addTo(map)
        .bindPopup('Shadowfen');
		
	L.marker([916.98, 974.04], { icon: CountryIcon }).addTo(map)
        .bindPopup('Bellagrim');
		
	L.marker([796.41, 865.85], { icon: CountryIcon }).addTo(map)
        .bindPopup('Thornwood');
		
	L.marker([673.02, 981.82], { icon: CountryIcon }).addTo(map)
        .bindPopup('Silverdale');
		
	L.marker([1184.10, 1283.98], { icon: CountryIcon }).addTo(map)
        .bindPopup('Rabenklippe');
		
	L.marker([953.26, 1633.44], { icon: CountryIcon }).addTo(map)
        .bindPopup('Aeloria');
		
	L.marker([901.28, 1503.48], { icon: CountryIcon }).addTo(map)
        .bindPopup('Mondhafen');
		
	L.marker([808.68, 1438.50], { icon: CountryIcon }).addTo(map)
        .bindPopup('Orden von Luminara');
		
	L.marker([795.68, 1344.28], { icon: CountryIcon }).addTo(map)
        .bindPopup('Galathar');
		
	L.marker([753.45, 1386.51], { icon: CountryIcon }).addTo(map)
        .bindPopup('Winterheim');
		
	L.marker([586.12, 1336.97], { icon: CountryIcon }).addTo(map)
        .bindPopup('Emeraldia');
		
		
	//Cities
	L.marker([1347.54, 705.23], { icon: CityIcon }).addTo(map)
        .bindPopup('Parathor');
		
	L.marker([1220.00, 1107.14], { icon: CityIcon }).addTo(map)
        .bindPopup('Seraphel');
		
	L.marker([891.50, 759.35], { icon: CityIcon }).addTo(map)
        .bindPopup('Brückenstadt Aran');
		
	L.marker([1005.65, 1441.41], { icon: CityIcon }).addTo(map)
        .bindPopup('Talongarde');

	L.marker([817.02, 1492.85], { icon: CityIcon }).addTo(map)
        .bindPopup('Rivermark');
		
	L.marker([781.11, 1307.44], { icon: CityIcon }).addTo(map)
        .bindPopup('Drakenhavn');
		
	L.marker([681.97, 1100.05], { icon: CityIcon }).addTo(map)
        .bindPopup('Wucodon');
		
	L.marker([687.87, 1414.08], { icon: CityIcon }).addTo(map)
        .bindPopup('Feuerwacht');
		
		
	//Außenbereiche
	L.marker([872.73, 325.87], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Valoria');
		
	L.marker([986.45, 428.22], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Valoria');
		
	L.marker([824.00, 482.64], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Tharradur');
		
	L.marker([743.59, 915.57], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Marundar');
		
	L.marker([606.43, 966.58], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Nebelheim');
		
	L.marker([971.13, 981.20], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([1123.83, 948.71], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([933.77, 938.15], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([818.08, 847.77], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([710.37, 899.22], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([768.78, 1177.34], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Stormhall');
		
	L.marker([1304.85, 728.00], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Faelan');
		
	L.marker([1136.72, 1045.59], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Altrea');
		
	L.marker([1464.05, 1039.09], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Aurora');
		
	L.marker([1486.80, 790.54], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Aurora');
		
	L.marker([1373.89, 1221.85], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Aetheria');
		
	L.marker([1265.86, 1588.17], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Shadowfen');
		
	L.marker([1224.44, 1623.10], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Aetheria');
		
	L.marker([1136.72, 1045.59], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Altrea');
		
	L.marker([1110.72, 1625.53], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Silvershore');
		
	L.marker([990.62, 1799.14], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Silvershore');
		
	L.marker([1081.60, 1449.06], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Silvershore');
		
	L.marker([869.60, 1730.10], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Silvershore');
		
	L.marker([779.44, 1858.43], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Silvershore');
		
	L.marker([893.96, 1582.27], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Zalira');
		
	L.marker([439.03, 1212.68], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Shadowfen');
		
	L.marker([666.79, 1650.96], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Elarian');
		
	L.marker([388.55, 1265.62], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Elarian');
		
	L.marker([498.12, 1694.05], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Arvendell');
		
	L.marker([754.20, 1982.14], { icon: AußenIcon }).addTo(map)
        .bindPopup('Gehört zu: Arvendell');
		
</script>


Verwendete Bücher:
	- Players Handbook
	- Dungeon Masters Guide
	- Monster Manual
	- Tashas Cauldron of Everything
	- Volos Guide to Monsters
	- Xanathars Guide to Everything
	- Mordenkainen presents Monster of the Multiverse