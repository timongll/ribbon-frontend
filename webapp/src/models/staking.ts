import { BigNumber } from "@ethersproject/bignumber";

export interface StakingPoolData {
  currentStake: BigNumber;
  poolSize: BigNumber;
  lastTimeRewardApplicable?: string;
  claimHistory: Array<{
    amount: BigNumber;
  }>;
  expectedYield: number;
  claimableRbn: BigNumber;
  unstakedBalance: BigNumber;
}

export interface StakingPool {
  id: string;
  numDepositors: number;
  depositors: string[];
  totalSupply: BigNumber;
  totalRewardClaimed: BigNumber;
}

export interface StakingPoolAccount {
  id: string;
  pool: StakingPool;
  account: string;
  totalRewardClaimed: BigNumber;
  totalBalance: BigNumber;
}
