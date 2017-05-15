// SerialPort wrapper for BluetoothSerial

function SerialPort (port, options) {
    var self = this,
        reading = false;

    function onOpen (info) {
        if (info === 'OK') {
            self.path = port;
            self.emit('open');
        } else {
            console.log('can\'t connect to ', port);
        }
    };

    port.connect(port, onOpen, function (err) { alert(err); });
};

SerialPort.prototype.on = function (evt, callback) {
    if (evt === 'data') {
        port.send(
                function (rawData) {
                    callback(new Uint8Array(rawData))
                },
                function () {
                    console.log('Lost some data!');
                }); 
    }
};

SerialPort.prototype.write = function (data) {
    function onWrite (result) {
    }
    port.send(data, onWrite, function (err) { console.log(err); });
};

SerialPort.prototype.close = function() {
    port.disconnect();
};

util.inherits(SerialPort, EventEmitter);