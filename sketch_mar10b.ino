int incoming;

void setup() {
  pinMode(7, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    incoming  = Serial.read();
    if (incoming == 'H') {
      digitalWrite(7, HIGH);
    } else {
      digitalWrite(7, LOW);
    }
  }
}
