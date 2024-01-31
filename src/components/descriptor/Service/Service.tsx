import { ClientProvider } from '@/context/client/ClientProvider';
import { RpcTransport, ServiceInfo } from '@protobuf-ts/runtime-rpc';
import { memo } from 'react';
import Method from '../Method/Method';

export type ServiceProps = {
  serviceInfo: ServiceInfo;
  rpcTransport: RpcTransport;
};

function Service({ serviceInfo, rpcTransport }: ServiceProps) {
  return (
    <ClientProvider transport={rpcTransport}>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {serviceInfo.typeName}
      </h1>
      <div className='flex flex-col gap-2'>
        {serviceInfo.methods.map((method) => (
          <Method key={method.name} methodInfo={method} />
        ))}
      </div>
    </ClientProvider>
  );
}

const MemoizedService = memo(Service);

export default MemoizedService;
