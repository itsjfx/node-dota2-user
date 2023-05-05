/* eslint-disable */
import _m0 from "protobufjs/minimal";

export interface COAuthTokenImplicitGrantNoPromptRequest {
  clientid: string;
}

export interface COAuthTokenImplicitGrantNoPromptResponse {
  accessToken: string;
  redirectUri: string;
}

function createBaseCOAuthTokenImplicitGrantNoPromptRequest(): COAuthTokenImplicitGrantNoPromptRequest {
  return { clientid: "" };
}

export const COAuthTokenImplicitGrantNoPromptRequest = {
  encode(message: COAuthTokenImplicitGrantNoPromptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientid !== "") {
      writer.uint32(10).string(message.clientid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COAuthTokenImplicitGrantNoPromptRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOAuthTokenImplicitGrantNoPromptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.clientid = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseCOAuthTokenImplicitGrantNoPromptResponse(): COAuthTokenImplicitGrantNoPromptResponse {
  return { accessToken: "", redirectUri: "" };
}

export const COAuthTokenImplicitGrantNoPromptResponse = {
  encode(message: COAuthTokenImplicitGrantNoPromptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.redirectUri !== "") {
      writer.uint32(18).string(message.redirectUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): COAuthTokenImplicitGrantNoPromptResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCOAuthTokenImplicitGrantNoPromptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.redirectUri = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

export interface OAuthToken {
  ImplicitGrantNoPrompt(
    request: COAuthTokenImplicitGrantNoPromptRequest,
  ): Promise<COAuthTokenImplicitGrantNoPromptResponse>;
}

export class OAuthTokenClientImpl implements OAuthToken {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "OAuthToken";
    this.rpc = rpc;
    this.ImplicitGrantNoPrompt = this.ImplicitGrantNoPrompt.bind(this);
  }
  ImplicitGrantNoPrompt(
    request: COAuthTokenImplicitGrantNoPromptRequest,
  ): Promise<COAuthTokenImplicitGrantNoPromptResponse> {
    const data = COAuthTokenImplicitGrantNoPromptRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ImplicitGrantNoPrompt", data);
    return promise.then((data) => COAuthTokenImplicitGrantNoPromptResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
