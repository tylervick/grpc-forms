import { protoMetadata } from '../../../../examples/generated/helloworld';
import Method from './Method';

export default {
  title: 'components/descriptor/Method',
  component: Method,
};

export const Usage = () => (
  <Method methodDesc={protoMetadata.fileDescriptor.service[0].method[0]} />
);
