import { ethers } from "hardhat";


  async function deploy() {
    const crowdfunding = await ethers.deployContract("CrowdFunding");

    await crowdfunding.waitForDeployment();

    console.log("CrowdFundingContract deployed to:", crowdfunding.target);


  }


deploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});