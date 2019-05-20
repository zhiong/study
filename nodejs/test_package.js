const spiPackage = require('./demopkg'); //use directory
const spi = new spiPackage;
spi.setAttr('SPI0','4','Master','16','Msb','Low','Falling');
spi.what();