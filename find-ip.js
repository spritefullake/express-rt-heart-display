var os = require( 'os' );
var networkInterfaces = os.networkInterfaces( );
const ipAddress = networkInterfaces.wifi0.filter(({family}) => family === 'IPv4')[0].address
console.log(ipAddress);
module.exports = {ipAddress};