import { Greeter } from '../../../../examples/protobuf-ts/helloworld';
import Method from './Method';

export default {
  title: 'components/descriptor/Method',
  component: Method,
};

export const Usage = () => <Method methodInfo={Greeter.methods[0]} />;
