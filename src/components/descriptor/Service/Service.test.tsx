import { render, screen } from '@test-utils';
import { protoMetadata } from '../../../../examples/generated/helloworld';
import Service from './Service';

describe('Service component', () => {
  it('displays the service name', () => {
    render(<Service serviceDesc={protoMetadata.fileDescriptor.service[0]} />);
    expect(screen.getByText('Greeter')).toBeInTheDocument();
  });
});
