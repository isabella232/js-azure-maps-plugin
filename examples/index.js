/* Copyright 2018 AirMap, Inc.

Licensed under the Apache License, Version 2.0 (the License);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an AS IS BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

const ContextualAirspacePlugin = require('../src/index.js').default
const AIRMAP_API_KEY = localStorage.getItem('AIRMAP_API_KEY')
const AZURE_ACCESS_TOKEN = localStorage.getItem('AZURE_ACCESS_TOKEN')

//if (AIRMAP_API_KEY && AZURE_ACCESS_TOKEN) {
    atlas.setSubscriptionKey(AZURE_ACCESS_TOKEN);
    //Initialize a map instance.
    const map = new atlas.Map("map", {
        center: [-118.496475, 34.024212],
        zoom: 14
    });

    const config = {
        "airmap": {
            "api_key": AIRMAP_API_KEY
        },
        "auth0": {
            "client_id": "",
            "callback_url": ""
        },
        "atlas": {
            "access_token": AZURE_ACCESS_TOKEN
        }
    }
    const options = {
        preferredRulesets: [
            'usa_part_107',
            'deu_rules_waiver'
        ],
        overrideRulesets: [
            // 'usa_part_107'
        ],
        enableRecommendedRulesets: true,
        theme: 'light',
        // Specific options for development purposes only
        baseJurisdictionSourceUrl: localStorage.getItem('BASE_JURISDICTION_SOURCE_URL'),
        mapStylesUrl: localStorage.getItem('MAP_STYLES_URL'),
        mapStylesVersion: localStorage.getItem('MAP_STYLES_VERSION'),
        rulesetSourceUrl: localStorage.getItem('RULESET_SOURCE_URL'),
        ruleApiUrl: localStorage.getItem('RULE_API_URL'),
    }
    const plugin = new ContextualAirspacePlugin(config, options, atlas)
    //Wait until the map resources have fully loaded.
    map.events.add('load', function () {
        //Add the zoom control to the map.

        map.controls.add(new atlas.control.ZoomControl(), {
            position: 'top-right'
        });
        map.controls.add(plugin, 'bottom-right')

       // map.controls.add(plugin, 'bottom-left')

    });

    // Example for how ruleset changes are surfaced to the consuming application.
    plugin.on('jurisdictionChange', (data) => console.log('jurisdictionChange', data))
    plugin.on('airspaceLayerClick', (data) => console.log('airspaceLayerClick', data))

    setTimeout(() => {
        console.log({
            jurisdictions: plugin.getJurisdictions(),
            selectedRulelsets: plugin.getSelectedRulesets()
        })
        plugin.updateRulesets(['usa_sec_333'], [], false);
    }, 5000)
/*} else {
    console.error(
        'Missing AIRMAP_API_KEY or MAPBOX_ACCESS_TOKEN. ' +
        'These are required for developing locally.\n\n' +
        'Please save these values in localStorage by entering the following in your browser console:\n\n' +
        'localStorage.setItem(\'AIRMAP_API_KEY\', \'<your_key>\');\n' +
        'localStorage.setItem(\'MAPBOX_ACCESS_TOKEN\', \'<your_token>\');\n\n'
    );
}*/
