import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1, flexEncodeSendData2 } from '../send';

export interface FlexEncodeSendNativeDataParams {
  sender: FlexToHexValue;
  receiver: FlexToHexValue;
  amount: FlexToHexValue;
  start: FlexToHexValue;
  duration: FlexToHexValue;
  group: FlexToHexValue;
}

export interface FlexSendNativeData {
  sendData: [FlexHex, FlexHex, FlexHex];
}

export function flexEncodeSendNativeData(params: FlexEncodeSendNativeDataParams): FlexSendNativeData {
  const sendData: FlexSendNativeData['sendData'] = [
    flexEncodeSendData0({
      sender: params.sender,
    }),
    flexEncodeSendData1({
      start: params.start,
      duration: params.duration,
      group: params.group,
      receiver: params.receiver,
    }),
    flexEncodeSendData2({
      amount: params.amount,
    }),
  ];

  const data: FlexSendNativeData = {
    sendData,
  };
  return data;
}
