import { ethers } from "hardhat";


  async function deploy() {

    const name = "AMAKA";
    const symbol = "AMAKS";

    const erc20Contract = await ethers.deployContract("OurERC20", [name, symbol]);

    await erc20Contract.waitForDeployment();

    console.log("OurERC20 Contract deployed to:", erc20Contract.target);


  }

deploy().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});