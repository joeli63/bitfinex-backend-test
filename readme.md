# bitfinex backend test



## Requirements
create a simplified distributed exchange
* Each client will have its own instance of the orderbook.
* Clients submit orders to their own instance of orderbook. The order is distributed to other instances, too.
* If a client's order matches with another order, any remainder is added to the orderbook, too.

## Implementation


Within a Grenache network, connected peers can interact in different ways with each other.
They can store and retrieve data in the DHT. They can also work in a Pub/Sub pattern. 
Or they can work in RPC mode with different workers and clients. 

An `ExchangeClientModule` is a client instance, and it's consist of 2 parts `PeerRPCServer` and `PeerRPCClient`:  
-  `PeerRPCServer` is used for incoming connections and commands. 
- `PeerRPCClient` is used for sending commands to other peers.

Client actions:
- create orderbook for client
- submit order (BUY / SELL, amount) from client; match order with orders from other clients

### Orders 
- buy amount code price
- sell amount code price
 
### Order statuses
- `new` - Client created a new order
- `closed` - Order closed by match



## How to start

### Prerequisite: start grapes

```shell
yarn start-grapes
```

### start client

```shell
# yarn new-client PORT [ORDER]
yarn new-client 8001
yarn new-client 8002 buy:0.3:ethusd:10000
yarn new-client 8003 sell:0.3:ethusd:10000
```
- PORT - any available local port ; it's preferred to use value > 8000
- ORDER - optional argument. Format - [buy|sell]:[amount]:[code]:[price]
