import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "FanBallot" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployFanBallot: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

// use ethers.utils.formatBytes32String
  var questions = ["Messi" , "CR7", "R9"]
  //var questions = ["Messi", "Ronaldo CR7", "Ronaldo R9", "Pele", "Maradona"] ;

  await deploy("FanBallot", {
    from: deployer,
    // Contract constructor arguments

    args: [ questions ],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const FanBallot = await hre.ethers.getContract<Contract>("FanBallot", deployer);
  //console.log("👋 Initial greeting:", await FanBallot.greeting());
};

export default deployFanBallot;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags FanBallot
deployFanBallot.tags = ["FanBallot"];
