function Spi(){
    let name;
    let clock;
    let opm;
    let datalen;
    let datemode;
    let polarity;
    let phase;
    this.setAttr =function(theName,theClock,theOpm,theDataLen,theDataMode,thePol,thePha){
        name = theName;
        clock = theClock;
        opm = theOpm;
        datalen = theDataLen;
        datemode = theDataMode;
        polarity = thePol;
        phase = thePha

    };

    this.what= function(){
        console.log('the running spi device information ');
        console.log('device: '+ name + '\r\nclock: '+ clock + '\r\nopm: '+ opm + '\r\ndatalen: '+ datalen + '\r\ndatemode: '+ datemode + '\r\npolarity: '+ polarity + '\r\nphase: '+ phase);
    };
};

module.exports = Spi;