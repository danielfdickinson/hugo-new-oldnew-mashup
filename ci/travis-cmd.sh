#!/bin/bash

#./tests/scripts/prepare_test_environment
mkdir -p exampleSite/themes
( cd exampleSite/themes && ln -s ../.. oldnew-mashup )
mkdir binaries
cd binaries || exit 1
wget https://github.com/gohugoio/hugo/releases/download/v0.69.2/hugo_0.74.2_Linux-64bit.tar.gz
tar -xzf hugo_0.74.2_Linux-64bit.tar.gz
cd ..
PATH=$(pwd)/binaries:./node_modules/.bin:$PATH
export PATH
npm install
hugo version >&2
./tests/scripts/run_all_tests
