import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { deployments, getNamedAccounts } = hre;

    const { deployer } = await getNamedAccounts();

    await deployments.deploy("Frat", {
        from: deployer,
        args: [deployer],
        log: true,
    });
};

export default func;
