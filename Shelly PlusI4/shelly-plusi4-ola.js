// Shelly PlusI4 - Control 4 switches (switch mode)
// Copyright (C) 2023 Johan Nilsson. https://gobo.ws

// Configuration
let CONFIG = {
    hostname: '192.168.0.1:9090', // OLA hostname:port
    universe: '1', // OLA universe

    // Switch 1
    dmxOn1: '255,255,255,255,100,100', // OLA DMX data when switch 1 is on
    dmxOff1: '0,0,0,0,0,0', // OLA DMX data when switch 1 is off

    // Switch 2
    dmxOn2: '255,255,255,255,100,100', // OLA DMX data when switch 2 is on
    dmxOff2: '0,0,0,0,0,0', // OLA DMX data when switch 2 is off

    // Switch 3
    dmxOn3: '255,255,255,255,100,100', // OLA DMX data when switch 3 is on
    dmxOff3: '0,0,0,0,0,0', // OLA DMX data when switch 3 is off

    // Switch 4
    dmxOn4: '255,255,255,255,100,100', // OLA DMX data when switch 4 is on
    dmxOff4: '0,0,0,0,0,0', // OLA DMX data when switch 4 is off
};

print("Shelly to OLA DMX running");

Shelly.addEventHandler(function (event) {
    if (event.name === 'input' && event.id === 0) {
        // Check if the input state is "on"
        if (event.info.state === true) {
            // Send DMX data to OLA when switch 1 is turned "on"
            print('Sending ' + CONFIG.dmxOn1 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOn1
                },
            );
        } else {
            // Send DMX data to OLA when switch 1 is turned "off"
            print('Sending ' + CONFIG.dmxOff1 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOff1
                },
            );
        }
    } else if (event.name === 'input' && event.id === 1) {
        // Check if the input state is "on"
        if (event.info.state === true) {
            // Send DMX data to OLA when switch 2 is turned "on"
            print('Sending ' + CONFIG.dmxOn2 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOn2
                },
            );
        } else {
            // Send DMX data to OLA when switch 2 is turned "off"
            print('Sending ' + CONFIG.dmxOff2 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOff2
                },
            );
        }
    } else if (event.name === 'input' && event.id === 2) {
        // Check if the input state is "on"
        if (event.info.state === true) {
            // Send DMX data to OLA when switch 3 is turned "on"
            print('Sending ' + CONFIG.dmxOn3 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOn3
                },
            );
        } else {
            // Send DMX data to OLA when switch 3 is turned "off"
            print('Sending ' + CONFIG.dmxOff3 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOff3
                },
            );
        }
    } else if (event.name === 'input' && event.id === 3) {
        // Check if the input state is "on"
        if (event.info.state === true) {
            // Send DMX data to OLA when switch 4 is turned "on"
            print('Sending ' + CONFIG.dmxOn4 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOn4
                },
            );
        } else {
            // Send DMX data to OLA when switch 4 is turned "off"
            print('Sending ' + CONFIG.dmxOff4 + ' on universe ' + CONFIG.universe);
            Shelly.call(
                "http.request",
                {
                    method: "POST",
                    url: 'http://' + CONFIG.hostname + '/set_dmx',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body: 'u=' + CONFIG.universe + '&d=' + CONFIG.dmxOff4
                },
            );
        }
    }
});
