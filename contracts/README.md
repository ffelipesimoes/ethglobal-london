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

```shell
$ forge create 
  --rpc-url https://spicy-rpc.chiliz.com/\
  --private-key <your_private_key> \
  src/Lock.sol:Lock
  --legacy 
```