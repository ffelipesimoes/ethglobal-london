# Stadium EVM contract

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Deploy
### change rpc url to https://rpc.ankr.com/chiliz for mainnet
## constructor-args are optional if the smart contract constructor expets arguments

```shell
$ forge create 
  --rpc-url https://spicy-rpc.chiliz.com/\
  --private-key <your_private_key> \
  src/Lock.sol:Lock
  --constructor-args <args> \
  --legacy 
```