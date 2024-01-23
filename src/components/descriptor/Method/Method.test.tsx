import { render, screen } from '@test-utils';
import { protoMetadata } from '../../../../examples/generated/helloworld';
import Method from './Method';

describe('Method component', () => {
  it('displays the method name', () => {
    render(<Method methodDesc={protoMetadata.fileDescriptor.service[0].method[0]} />);
    expect(screen.getByText('SayHello')).toBeInTheDocument();
    expect(
      screen.getByText(
        'rpc SayHello (.helloworld.HelloRequest) returns (.helloworld.HelloResponse) {}',
      ),
    ).toBeInTheDocument();
  });

  it('renders snapshot', () => {
    const tree = render(
      <Method methodDesc={protoMetadata.fileDescriptor.service[0].method[0]} />,
    ).asFragment();
    expect(tree).toMatchInlineSnapshot(`
      <DocumentFragment>
        <style
          data-mantine-styles="classes"
        >
          @media (max-width: 35.99375em) {.mantine-visible-from-xs {display: none !important;}}@media (min-width: 36em) {.mantine-hidden-from-xs {display: none !important;}}@media (max-width: 47.99375em) {.mantine-visible-from-sm {display: none !important;}}@media (min-width: 48em) {.mantine-hidden-from-sm {display: none !important;}}@media (max-width: 61.99375em) {.mantine-visible-from-md {display: none !important;}}@media (min-width: 62em) {.mantine-hidden-from-md {display: none !important;}}@media (max-width: 74.99375em) {.mantine-visible-from-lg {display: none !important;}}@media (min-width: 75em) {.mantine-hidden-from-lg {display: none !important;}}@media (max-width: 87.99375em) {.mantine-visible-from-xl {display: none !important;}}@media (min-width: 88em) {.mantine-hidden-from-xl {display: none !important;}}
        </style>
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
              rpc SayHello (.helloworld.HelloRequest) returns (.helloworld.HelloResponse) {}
            </p>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
