import { TestTransport } from '@protobuf-ts/runtime-rpc';
import { Greeter } from '../../../../examples/protobuf-ts/helloworld';
import Service from './Service';

export default {
  title: 'components/descriptor/Service',
  component: Service,
};

export const Usage = () => <Service serviceInfo={Greeter} rpcTransport={new TestTransport()} />;
