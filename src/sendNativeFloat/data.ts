import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1 } from '../send';
import { flexEncodeSendFloatData2 } from '../sendFloat';

export interface FlexEncodeSendNativeFloatDataParams {
  sender: FlexToHexValue;
  receiver: FlexToHexValue;
  amount: FlexToHexValue;
  start: FlexToHexValue;
  duration: FlexToHexValue;
  group: FlexToHexValue;
  skipAmountEmit?: boolean;
}

export interface FlexSendNativeFloatData {
  sendData: [FlexHex, FlexHex, FlexHex];
}

export function flexEncodeSendNativeFloatData(params: FlexEncodeSendNativeFloatDataParams): FlexSendNativeFloatData {
  const sendData: FlexSendNativeFloatData['sendData'] = [
    flexEncodeSendData0({
      sender: params.sender,
    }),
    flexEncodeSendData1({
      start: params.start,
      duration: params.duration,
      group: params.group,
      receiver: params.receiver,
    }),
    flexEncodeSendFloatData2({
      amount: params.amount,
      skipAmountEmit: params.skipAmountEmit,
    }),
  ];

  const data: FlexSendNativeFloatData = {
    sendData,
  };
  return data;
}
