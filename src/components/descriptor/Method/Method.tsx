import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { memo } from 'react';
import { MethodDescriptorProto } from 'ts-proto-descriptors';

export type MethodProps = {
  methodDesc: MethodDescriptorProto;
};

const Method = memo(function Method({ methodDesc }: MethodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{methodDesc.name}</CardTitle>
        <CardDescription>
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
            rpc {methodDesc.name} ({methodDesc.inputType}) returns ({methodDesc.outputType}) {'{}'}
          </code>
          {/* <Button>Button</Button> */}
        </CardDescription>
      </CardHeader>
    </Card>
  );
});

export default Method;
