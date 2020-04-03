#include<ArduinoJson.h>

int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  Serial.println("Arduino ON");
  //serializeJsonPretty(doc, Serial);
}

void loop() {
  if(Serial.available()){
    
    char value = Serial.read();
    switch (value){
      case '1':
      digitalWrite(ledPin, HIGH);
      Serial.println("Ligado");
      break;
      case '2':
      digitalWrite(ledPin, LOW);
      Serial.println("Desligado");
      break;
    }
   
  }
  unsigned currentMillis = millis();
  while(!Serial) continue;
  StaticJsonDocument<200> doc;
  doc["Temp"] = 29;
  doc["Humidity"] = 80;
  JsonArray data = doc.createNestedArray("data");
  data.add(48.00654);
  data.add(2.654964);
  serializeJson(doc, Serial);
  Serial.println();
  delay(1000);

}
