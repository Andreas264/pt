
const pointsOfInterest = [
    { name: 'Park', lat: 40.7128, lng: -74.0060 },
    { name: 'Múzeum', lat: 40.7291, lng: -73.9965 },
  
];

//Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12
    });


    for (const poi of pointsOfInterest) {
        const marker = new google.maps.Marker({
            position: { lat: poi.lat, lng: poi.lng },
            map: map,
            title: poi.name
        });

        marker.addListener('click', () => {
            // ľavá strana
            displayPOIInfo(poi);
        });
    }
}

// Funkcia na zobrazenie info
function displayPOIInfo(poi) {
    const poiList = document.getElementById('poi-list');
    poiList.innerHTML = `<h2>${poi.name}</h2>`;

}

// mapa
window.onload = function () {
    initMap();
};
