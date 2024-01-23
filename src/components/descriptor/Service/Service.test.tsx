import { render, screen } from '@test-utils';
import { Greeter } from '../../../../examples/protobuf-ts/helloworld';
import Service from './Service';

describe('Service component', () => {
  it('displays the service name', () => {
    render(<Service serviceInfo={Greeter} />);
    expect(screen.getByText('helloworld.Greeter')).toBeInTheDocument();
  });
});
