import { network } from "hardhat";

const { ethers } = await network.connect({
  network: "hardhatOp",
  chainType: "op",
});

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();

  await helloWorld.waitForDeployment();

  console.log("HelloWorld deployed to:", await helloWorld.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});