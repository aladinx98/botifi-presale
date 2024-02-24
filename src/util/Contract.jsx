
// Ethereum Contract


export const boldAI_Presale_Eth_Address =
  "0x1C63290Cfe94d1c1C1f702514ee2Da6E5bE51Ab0";
export const boldAI_Presale_Eth_Abi = [{
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_USDT",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee1",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee2",
    "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "token",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "Recovered",
  "type": "event"
}, {
  "inputs": [],
  "name": "BuyWithETH",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "BuyWithUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_usdt",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "EmergencyUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "SetUSDTpricePerETH",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDT",
  "outputs": [{
    "internalType": "contract IERC20",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDTpricePerETH",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDraised",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "contractbalance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "dividefee",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_ethvalue",
    "type": "uint256"
  }],
  "name": "getvalueperETH",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "getvalueperUSDT",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "isBlacklist",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "maxTokeninPresale",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "presaleStatus",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "pricePerUSDT",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "tokenAddress",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "recoverERC20",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "releaseFunds",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "resumePresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_addr",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "_state",
    "type": "bool"
  }],
  "name": "setBlacklist",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "setRewardAIPriceperUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_usdt",
    "type": "address"
  }],
  "name": "setUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_value",
    "type": "uint256"
  }],
  "name": "setmaxTokeninPresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "stopPresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "token_Sold",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address payable",
    "name": "_fee1",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee2",
    "type": "address"
  }],
  "name": "updateFeeAddresses",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "stateMutability": "payable",
  "type": "receive"
}]

export const TetherToken_Eth_Address =
  "0xdAC17F958D2ee523a2206206994597C13D831ec7";
export const TetherToken_Eth_Abi = [{
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_upgradedAddress",
    "type": "address"
  }],
  "name": "deprecate",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_spender",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "deprecated",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_evilUser",
    "type": "address"
  }],
  "name": "addBlackList",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "upgradedAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "balances",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "maximumFee",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "_totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_maker",
    "type": "address"
  }],
  "name": "getBlackListStatus",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }, {
    "name": "",
    "type": "address"
  }],
  "name": "allowed",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "paused",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "who",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getOwner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_to",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "newBasisPoints",
    "type": "uint256"
  }, {
    "name": "newMaxFee",
    "type": "uint256"
  }],
  "name": "setParams",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "amount",
    "type": "uint256"
  }],
  "name": "issue",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "amount",
    "type": "uint256"
  }],
  "name": "redeem",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }, {
    "name": "_spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "name": "remaining",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "basisPointsRate",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "address"
  }],
  "name": "isBlackListed",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_clearedUser",
    "type": "address"
  }],
  "name": "removeBlackList",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "MAX_UINT",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_blackListedUser",
    "type": "address"
  }],
  "name": "destroyBlackFunds",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_initialSupply",
    "type": "uint256"
  }, {
    "name": "_name",
    "type": "string"
  }, {
    "name": "_symbol",
    "type": "string"
  }, {
    "name": "_decimals",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "amount",
    "type": "uint256"
  }],
  "name": "Issue",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "amount",
    "type": "uint256"
  }],
  "name": "Redeem",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "newAddress",
    "type": "address"
  }],
  "name": "Deprecate",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "feeBasisPoints",
    "type": "uint256"
  }, {
    "indexed": false,
    "name": "maxFee",
    "type": "uint256"
  }],
  "name": "Params",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_blackListedUser",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_balance",
    "type": "uint256"
  }],
  "name": "DestroyedBlackFunds",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_user",
    "type": "address"
  }],
  "name": "AddedBlackList",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "_user",
    "type": "address"
  }],
  "name": "RemovedBlackList",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [],
  "name": "Pause",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [],
  "name": "Unpause",
  "type": "event"
}]


// End Ethereum Contract












/// Binance Contract

export const boldAI_Presale_BNB_Address =
  "0xe8ce538F75036843978C0DD3783125277872e580";
export const boldAI_Presale_BNB_Abi = [{
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_BUSD",
    "type": "address"
  }, {
    "internalType": "contract IERC20",
    "name": "_USDT",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee1",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee2",
    "type": "address"
  }],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "token",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "Recovered",
  "type": "event"
}, {
  "inputs": [],
  "name": "BUSD",
  "outputs": [{
    "internalType": "contract IERC20",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "BUSDpricePerBNB",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "BuyWithBNB",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "BuyWithBUSD",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "BuyWithUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_BUSD",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "EmergencyBUSD",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "SetBUSDpricePerBNB",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDT",
  "outputs": [{
    "internalType": "contract IERC20",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDraised",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "contractbalance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "dividefee",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "pure",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_BNBvalue",
    "type": "uint256"
  }],
  "name": "getvalueperBNB",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amt",
    "type": "uint256"
  }],
  "name": "getvalueperBUSD",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "isBlacklist",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "maxTokeninPresale",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "presaleStatus",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "pricePerBUSD",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "tokenAddress",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "tokenAmount",
    "type": "uint256"
  }],
  "name": "recoverERC20",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "releaseFunds",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "resumePresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_BUSD",
    "type": "address"
  }],
  "name": "setBUSD",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_addr",
    "type": "address"
  }, {
    "internalType": "bool",
    "name": "_state",
    "type": "bool"
  }],
  "name": "setBlacklist",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "setRewardPriceperBUSD",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "contract IERC20",
    "name": "_USDT",
    "type": "address"
  }],
  "name": "setUSDT",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_value",
    "type": "uint256"
  }],
  "name": "setmaxTokeninPresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "stopPresale",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "token_Sold",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address payable",
    "name": "_fee1",
    "type": "address"
  }, {
    "internalType": "address payable",
    "name": "_fee2",
    "type": "address"
  }],
  "name": "updateFeeAddresses",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "stateMutability": "payable",
  "type": "receive"
}]

export const BUSD_Address = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
export const BUSD_Abi = [{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "_decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "_name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "_symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "burn",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getOwner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "sender",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]

export const USDT_Address = "0x55d398326f99059fF775485246999027B3197955";
export const USDT_Abi = [{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "_decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "_name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "_symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "burn",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getOwner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "sender",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "recipient",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}]