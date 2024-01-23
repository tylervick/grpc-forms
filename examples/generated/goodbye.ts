/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { FileDescriptorProto } from 'ts-proto-descriptors';

export const protobufPackage = 'helloworld';

export enum GreetingType {
  UNKNOWN = 0,
  HELLO = 1,
  GOODBYE = 2,
  UNRECOGNIZED = -1,
}

export function greetingTypeFromJSON(object: any): GreetingType {
  switch (object) {
    case 0:
    case 'UNKNOWN':
      return GreetingType.UNKNOWN;
    case 1:
    case 'HELLO':
      return GreetingType.HELLO;
    case 2:
    case 'GOODBYE':
      return GreetingType.GOODBYE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return GreetingType.UNRECOGNIZED;
  }
}

export function greetingTypeToJSON(object: GreetingType): string {
  switch (object) {
    case GreetingType.UNKNOWN:
      return 'UNKNOWN';
    case GreetingType.HELLO:
      return 'HELLO';
    case GreetingType.GOODBYE:
      return 'GOODBYE';
    case GreetingType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface GoodbyeRequest {
  name: string;
  messageWithAllTypes: MessageWithAllTypes | undefined;
}

export interface GoodbyeResponse {
  message: string;
}

export interface MessageWithAllTypes {
  name: string;
  age: number;
  height: number;
  weight: number;
  married: boolean;
  friends: string[];
  nested: MessageWithAllTypes_NestedMessage | undefined;
  properties: { [key: string]: string };
  greeting: GreetingType;
  testOneofString?: string | undefined;
  testOneofInt32?: number | undefined;
}

export interface MessageWithAllTypes_NestedMessage {
  name: string;
}

export interface MessageWithAllTypes_PropertiesEntry {
  key: string;
  value: string;
}

function createBaseGoodbyeRequest(): GoodbyeRequest {
  return { name: '', messageWithAllTypes: undefined };
}

export const GoodbyeRequest = {
  encode(message: GoodbyeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.messageWithAllTypes !== undefined) {
      MessageWithAllTypes.encode(message.messageWithAllTypes, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoodbyeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoodbyeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.messageWithAllTypes = MessageWithAllTypes.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoodbyeRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      messageWithAllTypes: isSet(object.messageWithAllTypes)
        ? MessageWithAllTypes.fromJSON(object.messageWithAllTypes)
        : undefined,
    };
  },

  toJSON(message: GoodbyeRequest): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.messageWithAllTypes !== undefined) {
      obj.messageWithAllTypes = MessageWithAllTypes.toJSON(message.messageWithAllTypes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoodbyeRequest>, I>>(base?: I): GoodbyeRequest {
    return GoodbyeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoodbyeRequest>, I>>(object: I): GoodbyeRequest {
    const message = createBaseGoodbyeRequest();
    message.name = object.name ?? '';
    message.messageWithAllTypes =
      object.messageWithAllTypes !== undefined && object.messageWithAllTypes !== null
        ? MessageWithAllTypes.fromPartial(object.messageWithAllTypes)
        : undefined;
    return message;
  },
};

function createBaseGoodbyeResponse(): GoodbyeResponse {
  return { message: '' };
}

export const GoodbyeResponse = {
  encode(message: GoodbyeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoodbyeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoodbyeResponse();
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

  fromJSON(object: any): GoodbyeResponse {
    return { message: isSet(object.message) ? globalThis.String(object.message) : '' };
  },

  toJSON(message: GoodbyeResponse): unknown {
    const obj: any = {};
    if (message.message !== '') {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoodbyeResponse>, I>>(base?: I): GoodbyeResponse {
    return GoodbyeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GoodbyeResponse>, I>>(object: I): GoodbyeResponse {
    const message = createBaseGoodbyeResponse();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseMessageWithAllTypes(): MessageWithAllTypes {
  return {
    name: '',
    age: 0,
    height: 0,
    weight: 0,
    married: false,
    friends: [],
    nested: undefined,
    properties: {},
    greeting: 0,
    testOneofString: undefined,
    testOneofInt32: undefined,
  };
}

export const MessageWithAllTypes = {
  encode(message: MessageWithAllTypes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(16).int32(message.age);
    }
    if (message.height !== 0) {
      writer.uint32(29).float(message.height);
    }
    if (message.weight !== 0) {
      writer.uint32(33).double(message.weight);
    }
    if (message.married === true) {
      writer.uint32(40).bool(message.married);
    }
    for (const v of message.friends) {
      writer.uint32(50).string(v!);
    }
    if (message.nested !== undefined) {
      MessageWithAllTypes_NestedMessage.encode(message.nested, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.properties).forEach(([key, value]) => {
      MessageWithAllTypes_PropertiesEntry.encode(
        { key: key as any, value },
        writer.uint32(66).fork(),
      ).ldelim();
    });
    if (message.greeting !== 0) {
      writer.uint32(72).int32(message.greeting);
    }
    if (message.testOneofString !== undefined) {
      writer.uint32(82).string(message.testOneofString);
    }
    if (message.testOneofInt32 !== undefined) {
      writer.uint32(88).int32(message.testOneofInt32);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageWithAllTypes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageWithAllTypes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.height = reader.float();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.weight = reader.double();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.married = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.friends.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nested = MessageWithAllTypes_NestedMessage.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = MessageWithAllTypes_PropertiesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.properties[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.greeting = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.testOneofString = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.testOneofInt32 = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageWithAllTypes {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      age: isSet(object.age) ? globalThis.Number(object.age) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      weight: isSet(object.weight) ? globalThis.Number(object.weight) : 0,
      married: isSet(object.married) ? globalThis.Boolean(object.married) : false,
      friends: globalThis.Array.isArray(object?.friends)
        ? object.friends.map((e: any) => globalThis.String(e))
        : [],
      nested: isSet(object.nested)
        ? MessageWithAllTypes_NestedMessage.fromJSON(object.nested)
        : undefined,
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      greeting: isSet(object.greeting) ? greetingTypeFromJSON(object.greeting) : 0,
      testOneofString: isSet(object.testOneofString)
        ? globalThis.String(object.testOneofString)
        : undefined,
      testOneofInt32: isSet(object.testOneofInt32)
        ? globalThis.Number(object.testOneofInt32)
        : undefined,
    };
  },

  toJSON(message: MessageWithAllTypes): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.height !== 0) {
      obj.height = message.height;
    }
    if (message.weight !== 0) {
      obj.weight = message.weight;
    }
    if (message.married === true) {
      obj.married = message.married;
    }
    if (message.friends?.length) {
      obj.friends = message.friends;
    }
    if (message.nested !== undefined) {
      obj.nested = MessageWithAllTypes_NestedMessage.toJSON(message.nested);
    }
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    if (message.greeting !== 0) {
      obj.greeting = greetingTypeToJSON(message.greeting);
    }
    if (message.testOneofString !== undefined) {
      obj.testOneofString = message.testOneofString;
    }
    if (message.testOneofInt32 !== undefined) {
      obj.testOneofInt32 = Math.round(message.testOneofInt32);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageWithAllTypes>, I>>(base?: I): MessageWithAllTypes {
    return MessageWithAllTypes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageWithAllTypes>, I>>(
    object: I,
  ): MessageWithAllTypes {
    const message = createBaseMessageWithAllTypes();
    message.name = object.name ?? '';
    message.age = object.age ?? 0;
    message.height = object.height ?? 0;
    message.weight = object.weight ?? 0;
    message.married = object.married ?? false;
    message.friends = object.friends?.map((e) => e) || [];
    message.nested =
      object.nested !== undefined && object.nested !== null
        ? MessageWithAllTypes_NestedMessage.fromPartial(object.nested)
        : undefined;
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.greeting = object.greeting ?? 0;
    message.testOneofString = object.testOneofString ?? undefined;
    message.testOneofInt32 = object.testOneofInt32 ?? undefined;
    return message;
  },
};

function createBaseMessageWithAllTypes_NestedMessage(): MessageWithAllTypes_NestedMessage {
  return { name: '' };
}

export const MessageWithAllTypes_NestedMessage = {
  encode(
    message: MessageWithAllTypes_NestedMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageWithAllTypes_NestedMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageWithAllTypes_NestedMessage();
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

  fromJSON(object: any): MessageWithAllTypes_NestedMessage {
    return { name: isSet(object.name) ? globalThis.String(object.name) : '' };
  },

  toJSON(message: MessageWithAllTypes_NestedMessage): unknown {
    const obj: any = {};
    if (message.name !== '') {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageWithAllTypes_NestedMessage>, I>>(
    base?: I,
  ): MessageWithAllTypes_NestedMessage {
    return MessageWithAllTypes_NestedMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageWithAllTypes_NestedMessage>, I>>(
    object: I,
  ): MessageWithAllTypes_NestedMessage {
    const message = createBaseMessageWithAllTypes_NestedMessage();
    message.name = object.name ?? '';
    return message;
  },
};

function createBaseMessageWithAllTypes_PropertiesEntry(): MessageWithAllTypes_PropertiesEntry {
  return { key: '', value: '' };
}

export const MessageWithAllTypes_PropertiesEntry = {
  encode(
    message: MessageWithAllTypes_PropertiesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageWithAllTypes_PropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageWithAllTypes_PropertiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageWithAllTypes_PropertiesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : '',
      value: isSet(object.value) ? globalThis.String(object.value) : '',
    };
  },

  toJSON(message: MessageWithAllTypes_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== '') {
      obj.key = message.key;
    }
    if (message.value !== '') {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageWithAllTypes_PropertiesEntry>, I>>(
    base?: I,
  ): MessageWithAllTypes_PropertiesEntry {
    return MessageWithAllTypes_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MessageWithAllTypes_PropertiesEntry>, I>>(
    object: I,
  ): MessageWithAllTypes_PropertiesEntry {
    const message = createBaseMessageWithAllTypes_PropertiesEntry();
    message.key = object.key ?? '';
    message.value = object.value ?? '';
    return message;
  },
};

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
    name: 'goodbye.proto',
    package: 'helloworld',
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [
      {
        name: 'GoodbyeRequest',
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
          {
            name: 'message_with_all_types',
            number: 2,
            label: 1,
            type: 11,
            typeName: '.helloworld.MessageWithAllTypes',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'messageWithAllTypes',
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
        name: 'GoodbyeResponse',
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
      {
        name: 'MessageWithAllTypes',
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
          {
            name: 'age',
            number: 2,
            label: 1,
            type: 5,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'age',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'height',
            number: 3,
            label: 1,
            type: 2,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'height',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'weight',
            number: 4,
            label: 1,
            type: 1,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'weight',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'married',
            number: 5,
            label: 1,
            type: 8,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'married',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'friends',
            number: 6,
            label: 3,
            type: 9,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'friends',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'nested',
            number: 7,
            label: 1,
            type: 11,
            typeName: '.helloworld.MessageWithAllTypes.NestedMessage',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'nested',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'properties',
            number: 8,
            label: 3,
            type: 11,
            typeName: '.helloworld.MessageWithAllTypes.PropertiesEntry',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'properties',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'greeting',
            number: 9,
            label: 1,
            type: 14,
            typeName: '.helloworld.GreetingType',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'greeting',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'test_oneof_string',
            number: 10,
            label: 1,
            type: 9,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'testOneofString',
            options: undefined,
            proto3Optional: false,
          },
          {
            name: 'test_oneof_int32',
            number: 11,
            label: 1,
            type: 5,
            typeName: '',
            extendee: '',
            defaultValue: '',
            oneofIndex: 0,
            jsonName: 'testOneofInt32',
            options: undefined,
            proto3Optional: false,
          },
        ],
        extension: [],
        nestedType: [
          {
            name: 'NestedMessage',
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
            name: 'PropertiesEntry',
            field: [
              {
                name: 'key',
                number: 1,
                label: 1,
                type: 9,
                typeName: '',
                extendee: '',
                defaultValue: '',
                oneofIndex: 0,
                jsonName: 'key',
                options: undefined,
                proto3Optional: false,
              },
              {
                name: 'value',
                number: 2,
                label: 1,
                type: 9,
                typeName: '',
                extendee: '',
                defaultValue: '',
                oneofIndex: 0,
                jsonName: 'value',
                options: undefined,
                proto3Optional: false,
              },
            ],
            extension: [],
            nestedType: [],
            enumType: [],
            extensionRange: [],
            oneofDecl: [],
            options: {
              messageSetWireFormat: false,
              noStandardDescriptorAccessor: false,
              deprecated: false,
              mapEntry: true,
              uninterpretedOption: [],
            },
            reservedRange: [],
            reservedName: [],
          },
        ],
        enumType: [],
        extensionRange: [],
        oneofDecl: [{ name: 'test_oneof', options: undefined }],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    enumType: [
      {
        name: 'GreetingType',
        value: [
          { name: 'UNKNOWN', number: 0, options: undefined },
          {
            name: 'HELLO',
            number: 1,
            options: undefined,
          },
          { name: 'GOODBYE', number: 2, options: undefined },
        ],
        options: undefined,
        reservedRange: [],
        reservedName: [],
      },
    ],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: { location: [] },
    syntax: 'proto3',
  }),
  references: {
    '.helloworld.GreetingType': GreetingType,
    '.helloworld.GoodbyeRequest': GoodbyeRequest,
    '.helloworld.GoodbyeResponse': GoodbyeResponse,
    '.helloworld.MessageWithAllTypes': MessageWithAllTypes,
    '.helloworld.MessageWithAllTypes.NestedMessage': MessageWithAllTypes_NestedMessage,
    '.helloworld.MessageWithAllTypes.PropertiesEntry': MessageWithAllTypes_PropertiesEntry,
  },
  dependencies: [],
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

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
