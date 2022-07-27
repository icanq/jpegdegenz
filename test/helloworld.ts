import "@nomiclabs/hardhat-ethers";
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe(("hello world"), () => {
  it("should say", async () => {
    /**
     * 1. setup
     * 2. deploy contract
     * 3. call contract function
     */
    const message = await ethers.getContractFactory("HelloWorld")
    const hello = await message.deploy();
    await hello.deployed()
    expect(await hello.hello()).to.equal("Hello, world!");
  }); 
});