import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
  const message = await ethers.getContractFactory("HelloWorld");
  const hello = await message.deploy();
  await hello.deployed();
  return hello;
}

// @ts-ignore
async function sayHello() {
  const hello = await deploy();
  console.log(hello)
  return hello.hello();
}
deploy().then(sayHello).then(console.log);