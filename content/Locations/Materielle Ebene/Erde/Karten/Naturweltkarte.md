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

    var imageUrl = '/00Imagefolder/Naturweltmap.png';  // Path to your image
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
	var BergeIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var FlüsseIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Flüsse.png',
	    iconSize: [20, 20],
	    iconAnchor: [10, 10],
	    popupAnchor: [-3, -38]
	});
	var InselnIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Inseln.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var KontinentIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Kontinent.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var LakeIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Lake.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var MischwaldIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var OceanIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var RegenwaldIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var SavanneIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	var WüsteIcon = new L.Icon({
	    iconUrl: '/00Imagefolder/IconsMap/Berge.png',
	    iconSize: [30, 30],
	    iconAnchor: [15, 15],
	    popupAnchor: [-3, -38]
	});
	
//Marker
//Berge
	L.marker([1073.89, 147.02], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Vulkan - Dachenfels');
	L.marker([1204.24, 550.96], { icon: BergeIcon }).addTo(map)
        .bindPopup('Vulkan - Surtur Feuer');
    L.marker([1068.58, 557.03], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Vulkan - Sekolah Rot');
	    
    L.marker([870.73, 153.52], { icon: BergeIcon }).addTo(map)
        .bindPopup('Kurtulmak Bergkette');
	L.marker([1014.30, 209.06], { icon: BergeIcon }).addTo(map)
        .bindPopup('Skerrit Höhe');
    L.marker([868.42, 357.25], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Basilor Höhe');
	L.marker([827.06, 429.61], { icon: BergeIcon }).addTo(map)
        .bindPopup('Silberhöhe');
	L.marker([750.10, 384.81], { icon: BergeIcon }).addTo(map)
        .bindPopup('Basilor Gebirge');
        
    L.marker([1409.45, 908.62], { icon: BergeIcon }).addTo(map)
        .bindPopup('Ladyre Felsmassiv');
	L.marker([1420.94, 830.51], { icon: BergeIcon }).addTo(map)
        .bindPopup('Skoraeus Felsen');
    L.marker([1400.26, 754.69], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Bahamut Berg');
	L.marker([1360.00, 890.50], { icon: BergeIcon }).addTo(map)
        .bindPopup('Tiamat Höhe');
    L.marker([1351.50, 853.50], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Vulkan - Drachenhorn');
	L.marker([1311.50, 736.00], { icon: BergeIcon }).addTo(map)
        .bindPopup('Maglubiyet Höhe');
	L.marker([1257.50, 787.00], { icon: BergeIcon }).addTo(map)
        .bindPopup('Corellon Höhe');
    L.marker([1259.00, 920.00], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Grolantor Hügel');
	L.marker([1348.00, 965.00], { icon: BergeIcon }).addTo(map)
        .bindPopup('Hruggek Berg');
        
	L.marker([823.69, 752.71], { icon: BergeIcon }).addTo(map)
        .bindPopup('Gruumsher Berg');
    L.marker([701.50, 613.50], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Moradin Höhenzug');
    L.marker([533.00, 689.50], { icon: BergeIcon }).addTo(map)
        .bindPopup('Moradin Felse');
        
	L.marker([1402.52, 1076.32], { icon: BergeIcon }).addTo(map)
        .bindPopup('Aetheria Hochland');
        
    L.marker([1034.50, 1068.50], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Drachenrücken');
	    
	L.marker([754.08, 1252.12], { icon: BergeIcon }).addTo(map)
        .bindPopup('Galathar Bergkette');
	L.marker([717.00, 1363.50], { icon: BergeIcon }).addTo(map)
        .bindPopup('Hektor Fels');
        
    L.marker([379.63, 1397.44], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Elarian Gigant');
	    
	L.marker([529.00, 1930.00], { icon: BergeIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Flüsse
	L.marker([1154.30, 177.91], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Drachenzunge');
	L.marker([1044.44, 279.20], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Onar');
	L.marker([1000.50, 287.77], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Bo');
	L.marker([946.38, 341.36], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Cajo');
	L.marker([1062.13, 375.66], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Bo');

	L.marker([1347.00, 809.50], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Aschestrom');
	L.marker([1265.50, 748.00], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Zwillingsfluss');
	L.marker([1273.50, 802.50], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Geschwisterfluss');
	L.marker([1198.00, 836.00], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Mutterstrom');
	L.marker([1264.50, 884.00], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Glittergold Gewässer');
	    
	L.marker([936.91, 819.60], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Kekelins Flusslauf');
	L.marker([711.04, 746.94], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Cappuccina Wasserstraße');
	L.marker([783.99, 806.10], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Cappuchina Wasserlauf');

	L.marker([815.89, 1342.13], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Apollorstrom');
	L.marker([759.26, 1356.76], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Galathar Lauf');
	L.marker([920.39, 1516.02], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Zalyra Lauf');
	L.marker([800.27, 1450.98], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Unterer Zalira Wasserlauf');
	L.marker([846.23, 1494.82], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Oberer Zalyra Wasserlauf');
	L.marker([630.74, 1259.60], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Remiliastrom');

	L.marker([465.95, 1348.29], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Orta Elarduin');
	L.marker([401.65, 1425.46], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Elariaelin Fluss');
	L.marker([334.66, 1362.22], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Undu Elarduin');
	L.marker([324.21, 1400.27], { icon: FlüsseIcon }).addTo(map)
	    .bindPopup('Elariaelin Lauf');
//Inseln
	L.marker([1495.12, 686.47], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Thrym Insel');
	L.marker([1342.40, 563.22], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Parathor Insel');
	L.marker([1206.12, 1188.93], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Rabenklippe');
	L.marker([375.84, 1135.09], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Askira Inseln');
	L.marker([449.76, 1295.91], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Tolelarian');
	L.marker([1199.70, 1529.47], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Aetheria Insel');
	L.marker([494.66, 1828.38], { icon: InselnIcon }).addTo(map)
	    .bindPopup('Arvendelltol');
//Kontinente
	L.marker([1665.74, 1271.77], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Der Kalte Norden');
	L.marker([1127.73, 424.74], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Intrialus');
	L.marker([1202.83, 652.51], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Altioremtria');
	L.marker([1393.66, 1146.20], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Patrianguli');
	L.marker([893.81, 652.51], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Altiustria');
	L.marker([814.69, 1696.80], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Ingentis');
	L.marker([87.41, 1024.31], { icon: KontinentIcon }).addTo(map)
	    .bindPopup('Der Kalte Süden');
//Lake
	L.marker([529.00, 1930.00], { icon: LakeIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Mischwald
	L.marker([529.00, 1930.00], { icon: MischwaldIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Oceane
	L.marker([529.00, 1930.00], { icon: OceanIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Regenwald
	L.marker([529.00, 1930.00], { icon: RegenwaldIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Savanne
	L.marker([529.00, 1930.00], { icon: SavanneIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
//Wüsten
	L.marker([529.00, 1930.00], { icon: WüsteIcon }).addTo(map)
	    .bindPopup('Arvendellischer Gebirgszug');
	    
</script>