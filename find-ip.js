var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
const homeInterfaces = Object.values(networkInterfaces).flat();
const ipAddress = homeInterfaces.filter(({family, internal}) => family === 'IPv4' && !internal)[0].address
console.log(ipAddress);
module.exports = {ipAddress};