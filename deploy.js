const ethers = require("ethers")
const fs = require("fs-extra")

require('dotenv').config();

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const encryptedJson = fs.readFileSync('./.encryptedKey.json', 'utf8');
    let wallet = new ethers.Wallet.fromEncryptedJsonSync(
        encryptedJson,
        process.env.PRIVATE_KEY_PASSWORD
    );
    wallet = await wallet.connect(provider);
    const abi = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.abi', 'utf8');
    const binary = fs.readFileSync('./SimpleStorage_sol_SimpleStorage.bin', 'utf8');

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log('Deploying...');

    const contract = await contractFactory.deploy();
    // console.log(contract);
    console.log(`Contract Address: ${contract.address}`);

    //Block confirmation
    // const deploymentReceipt = await contract.deployTransaction.wait(1);
    // console.log(deploymentReceipt);
    const favNum = await contract.retrieve();
    console.log(favNum.toString());
}


main()
    .then(() => {
        console.log('Done');
    })
    .catch((ex) => {
        console.error('Error', ex);
    })