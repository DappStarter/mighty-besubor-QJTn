require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name raise noise huge give knee metal genius'; 
let testAccounts = [
"0xccc6838c9d34bdd24bd544ebd99296ad0f810ced2d9f5dc99f48b2c21a72978d",
"0x4ee4e96a77c5bd9c517b88469f48e2c3569992e947ab79b13c0fc989fd216a5d",
"0x00af622e13729efb62db2f22a919147f9f5e179150cba044d618d718620c2b02",
"0xb993137cd440561e3f147b05c9a0c28297fe888b38d2d3388b95e42c9aca0f29",
"0x5ed2c9ad6541b2e2dfc9b946903f89e66d8e73d527113c6da48c8e61349a0841",
"0xcaef41183a5e966c5e310d49cd50da296c1f71c776288064819b16119560f3e1",
"0x6ccf6fa7edb75dd7109a894d263acd4196ccbc3a6382ab927e0fbfd5b7c3ba65",
"0x3d4257fcdd13bc25b2b4c228aca11d72842bdb6c712d28fa7801e93ca9c19f26",
"0x3e264aeb62aba311eeaa6bad2fd17ccfa116dd3096e0eaca40ec7b33619f154d",
"0xc87cb91246aded5f418394ce337e5592ab25369928ccd42a6332d28fe57ea5b2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

