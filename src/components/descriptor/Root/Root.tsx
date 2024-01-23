import { memo } from 'react';
import { ProtoMetadata } from '../types';

export type RootProps = {
  metadata: ProtoMetadata;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Root({ metadata }: RootProps) {
  // metadata.fileDescriptor

  return <>{/* <Title></Title> */}</>;
}

const MemoizedRoot = memo(Root);

export default MemoizedRoot;
