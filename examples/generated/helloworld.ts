/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { FileDescriptorProto } from 'ts-proto-descriptors';
import { GoodbyeRequest, GoodbyeResponse, protoMetadata as protoMetadata1 } from './goodbye';

export const protobufPackage = 'helloworld';

/** The request message containing the user's name. */
export interface HelloRequest {
  /** The name of the person to greet */
  name: string;
}

export interface HelloResponse {
  message: string;
}

function createBaseHelloRequest(): HelloRequest {
  return { name: '' };
}

export const HelloRequest = {
  encode(message: HelloRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : '' };
  },

  toJSON(message: HelloRequest): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloRequest>, I>>(base?: I): HelloRequest {
    return HelloRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HelloRequest>, I>>(object: I): HelloRequest {
    const message = createBaseHelloRequest();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseHelloResponse(): HelloResponse {
  return { message: '' };
}

export const HelloResponse = {
  encode(message: HelloResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelloResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HelloResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : '' };
  },

  toJSON(message: HelloResponse): unknown {
    const obj: any = {};
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HelloResponse>, I>>(base?: I): HelloResponse {
    return HelloResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HelloResponse>, I>>(object: I): HelloResponse {
    const message = createBaseHelloResponse();
    message.message = object.message ?? '';
    return message;
  },
};

export interface Greeter {
  /** Sends a greeting */
  SayHello(request: HelloRequest): Promise<HelloResponse>;
  /** Sends a goodbye */
  SayGoodbye(request: GoodbyeRequest): Promise<GoodbyeResponse>;
}

export const GreeterServiceName = 'helloworld.Greeter';
export class GreeterClientImpl implements Greeter {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GreeterServiceName;
    this.rpc = rpc;
    this.SayHello = this.SayHello.bind(this);
    this.SayGoodbye = this.SayGoodbye.bind(this);
  }
  SayHello(request: HelloRequest): Promise<HelloResponse> {
    const data = HelloRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'SayHello', data);
    return promise.then((data) => HelloResponse.decode(_m0.Reader.create(data)));
  }

  SayGoodbye(request: GoodbyeRequest): Promise<GoodbyeResponse> {
    const data = GoodbyeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'SayGoodbye', data);
    return promise.then((data) => GoodbyeResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: {
        options?: { [key: string]: any };
        methods?: { [key: string]: { [key: string]: any } };
      };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: {
      [key: string]: {
        options?: { [key: string]: any };
        values?: { [key: string]: { [key: string]: any } };
      };
    };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    name: 'helloworld.proto',
    package: 'helloworld',
    dependency: ['goodbye.proto'],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: 'HelloRequest',
        field: [
          {
            name: 'name',
            number: 1,
            label: 1,
            type: 9,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'name',
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
      {
        name: 'HelloResponse',
        field: [
          {
            name: 'message',
            number: 1,
            label: 1,
            type: 9,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'message',
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [],
    service: [
      {
        name: 'Greeter',
        method: [
          {
            name: 'SayHello',
            inputType: '.helloworld.HelloRequest',
            outputType: '.helloworld.HelloResponse',
            options: { deprecated: false, idempotencyLevel: 0, uninterpretedOption: [] },
            clientStreaming: false,
            serverStreaming: false,
          },
          {
            name: 'SayGoodbye',
            inputType: '.helloworld.GoodbyeRequest',
            outputType: '.helloworld.GoodbyeResponse',
            options: { deprecated: false, idempotencyLevel: 0, uninterpretedOption: [] },
            clientStreaming: false,
            serverStreaming: false,
          },
        ],
        options: undefined,
      },
    ],
    extension: [],
    options: undefined,
    sourceCodeInfo: {
      location: [
        {
          path: [6, 0, 2, 0],
          span: [8, 2, 56],
          leadingComments: ' Sends a greeting\n',
          trailingComments: '',
          leadingDetachedComments: [],
        },
        {
          path: [6, 0, 2, 1],
          span: [10, 2, 62],
          leadingComments: ' Sends a goodbye\n',
          trailingComments: '',
          leadingDetachedComments: [],
        },
        {
          path: [4, 0],
          span: [14, 0, 17, 1],
          leadingComments: " The request message containing the user's name.\n",
          trailingComments: '',
          leadingDetachedComments: [],
        },
        {
          path: [4, 0, 2, 0],
          span: [16, 2, 18],
          leadingComments: ' The name of the person to greet\n',
          trailingComments: '',
          leadingDetachedComments: [],
        },
      ],
    },
    syntax: 'proto3',
  }),
  references: {
    '.helloworld.HelloRequest': HelloRequest,
    '.helloworld.HelloResponse': HelloResponse,
    '.helloworld.Greeter': GreeterClientImpl,
  },
  dependencies: [protoMetadata1],
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
