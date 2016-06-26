#!/usr/bin/env bash

rm -rf build-test
cd test
tsc
cd ..
jasmine-node --matchall ./build-test/test/**/*.js
