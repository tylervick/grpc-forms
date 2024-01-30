import { MessageForm } from '@/components/form/MessageForm';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form';
import { FieldInfo, RepeatType } from '@protobuf-ts/runtime';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { memo } from 'react';
import { ControllerProps, FieldPath, FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { ScalarFormItem } from './ScalarFormItem';

type FieldInfoFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Partial<ControllerProps<TFieldValues, TName>> & {
  fieldInfo: FieldInfo;
};

const FieldInfoFormField = memo(function FieldInfoFormField({
  fieldInfo,
  ...props
}: FieldInfoFormFieldProps) {
  const { control } = useForm();

  return (
    <FormField
      key={fieldInfo.name}
      control={control}
      name={fieldInfo.name}
      render={() => {
        if (fieldInfo.kind === 'scalar') {
          return <ScalarFormItem fieldInfo={fieldInfo} />;
        }

        if (fieldInfo.kind === 'message') {
          return (
            <>
              <h5 className='text-base font-medium mt-4'>{fieldInfo.name}</h5>
              <MessageForm messageType={fieldInfo.T()} />
            </>
          );
        }
        return <></>;
      }}
      {...props}
    />
  );
});

const FieldInfoWithRules = memo(function FieldInfoWithRules({
  fieldInfo,
}: {
  fieldInfo: FieldInfo;
}) {
  const { control } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: fieldInfo.name,
    control: control,
  });

  if (fieldInfo.repeat === RepeatType.NO) {
    return <FieldInfoFormField fieldInfo={fieldInfo} />;
  }

  return (
    <>
      <h5 className='text-base font-medium pt-4'>{fieldInfo.name}</h5>
      {fields.map((field, index) => (
        <div className='flex items-baseline space-x-3 space-y-0' key={field.id}>
          <div className='flex-grow'>
            <FieldInfoFormField fieldInfo={fieldInfo} name='' />
          </div>
          <Button
            variant='destructive'
            size='icon'
            className='translate-y-0.5'
            onClick={() => remove(index)}
          >
            <MinusIcon />
          </Button>
        </div>
      ))}
      <Button variant='outline' size='icon' onClick={append} className='mt-4'>
        <PlusIcon />
      </Button>
    </>
  );
});

export { FieldInfoWithRules };
