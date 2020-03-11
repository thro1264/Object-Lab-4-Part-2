var serial; 
var portName = '/dev/cu.usbmodem1411'; 
function setup() {
  createCanvas(400, 300);
 
  serial = new p5.SerialPort(); 
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);
  serial.open(portName);
  serial.on('list', printList); 
   serial.list(); //list the serial ports
}

function draw() {
  if (mouseIsPressed) {
    serial.write('H');
    console.log('H');
  } 
  else {
    serial.write('L');
    console.log('L');
  }
}

function serverConnected(){
console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

function serialEvent(){
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

function printList(portList) {
 for (var i = 0; i < portList.length; i++) {
 print(i + " " + portList[i]);
 }
}