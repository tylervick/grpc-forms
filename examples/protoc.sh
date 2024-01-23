#!/usr/bin/env bash

# clean and create generated directory
rm -rf examples/generated
mkdir -p examples/generated

# Generate the gRPC code using the protoc plugin.
# If running via npm script, protoc and the plugin are automatically loaded from node_modules.
protoc \
  --ts_proto_opt=esModuleInterop=true,outputSchema=true \
  --ts_proto_out=examples/generated \
  -I=examples/proto \
  examples/proto/helloworld.proto
