import { memo } from 'react';

const HomePage = memo(function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-6xl font-bold'>Welcome to grpc-forms-example!</h1>
    </div>
  );
});

export { HomePage };
