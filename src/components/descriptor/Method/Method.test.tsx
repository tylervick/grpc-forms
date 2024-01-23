import { render, screen } from '@test-utils';
import { Greeter } from '../../../../examples/protobuf-ts/helloworld';
import Method from './Method';

describe('Method component', () => {
  it('displays the method name', () => {
    render(<Method methodInfo={Greeter.methods[0]} />);
    expect(screen.getByText('SayHello')).toBeInTheDocument();
    expect(
      screen.getByText(
        'rpc SayHello (helloworld.HelloRequest) returns (helloworld.HelloResponse) {}',
      ),
    ).toBeInTheDocument();
  });

  it('renders snapshot', () => {
    const tree = render(<Method methodInfo={Greeter.methods[0]} />).asFragment();
    expect(tree).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="rounded-xl border bg-card text-card-foreground shadow"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="font-semibold leading-none tracking-tight"
            >
              SayHello
            </h3>
            <p
              class="text-sm text-muted-foreground"
            >
              <code
                class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
              >
                rpc SayHello (helloworld.HelloRequest) returns (helloworld.HelloResponse) {}
              </code>
            </p>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
