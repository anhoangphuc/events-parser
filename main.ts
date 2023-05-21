import { ethers, Interface } from "ethers"
import { abi } from "./abi/TraitsFactoryABI.json";

(async function main() {
    const FactoryABI = new Interface(abi);
    const provider = new ethers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/9240293239dc4327b275d4f66b6d8008");
    const txReceipt = await provider.getTransactionReceipt("0x76c68440f273f97048d355ea497816a46f97de870f278d22b38929fbbca0b651");
    console.log(txReceipt?.logs);
    if (txReceipt?.logs[0]) {
        const topics = txReceipt.logs[0].topics.slice();
    const parsed = FactoryABI.parseLog( { topics,  data: txReceipt.logs[0].data});
    console.log(parsed);
    }
})()