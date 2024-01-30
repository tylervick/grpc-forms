import { FieldInfoWithRules } from '@/components/form/FieldInfoFormField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FieldInfo, IMessageType } from '@protobuf-ts/runtime';
import { memo, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

type MessageFormProps<M extends object> = {
  messageType: IMessageType<M>;
};

const MessageForm = memo(function MessageForm<M extends object>({
  messageType,
}: MessageFormProps<M>) {
  const form = useForm();

  // Group fields by oneof if present
  const fieldNodes = useMemo(() => {
    type GroupedFields = { [key: string]: FieldInfo[] };

    const groupedFields = messageType.fields.reduce<GroupedFields>((group, field) => {
      const key = field.oneof || field.no.toString();
      if (!group[key]) {
        group[key] = [];
      }
      group[key].push(field);
      return group;
    }, {});

    return Object.values(groupedFields).map((group, index) => {
      if (group.length > 1) {
        return (
          <Tabs
            key={`${group[0].oneof}-${index}`}
            defaultValue={group[0].name}
            className='w-full'
            onValueChange={(selectedFieldName) => {
              group
                .filter((fi) => fi.name == selectedFieldName)
                .forEach((fi) => {
                  form.resetField(fi.name);
                });
            }}
          >
            {group[0].oneof}
            <TabsList className={`flex w-full`}>
              {group.map((field) => (
                <TabsTrigger key={field.no} value={field.name} className='flex-grow'>
                  {field.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {group.map((field) => (
              <TabsContent key={field.no} value={field.name}>
                <FieldInfoWithRules fieldInfo={field} />
              </TabsContent>
            ))}
          </Tabs>
        );
      } else {
        return <FieldInfoWithRules key={group[0].no} fieldInfo={group[0]} />;
      }
    });
  }, [form, messageType.fields]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{messageType.typeName}</CardTitle>
      </CardHeader>
      <CardContent>{fieldNodes}</CardContent>
    </Card>
  );
});

export { MessageForm };
