import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("HelloWorld", function () {
  it("should store and return the correct message", async function () {
    // Deploy contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    // Set a message
    const testMessage = "Hello, Hardhat!";
    await helloWorld.setMessage(testMessage);

    // Read stored message
    const result = await helloWorld.getMessage();

    // Assert
    expect(result).to.equal(testMessage);
  });
});