#!/usr/bin/env bash

# clean and create generated directory
rm -rf examples/generated
mkdir -p examples/generated

# Generate the gRPC code using the protoc plugin.
# If running via npm script, protoc and the plugin are automatically loaded from node_modules.
# protoc \
#   --ts_proto_opt=esModuleInterop=true,outputSchema=true,outputTypeRegistry=true,outputServices=generic-definitions,outputServices=default \
#   --ts_proto_out=examples/generated \
#   -I=examples/proto \
#   examples/proto/helloworld.proto


npx protoc \
  --ts_out=examples/protobuf-ts \
  --ts_opt=generate_dependencies,eslint_disable \
  -I=examples/proto \
  examples/proto/helloworld.proto
