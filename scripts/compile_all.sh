#!/bin/bash
source ${PWD}/scripts/bootstrap.sh
./compile_trusted-firmare-a.sh
./compile_u-boot.sh
./compile_linux.sh