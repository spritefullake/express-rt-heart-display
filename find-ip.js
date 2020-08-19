var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
console.log("All network interfaces: ",networkInterfaces);
const homeInterfaces = Object.values(networkInterfaces).flat();
const preferredIp = null; //or replace with your actual local IP
const ipAddress = preferredIp || homeInterfaces.filter(({family, internal}) => family === 'IPv4' && !internal)[0].address
console.log(ipAddress);
module.exports = {ipAddress};