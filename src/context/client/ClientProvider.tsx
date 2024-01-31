import { MethodInfo, RpcTransport, stackIntercept, UnaryCall } from '@protobuf-ts/runtime-rpc';
import { createContext, memo, ReactNode, useMemo } from 'react';

interface Client {
  makeRequest<I extends object, O extends object>(
    method: MethodInfo<I, O>,
    input: I,
  ): UnaryCall<I, O>;
}

class ClientImpl implements Client {
  constructor(private readonly transport: RpcTransport) {}

  makeRequest<I extends object, O extends object>(
    method: MethodInfo<I, O>,
    input: I,
  ): UnaryCall<I, O> {
    return stackIntercept<I, O>('unary', this.transport, method, {}, input);
  }
}

type ClientProviderProps = {
  children: ReactNode;
  transport: RpcTransport;
};

type ClientProviderState = {
  client: Client | undefined;
};

const initialState: ClientProviderState = {
  client: undefined,
};

const ClientProviderContext = createContext<ClientProviderState>(initialState);

const ClientProvider = memo(function ClientProvider({ children, transport }: ClientProviderProps) {
  const client = useMemo(() => new ClientImpl(transport), [transport]);

  return (
    <ClientProviderContext.Provider value={{ client }}>{children}</ClientProviderContext.Provider>
  );
});

export { ClientProvider, ClientProviderContext };
