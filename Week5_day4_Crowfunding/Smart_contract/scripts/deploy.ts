import { ethers } from "hardhat";
import { erc20 } from "../typechain-types/@openzeppelin/contracts/token";


  async function deploy() {

    const erc20Address = "0xaFAc6C1785035528aeA1d6aE150C980CBcE71034";

    const crowdfunding = await ethers.deployContract("CrowdFunding", [erc20Address]);

    await crowdfunding.waitForDeployment();

    console.log("CrowdFundingContract deployed to:", crowdfunding.target);


  }

deploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});