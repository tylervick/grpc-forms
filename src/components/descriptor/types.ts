import type { FileDescriptorProto } from 'ts-proto-descriptors';

type ProtoMetaMessageOptions = {
  options?: { [key: string]: unknown };
  fields?: { [key: string]: { [key: string]: unknown } };
  oneof?: { [key: string]: { [key: string]: unknown } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: unknown };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: unknown };
    services?: {
      [key: string]: {
        options?: { [key: string]: unknown };
        methods?: { [key: string]: { [key: string]: unknown } };
      };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: {
      [key: string]: {
        options?: { [key: string]: unknown };
        values?: { [key: string]: { [key: string]: unknown } };
      };
    };
  };
}
