import { memo } from 'react';
import { ServiceDescriptorProto } from 'ts-proto-descriptors';

export type ServiceProps = {
  serviceDesc: ServiceDescriptorProto;
};

function Service({ serviceDesc }: ServiceProps) {
  return (
    <>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {serviceDesc.name}
      </h1>
    </>
  );
}

const MemoizedService = memo(Service);

export default MemoizedService;
