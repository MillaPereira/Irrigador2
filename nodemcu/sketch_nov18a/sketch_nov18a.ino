#include <stdint.h>
#include <ESP8266WiFi.h>
#include <WebSocketsClient.h>

#define pinBomba 13
// -------------- Variaveis ------------------------

const int ID = 1;
const unsigned long int hora = 3600000;
unsigned long int horaDeRecebimento = 0;
int freq = -1;

//--------------- Dados da rede wifi -----------------------------

const char* ssid     = "Vbdasdsa";
const char* password = "5215";

void acionaBomba(){
  digitalWrite(pinBomba, HIGH);
  delay(5000); 
  digitalWrite(pinBomba, LOW);
}

//-------- Responsavel pela comunicacao com websocket ------------

WebSocketsClient webSocket;

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {

  switch(type) {
    case WStype_DISCONNECTED:
      Serial.printf("[WSc] Desconectado!\n");
      break;
    case WStype_CONNECTED:
      Serial.printf("[WSc] Conectado ao heroku\n");
      break;
      
    case WStype_TEXT:
      int id = 0;
      const char* text = (char *)&payload[0];
      
      sscanf(text, "%d-%d", &id, &freq);
      
      if(id == 1){
        horaDeRecebimento = millis();
        if (freq == 0){
          horaDeRecebimento = 0;
        }
      }
        
      break;
  }

  delay(300);
}

void setup() {
  Serial.begin(115200);
  Serial.println();
  Serial.print("Conectando ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado!");  
  Serial.println("Endereco IP: ");
  Serial.println(WiFi.localIP());

  delay(500);
  pinMode(pinBomba, OUTPUT);

  //webSocket.begin("contador-de-pessoas.herokuapp.com", 80, "/");
  webSocket.begin("http://localhost:3333", 80, "/");

  webSocket.onEvent(webSocketEvent);

  webSocket.setReconnectInterval(2000);
}

void loop() {
  webSocket.loop();
  
  if(horaDeRecebimento != 0 && millis() - horaDeRecebimento >= freq*hora){
    horaDeRecebimento = millis();
    acionaBomba();
  }
  
}
