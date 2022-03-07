const chains = {
    "avalanche": {
        "rpc_url": "https://api.avax.network/ext/bc/C/rpc",
        "contracts": {
            "atricrypto": {
                "name": "atricrypto",
                "address": "0x445FE580eF8d70FF569aB36e80c647af338db351",
                "abi": [
                    {
                        "name": "Deposit",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Withdraw",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "CommitOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "ApplyOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Transfer",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_to",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Approval",
                        "inputs": [
                            {
                                "name": "_owner",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_spender",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "constructor",
                        "inputs": [
                            {
                                "name": "_admin",
                                "type": "address"
                            },
                            {
                                "name": "_lp_token",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "decimals",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_contract",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2628
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "last_claim",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2454
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimed_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2976
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimable_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2944
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claimable_reward_write",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2067577
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards_receiver",
                        "inputs": [
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 35643
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transfer",
                        "inputs": [
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8092437
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transferFrom",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8130387
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "approve",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 38091
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "increaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_added_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40635
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "decreaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_subtracted_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40659
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards",
                        "inputs": [
                            {
                                "name": "_reward_contract",
                                "type": "address"
                            },
                            {
                                "name": "_claim_sig",
                                "type": "bytes32"
                            },
                            {
                                "name": "_reward_tokens",
                                "type": "address[8]"
                            }
                        ],
                        "outputs": [],
                        "gas": 4442580
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "commit_transfer_ownership",
                        "inputs": [
                            {
                                "name": "addr",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 39375
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "accept_transfer_ownership",
                        "inputs": [],
                        "outputs": [],
                        "gas": 39320
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "lp_token",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2928
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "balanceOf",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3173
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "totalSupply",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2988
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "allowance",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3448
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "name",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 13350
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "symbol",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 11103
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_tokens",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3217
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_balances",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3353
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "rewards_receiver",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3383
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claim_sig",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bytes"
                            }
                        ],
                        "gas": 11223
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3443
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral_for",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3688
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "future_admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3318
                    }
                ],
                "actions": [
                    {
                        "deposit": {
                            "threshold": "0.2",
                            "reward": "wavax",
                            "target": "avax_lpool",
                            "actions": []
                        }
                    },
                    {
                        "swap": {
                            "threshold": "1.0",
                            "from": "crv",
                            "to": "usdt.e",
                            "contract": "trader_joe",
                            "actions": [
                                {
                                    "deposit": {
                                        "threshold": "5.0",
                                        "reward": "usdt.e",
                                        "contract": "aave",
                                        "actions": []
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "aave": {
                "name": "aave",
                "address": "0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858",
                "abi": [
                    {
                        "name": "Deposit",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Withdraw",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "CommitOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "ApplyOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Transfer",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_to",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Approval",
                        "inputs": [
                            {
                                "name": "_owner",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_spender",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "constructor",
                        "inputs": [
                            {
                                "name": "_admin",
                                "type": "address"
                            },
                            {
                                "name": "_lp_token",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "decimals",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_contract",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2628
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "last_claim",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2454
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimed_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2976
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimable_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2944
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claimable_reward_write",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2067577
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards_receiver",
                        "inputs": [
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 35643
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transfer",
                        "inputs": [
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8092437
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transferFrom",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8130387
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "approve",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 38091
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "increaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_added_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40635
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "decreaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_subtracted_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40659
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards",
                        "inputs": [
                            {
                                "name": "_reward_contract",
                                "type": "address"
                            },
                            {
                                "name": "_claim_sig",
                                "type": "bytes32"
                            },
                            {
                                "name": "_reward_tokens",
                                "type": "address[8]"
                            }
                        ],
                        "outputs": [],
                        "gas": 4442580
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "commit_transfer_ownership",
                        "inputs": [
                            {
                                "name": "addr",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 39375
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "accept_transfer_ownership",
                        "inputs": [],
                        "outputs": [],
                        "gas": 39320
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "lp_token",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2928
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "balanceOf",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3173
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "totalSupply",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2988
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "allowance",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3448
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "name",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 13350
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "symbol",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 11103
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_tokens",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3217
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_balances",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3353
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "rewards_receiver",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3383
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claim_sig",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bytes"
                            }
                        ],
                        "gas": 11223
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3443
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral_for",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3688
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "future_admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3318
                    }
                ],
                "actions": [
                    {
                        "deposit": {
                            "threshold": "0.2",
                            "reward": "wavax",
                            "target": "avax_lpool",
                            "actions": []
                        }
                    },
                    {
                        "swap": {
                            "threshold": "1.0",
                            "from": "crv",
                            "to": "usdt.e",
                            "contract": "trader_joe",
                            "actions": [
                                {
                                    "deposit": {
                                        "threshold": "5.0",
                                        "reward": "usdt.e",
                                        "contract": "aave",
                                        "actions": []
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "avax_lpool": {
                "name": "avax_lpool",
                "address": "0xb6A86025F0FE1862B372cb0ca18CE3EDe02A318f",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "marketId",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "bytes32",
                                "name": "id",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "hasProxy",
                                "type": "bool"
                            }
                        ],
                        "name": "AddressSet",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "ConfigurationAdminUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "EmergencyAdminUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "LendingPoolCollateralManagerUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "LendingPoolConfiguratorUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "LendingPoolUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "LendingRateOracleUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "string",
                                "name": "newMarketId",
                                "type": "string"
                            }
                        ],
                        "name": "MarketIdSet",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "PriceOracleUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "internalType": "bytes32",
                                "name": "id",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "ProxyCreated",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "id",
                                "type": "bytes32"
                            }
                        ],
                        "name": "getAddress",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getEmergencyAdmin",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getLendingPool",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getLendingPoolCollateralManager",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getLendingPoolConfigurator",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getLendingRateOracle",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getMarketId",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getPoolAdmin",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getPriceOracle",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "id",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "newAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setAddress",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "id",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "implementationAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setAddressAsProxy",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "emergencyAdmin",
                                "type": "address"
                            }
                        ],
                        "name": "setEmergencyAdmin",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "manager",
                                "type": "address"
                            }
                        ],
                        "name": "setLendingPoolCollateralManager",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "configurator",
                                "type": "address"
                            }
                        ],
                        "name": "setLendingPoolConfiguratorImpl",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "pool",
                                "type": "address"
                            }
                        ],
                        "name": "setLendingPoolImpl",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "lendingRateOracle",
                                "type": "address"
                            }
                        ],
                        "name": "setLendingRateOracle",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "marketId",
                                "type": "string"
                            }
                        ],
                        "name": "setMarketId",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "admin",
                                "type": "address"
                            }
                        ],
                        "name": "setPoolAdmin",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceOracle",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceOracle",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ]
            }
        }
    },
    "polygon": {
        "rpc_url": "https://polygon-rpc.com",
        "contracts": {
            "eurtusd": {
                "name": "eurtusd",
                "address": "0x40c0e9376468b4f257d15F8c47E5D0C646C28880",
                "abi": [
                    {
                        "name": "Deposit", "inputs": [
                            { "name": "provider", "type": "address", "indexed": true },
                            { "name": "value", "type": "uint256", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    {
                        "name": "Withdraw", "inputs": [
                            { "name": "provider", "type": "address", "indexed": true },
                            { "name": "value", "type": "uint256", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    {
                        "name": "CommitOwnership", "inputs": [
                            { "name": "admin", "type": "address", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    {
                        "name": "ApplyOwnership", "inputs": [
                            { "name": "admin", "type": "address", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    {
                        "name": "Transfer", "inputs": [
                            { "name": "_from", "type": "address", "indexed": true },
                            { "name": "_to", "type": "address", "indexed": true },
                            { "name": "_value", "type": "uint256", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    {
                        "name": "Approval", "inputs": [
                            { "name": "_owner", "type": "address", "indexed": true },
                            { "name": "_spender", "type": "address", "indexed": true },
                            { "name": "_value", "type": "uint256", "indexed": false }
                        ],
                        "anonymous": false, "type": "event"
                    },
                    { "stateMutability": "nonpayable", "type": "constructor", "inputs": [{ "name": "_admin", "type": "address" }, { "name": "_lp_token", "type": "address" }], "outputs": [] },
                    { "stateMutability": "view", "type": "function", "name": "decimals", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 288 },
                    { "stateMutability": "view", "type": "function", "name": "reward_contract", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 2628 },
                    { "stateMutability": "view", "type": "function", "name": "last_claim", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 2454 },
                    { "stateMutability": "view", "type": "function", "name": "claimed_reward", "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_token", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 2976 }, { "stateMutability": "view", "type": "function", "name": "claimable_reward", "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_token", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 2944 }, { "stateMutability": "nonpayable", "type": "function", "name": "claimable_reward_write", "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_token", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 2067577 }, { "stateMutability": "nonpayable", "type": "function", "name": "set_rewards_receiver", "inputs": [{ "name": "_receiver", "type": "address" }], "outputs": [], "gas": 35643 }, { "stateMutability": "nonpayable", "type": "function", "name": "claim_rewards", "inputs": [], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "claim_rewards", "inputs": [{ "name": "_addr", "type": "address" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "claim_rewards", "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_receiver", "type": "address" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "deposit", "inputs": [{ "name": "_value", "type": "uint256" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "deposit", "inputs": [{ "name": "_value", "type": "uint256" }, { "name": "_addr", "type": "address" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "deposit", "inputs": [{ "name": "_value", "type": "uint256" }, { "name": "_addr", "type": "address" }, { "name": "_claim_rewards", "type": "bool" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "withdraw", "inputs": [{ "name": "_value", "type": "uint256" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "withdraw", "inputs": [{ "name": "_value", "type": "uint256" }, { "name": "_claim_rewards", "type": "bool" }], "outputs": [] }, { "stateMutability": "nonpayable", "type": "function", "name": "transfer", "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 8092437 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "transferFrom", "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 8130387 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "approve", "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 38091 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "increaseAllowance", "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_added_value", "type": "uint256" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 40635 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "decreaseAllowance", "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtracted_value", "type": "uint256" }], "outputs": [{ "name": "", "type": "bool" }], "gas": 40659 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "set_rewards", "inputs": [{ "name": "_reward_contract", "type": "address" }, { "name": "_claim_sig", "type": "bytes32" }, { "name": "_reward_tokens", "type": "address[8]" }], "outputs": [], "gas": 4442580 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "commit_transfer_ownership", "inputs": [{ "name": "addr", "type": "address" }], "outputs": [], "gas": 39375 },
                    { "stateMutability": "nonpayable", "type": "function", "name": "accept_transfer_ownership", "inputs": [], "outputs": [], "gas": 39320 },
                    { "stateMutability": "view", "type": "function", "name": "lp_token", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 2928 },
                    { "stateMutability": "view", "type": "function", "name": "balanceOf", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3173 },
                    { "stateMutability": "view", "type": "function", "name": "totalSupply", "inputs": [], "outputs": [{ "name": "", "type": "uint256" }], "gas": 2988 },
                    { "stateMutability": "view", "type": "function", "name": "allowance", "inputs": [{ "name": "arg0", "type": "address" }, { "name": "arg1", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3448 },
                    { "stateMutability": "view", "type": "function", "name": "name", "inputs": [], "outputs": [{ "name": "", "type": "string" }], "gas": 13350 },
                    { "stateMutability": "view", "type": "function", "name": "symbol", "inputs": [], "outputs": [{ "name": "", "type": "string" }], "gas": 11103 },
                    { "stateMutability": "view", "type": "function", "name": "reward_tokens", "inputs": [{ "name": "arg0", "type": "uint256" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3217 },
                    { "stateMutability": "view", "type": "function", "name": "reward_balances", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3353 },
                    { "stateMutability": "view", "type": "function", "name": "rewards_receiver", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "address" }], "gas": 3383 },
                    { "stateMutability": "view", "type": "function", "name": "claim_sig", "inputs": [], "outputs": [{ "name": "", "type": "bytes" }], "gas": 11223 },
                    { "stateMutability": "view", "type": "function", "name": "reward_integral", "inputs": [{ "name": "arg0", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3443 },
                    { "stateMutability": "view", "type": "function", "name": "reward_integral_for", "inputs": [{ "name": "arg0", "type": "address" }, { "name": "arg1", "type": "address" }], "outputs": [{ "name": "", "type": "uint256" }], "gas": 3688 },
                    { "stateMutability": "view", "type": "function", "name": "admin", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 3288 },
                    { "stateMutability": "view", "type": "function", "name": "future_admin", "inputs": [], "outputs": [{ "name": "", "type": "address" }], "gas": 3318 }
                ]
            },
            "atricrypto3" : {
                "name": "atricrypto3",
                "address": "0x3B6B158A76fd8ccc297538F454ce7B4787778c7C",
                "abi": [
                    {
                        "name": "Deposit",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Withdraw",
                        "inputs": [
                            {
                                "name": "provider",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "CommitOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "ApplyOwnership",
                        "inputs": [
                            {
                                "name": "admin",
                                "type": "address",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Transfer",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_to",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "name": "Approval",
                        "inputs": [
                            {
                                "name": "_owner",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_spender",
                                "type": "address",
                                "indexed": true
                            },
                            {
                                "name": "_value",
                                "type": "uint256",
                                "indexed": false
                            }
                        ],
                        "anonymous": false,
                        "type": "event"
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "constructor",
                        "inputs": [
                            {
                                "name": "_admin",
                                "type": "address"
                            },
                            {
                                "name": "_lp_token",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "decimals",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_contract",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2628
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "last_claim",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2454
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimed_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2976
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claimable_reward",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2944
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claimable_reward_write",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_token",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2067577
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards_receiver",
                        "inputs": [
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 35643
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "claim_rewards",
                        "inputs": [
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_receiver",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "deposit",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_addr",
                                "type": "address"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "withdraw",
                        "inputs": [
                            {
                                "name": "_value",
                                "type": "uint256"
                            },
                            {
                                "name": "_claim_rewards",
                                "type": "bool"
                            }
                        ],
                        "outputs": []
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transfer",
                        "inputs": [
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8092437
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "transferFrom",
                        "inputs": [
                            {
                                "name": "_from",
                                "type": "address"
                            },
                            {
                                "name": "_to",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 8130387
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "approve",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 38091
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "increaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_added_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40635
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "decreaseAllowance",
                        "inputs": [
                            {
                                "name": "_spender",
                                "type": "address"
                            },
                            {
                                "name": "_subtracted_value",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "gas": 40659
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "set_rewards",
                        "inputs": [
                            {
                                "name": "_reward_contract",
                                "type": "address"
                            },
                            {
                                "name": "_claim_sig",
                                "type": "bytes32"
                            },
                            {
                                "name": "_reward_tokens",
                                "type": "address[8]"
                            }
                        ],
                        "outputs": [],
                        "gas": 4442580
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "commit_transfer_ownership",
                        "inputs": [
                            {
                                "name": "addr",
                                "type": "address"
                            }
                        ],
                        "outputs": [],
                        "gas": 39375
                    },
                    {
                        "stateMutability": "nonpayable",
                        "type": "function",
                        "name": "accept_transfer_ownership",
                        "inputs": [],
                        "outputs": [],
                        "gas": 39320
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "lp_token",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 2928
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "balanceOf",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3173
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "totalSupply",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 2988
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "allowance",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3448
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "name",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 13350
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "symbol",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "gas": 11103
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_tokens",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "uint256"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3217
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_balances",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3353
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "rewards_receiver",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3383
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "claim_sig",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "bytes"
                            }
                        ],
                        "gas": 11223
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3443
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "reward_integral_for",
                        "inputs": [
                            {
                                "name": "arg0",
                                "type": "address"
                            },
                            {
                                "name": "arg1",
                                "type": "address"
                            }
                        ],
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "gas": 3688
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3288
                    },
                    {
                        "stateMutability": "view",
                        "type": "function",
                        "name": "future_admin",
                        "inputs": [],
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "gas": 3318
                    }
                ]
            },
        }
    }
};
module.exports = {
    chains
};