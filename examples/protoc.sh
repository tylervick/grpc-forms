#!/usr/bin/env bash

# clean and create generated directory
rm -rf examples/generated
mkdir -p examples/generated

npx protoc \
  --ts_out=examples/protobuf-ts \
  --ts_opt=generate_dependencies,eslint_disable \
  -I=examples/proto \
  examples/proto/helloworld.proto
