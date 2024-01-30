import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { DevTool } from '@hookform/devtools';
import { IMessageType } from '@protobuf-ts/runtime';
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { MessageForm } from './MessageForm';

export type InputFormProps<M extends object> = {
  messageType: IMessageType<M>;
};

const InputForm = memo(function InputForm<M extends object>({ messageType }: InputFormProps<M>) {
  const form = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <DevTool control={form.control} placement='top-left' />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <MessageForm messageType={messageType} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </>
  );
});

export { InputForm };
