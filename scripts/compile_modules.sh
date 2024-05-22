#!/bin/bash
(cd ${PROJECT_ROOT_DIR}/src/linux
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j4 modules
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=$MODULES_OUTPUT_PATH make modules modules_install
)
cp -r $MODULES_OUTPUT_PATH/ ${CACHE_DIR}/