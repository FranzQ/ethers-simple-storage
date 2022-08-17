const ethers = require("ethers")
const fs = require("fs-extra")

const pKey = '3c2de746c246bb43bb72850dd5164346e6f94f95a3ea0450ee39c690c569185e'
const pass = '12345'

async function main() {
    const wallet = new ethers.Wallet('')
    const encryptedJsonKey = await wallet.encrypt(
        pass,
        pKey
    );
    fs.writeFileSync('./.key.json', encryptedJsonKey)
}

main()
    .then(() => {
        console.log('Done');
    })
    .catch((ex) => {
        console.error('Error', ex);
    })