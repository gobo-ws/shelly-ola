// Shelly to OLA DMX
// Copyright (C) 2022 Johan Nilsson. https://gobo.ws
// Thanks to eurich - https://github.com/eurich for help with the code

// Configuration
let CONFIG = {
    hostname: '192.168.0.1:9090', // OLA hostname:port
    universe: '1', // OLA universe
    dmx: '255,255,255,255,100,100', // OLA DMX data
    input1: 0, // Shelly Button ID

};

print("Shelly to OLA DMX running"); 

Shelly.addEventHandler(
    function (event) {
        if (typeof event.info.event !== 'undefined') {
            if (event.info.event === 'single_push' && event.info.id === CONFIG.input1) {
            // Possible events: single_push, double_push, long_push, btn_up, btn_down
                print('Sending ' + CONFIG.dmx + ' on universe ' + CONFIG.universe);
                Shelly.call(
                    "http.request", {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmx
                },
                );
            }
        } else {
            return true;
        }
    },
);
