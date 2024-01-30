import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldInfo, ScalarType } from '@protobuf-ts/runtime';
import { memo } from 'react';

type ScalarFormItemProps = {
  fieldInfo: FieldInfo;
};

const ScalarFormItem = memo(function ScalarFormItem({ fieldInfo }: ScalarFormItemProps) {
  const { formItemId, id, name } = useFormField();

  if (fieldInfo.kind !== 'scalar') {
    throw new Error('Not a scalar field');
  }

  return (
    <FormItem className='mt-4'>
      {(() => {
        switch (fieldInfo.T) {
          case ScalarType.BOOL:
            return (
              <div className='flex flex-row items-start space-x-3 space-y-0'>
                <FormControl>
                  <Checkbox id={id} name={name} itemID={formItemId} />
                </FormControl>
                <FormLabel>{name}</FormLabel>
              </div>
            );
          case ScalarType.DOUBLE:
          case ScalarType.FLOAT:
          case ScalarType.INT64:
          case ScalarType.UINT64:
          case ScalarType.INT32:
          case ScalarType.FIXED64:
          case ScalarType.FIXED32:
            return (
              <>
                <FormLabel>{name}</FormLabel>
                <FormControl>
                  <Input type='number' id={id} name={name} itemID={formItemId} />
                </FormControl>
              </>
            );
          case ScalarType.STRING:
            return (
              <>
                <FormLabel>{name}</FormLabel>
                <FormControl>
                  <Input id={id} name={name} itemID={formItemId} />
                </FormControl>
              </>
            );
          default:
            return (
              <p className='text-sm font-medium'>
                No input for field {fieldInfo.name} of type {ScalarType[fieldInfo.T]}
              </p>
            );
        }
      })()}
      <FormDescription>{ScalarType[fieldInfo.T]}</FormDescription>
      <FormMessage />
    </FormItem>
  );
});

export { ScalarFormItem };
