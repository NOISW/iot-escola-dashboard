
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid="SEU_WIFI";
const char* password="SENHA";

const char* server="http://SEU_SERVIDOR/backend/api/cadastrar.php";

void setup(){

Serial.begin(115200);
WiFi.begin(ssid,password);

while(WiFi.status()!=WL_CONNECTED){

delay(500);
Serial.println("Conectando...");

}

}

void loop(){

if(WiFi.status()==WL_CONNECTED){

HTTPClient http;

http.begin(server);

http.addHeader("Content-Type","application/json");

String json="{\"temperatura\":26,\"umidade\":60,\"ar\":300,\"luz\":500}";

http.POST(json);

http.end();

}

delay(10000);

}
