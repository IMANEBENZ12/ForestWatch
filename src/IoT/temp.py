import json  

import Adafruit_DHT  # DHT11 sensor library  

import cgi  

import cgitb  

# Enable detailed error reporting in the browser for easier debugging  

cgitb.enable()  

# Set the sensor type and GPIO pin  

sensor = Adafruit_DHT.DHT11  

pin = 17  # Replace with the actual GPIO pin you’re using for the sensor  

# Read the temperature and humidity from the DHT11 sensor  

humidity, temperature = Adafruit_DHT.read(sensor, pin)  

# Prepare the data dictionary with temperature and humidity values  

data = {  

 

    "temperature": temperature if temperature is not None else "Error",  

 

    "humidity": humidity if humidity is not None else "Error"  

 

}  

# Set the HTTP header to specify JSON content  

print("Content-Type: application/json\n")  

# Output the JSON-formatted data to be fetched by the webpage  

print(json.dumps(data)) 