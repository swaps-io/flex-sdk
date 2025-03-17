import { FlexHex, FlexToHexValue } from '../core';
import { flexEncodeSendData0, flexEncodeSendData1, flexEncodeSendData2, flexEncodeSendData3 } from '../send';

export interface FlexEncodeSendTokenDataParams {
  sender: FlexToHexValue;
  receiver: FlexToHexValue;
  token: FlexToHexValue;
  amount: FlexToHexValue;
  start: FlexToHexValue;
  duration: FlexToHexValue;
  group: FlexToHexValue;
}

export interface FlexSendTokenData {
  sendData: [FlexHex, FlexHex, FlexHex, FlexHex];
}

export function flexEncodeSendTokenData(params: FlexEncodeSendTokenDataParams): FlexSendTokenData {
  const sendData: FlexSendTokenData['sendData'] = [
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
    flexEncodeSendData3({
      token: params.token,
    }),
  ];

  const data: FlexSendTokenData = {
    sendData,
  };
  return data;
}
