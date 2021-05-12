require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stomach response museum unusual gloom enter army general'; 
let testAccounts = [
"0x985fa30efcd878add9f10d287096048d84df50df5171011fcce99ce068205fef",
"0xb741f728d4141b45e32b6fa6a4ec3c1af75ea1b43c394461ed3c42f2221037d9",
"0xa4e10daf26bfb4ce57896f77968b85e37b09648a5baf949acdb0e767f7b1a554",
"0xff28c9437f9e95f6837ca32966a12e27475351c9465a680eaa8f851d35569ba5",
"0xe54908d33405b21ec8575a0a2f956a7514dae5df32427f837cb73762d2a61f26",
"0xe6050b0d65241aa7ff24870adec7214ad870d863d442775cbd62823dd3c26ed9",
"0xf56ce3223ec0fddaa44ee108ef7537ae1e40d900f54c4ec1665c9c8748249811",
"0x7094f401b4f736526dd8f891f7bd07da0dfb012b74f3317c8586569a05edc02d",
"0xc88fb9c12f2eede02ee6ab4b8c8c14d1a8f36e902b4fc825fe7285703be34169",
"0xc624b4359e096c47c918e3de3f33f43cc65c8d5b10e5ebcabc3c22d3322efc25"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
