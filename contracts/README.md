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

```shell
$ forge create 
  --rpc-url <rpc_url> \
  --constructor-args <address_of_verifier> \
  --private-key <your_private_key> \
  src/Lock.sol:Lock
```
