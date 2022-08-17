const ethers = require("ethers")
const fs = require("fs-extra")

const pKey = ''
const pass = ''

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