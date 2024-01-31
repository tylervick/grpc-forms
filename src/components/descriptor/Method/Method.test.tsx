import { render, screen } from '@test-utils';
import { Greeter } from '../../../../examples/protobuf-ts/helloworld';
import Method from './Method';

describe('Method component', () => {
  it('displays the method name', () => {
    render(<Method methodInfo={Greeter.methods[0]} />);
    expect(screen.getByText('Method SayHello')).toBeInTheDocument();
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
              Method SayHello
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
          <div
            class="p-6 pt-0"
          >
            Request
            <form>
              <div
                class="flex flex-col gap-4"
              >
                <div
                  class="rounded-xl border bg-card text-card-foreground shadow"
                >
                  <div
                    class="flex flex-col space-y-1.5 p-6"
                  >
                    <h3
                      class="font-semibold leading-none tracking-tight"
                    >
                      helloworld.HelloRequest
                    </h3>
                  </div>
                  <div
                    class="p-6 pt-0"
                  >
                    <div
                      class="space-y-2 mt-4"
                    >
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for=":r1:-form-item"
                      >
                        name
                      </label>
                      <input
                        aria-describedby=":r1:-form-item-description"
                        aria-invalid="false"
                        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        itemid="undefined-form-item"
                        name="name"
                      />
                      <p
                        class="text-[0.8rem] text-muted-foreground"
                        id=":r1:-form-item-description"
                      >
                        STRING
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 self-end"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
