import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MethodInfo } from '@protobuf-ts/runtime-rpc';
import { memo } from 'react';

export type MethodProps = {
  methodInfo: MethodInfo;
};

const Method = memo(function Method({ methodInfo }: MethodProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{methodInfo.name}</CardTitle>
        <CardDescription>
          <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
            rpc {methodInfo.name} ({methodInfo.I.typeName}) returns ({methodInfo.O.typeName}) {'{}'}
          </code>
          {/* <Button>Button</Button> */}
        </CardDescription>
      </CardHeader>
    </Card>
  );
});

export default Method;
