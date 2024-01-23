import { ServiceInfo } from '@protobuf-ts/runtime-rpc';
import { memo } from 'react';

export type ServiceProps = {
  serviceInfo: ServiceInfo;
};

function Service({ serviceInfo }: ServiceProps) {
  return (
    <>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {serviceInfo.typeName}
      </h1>
    </>
  );
}

const MemoizedService = memo(Service);

export default MemoizedService;
