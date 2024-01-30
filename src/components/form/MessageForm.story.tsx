import { useForm } from 'react-hook-form';
import { MessageWithAllTypes } from '../../../examples/protobuf-ts/goodbye';
import { Form } from '../ui/form';
import { MessageForm } from './MessageForm';

export default {
  title: 'components/form/MessageForm',
  component: MessageForm,
};

export const Usage = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <MessageForm messageType={MessageWithAllTypes} />
    </Form>
  );
};
