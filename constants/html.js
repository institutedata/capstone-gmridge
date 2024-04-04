const HTML = {
    MAPS: `<!DOCTYPE html>
    <html>
      <head>
        <title>Locator</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
          html,
          body {
            height: 100%;
            margin: 0;
          }
    
          gmpx-store-locator {
            width: 100%;
            height: 100%;
    
            /* These parameters customize the appearance of Locator Plus. See the documentation at
               https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
               for more information. */
            --gmpx-color-surface: #fff;
            --gmpx-color-on-surface: #212121;
            --gmpx-color-on-surface-variant: #757575;
            --gmpx-color-primary: #1967d2;
            --gmpx-color-outline: #e0e0e0;
            --gmpx-fixed-panel-width-row-layout: 28.5em;
            --gmpx-fixed-panel-height-column-layout: 65%;
            --gmpx-font-family-base: "Roboto", sans-serif;
            --gmpx-font-family-headings: "Roboto", sans-serif;
            --gmpx-font-size-base: 0.875rem;
            --gmpx-hours-color-open: #188038;
            --gmpx-hours-color-closed: #d50000;
            --gmpx-rating-color: #ffb300;
            --gmpx-rating-color-empty: #e0e0e0;
          }
        </style>
        <script>
          const CONFIGURATION = {
            "locations": [
              {"title":"170 East Coast Road","address1":"170 East Coast Road","address2":"Forrest Hill, Auckland 0620, New Zealand","coords":{"lat":-36.761551596527134,"lng":174.75638572209016},"placeId":"ChIJWwPEQPI5DW0RAv7oIAmAQEk"},
              {"title":"17 Norwood Road","address1":"17 Norwood Road","address2":"Bayswater, Auckland 0622, New Zealand","coords":{"lat":-36.81701343106879,"lng":174.77139205092624},"placeId":"ChIJVVYJMCA4DW0RJHQp7TYdwTg"}
            ],
            "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
            "mapsApiKey": "AIzaSyDNqJM9LxYXG1S6YyHWOPJcRFYgtwgZTvg",
            "capabilities": {"input":true,"autocomplete":true,"directions":true,"distanceMatrix":true,"details":true,"actions":false}
          };
    
        </script>
        <script type="module">
          document.addEventListener('DOMContentLoaded', async () => {
            await customElements.whenDefined('gmpx-store-locator');
            const locator = document.querySelector('gmpx-store-locator');
            locator.configureFromQuickBuilder(CONFIGURATION);
    
            
          });
        </script>
      </head>
      <body>
        <!-- Please note unpkg.com is unaffiliated with Google Maps Platform. -->
        <script type="module" src="https://unpkg.com/@googlemaps/extended-component-library@0.6"></script>
    
        <!-- Uses components from the Extended Component Library; see
             https://github.com/googlemaps/extended-component-library for more information
             on these HTML tags and how to configure them. -->
        <gmpx-api-loader key="AIzaSyDNqJM9LxYXG1S6YyHWOPJcRFYgtwgZTvg" solution-channel="GMP_QB_locatorplus_v10_cABCDE"></gmpx-api-loader>
        <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
      </body>
    </html>
    
    `
}


module.exports = HTML;