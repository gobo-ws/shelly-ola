**Shelly to OLA DMX**  
Shelly Gen2 (ESP32) mJS script for sending DMX values via push button or switches to OLA.  
Tested with Shelly Plus 1.  

![Shelly to OLA](https://github.com/gobo-ws/shelly-ola/blob/main/shelly-to-ola.gif?raw=true)  

**Requirements**  

* [Shelly Gen2 (ESP32) device](https://shelly.cloud/)
* Some push button or switch
* [OLA](https://www.openlighting.org/ola/)

**Installation & usage**  

* Download [shelly-ola.js](shelly-ola.js) and edit the configuration section.  
* Copy the code and open the Shelly web interface, go to the scripts menu, click on Add script,  
enter some name and click on Save. Paste the code and click on the "Save and Run" button.  
More information can be found [here](https://shelly-api-docs.shelly.cloud/gen2/Scripts/Tutorial/)
* Push the physical button and hopefully you have sent some DMX values to OLA.
