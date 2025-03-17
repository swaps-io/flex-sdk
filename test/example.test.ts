import { flexEncodeReceiveNativeData } from '../src';

test('Should be working example', async () => {
  const now = (): bigint => BigInt(new Date().getTime()) / 1000n; // In seconds

  const data = flexEncodeReceiveNativeData({
    sender: '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
    receiver: '0xc001c0dec001c0dec001c0dec001c0dec001c0de',
    receiverContract: true,
    amount: 12_300000000_000000000n, // 12.3 (18 decimals)
    deadline: now() + 3n * 60n, // In seconds
    nonce: 123n,
  });
  console.log(`Receive native data: ${JSON.stringify(data)}`);
});
