import { useContext } from 'react';
import { ClientProviderContext } from './ClientProvider';

const useClient = () => {
  const { client } = useContext(ClientProviderContext);

  if (client === undefined) {
    throw new Error('useClient must be used within a ClientProvider');
  }

  return client;
};

export { useClient };
