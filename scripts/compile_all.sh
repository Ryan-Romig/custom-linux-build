#!/bin/bash
source ${PWD}/scripts/bootstrap.sh
./scripts/compile_trusted-firmare-a.sh
./scripts/compile_u-boot.sh
./scripts/compile_linux.sh