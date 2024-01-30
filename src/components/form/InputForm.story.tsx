import { GoodbyeRequest } from '../../../examples/protobuf-ts/goodbye';
import { InputForm } from './InputForm';

export default {
  title: 'components/form/InputForm',
  component: InputForm,
};

export const Usage = () => <InputForm messageType={GoodbyeRequest} />;
