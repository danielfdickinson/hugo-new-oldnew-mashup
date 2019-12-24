#!/bin/bash

#./tests/scripts/prepare_test_environment
mkdir -p exampleSite/themes
( cd exampleSite/themes && ln -s ../.. oldnew-mashup )
mkdir binaries
cd binaries
wget https://github.com/gohugoio/hugo/releases/download/v0.62.0/hugo_extended_0.62.0_Linux-64bit.tar.gz
tar -xzf hugo_extended_0.62.0_Linux-64bit.tar.gz
cd ..
export PATH=$(pwd)/binaries:$PATH
./tests/scripts/run_all_tests
