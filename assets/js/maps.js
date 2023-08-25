    <script>
        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: {
                    lat: 36.619261,
                    lng: -33.134766
                }
            });
        
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var locations = [
                {lat: 40.785, lng: -73.968},
                {lat: 41.084, lng: -73.874},
                {lat: 40.754, lng: -73.984016}
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerClusterer = MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
    </script>