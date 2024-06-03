#!/bin/bash
(cd ${PROJECT_ROOT_DIR}/src/linux
# ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make melodia_defconfig
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j12 modules
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=$MODULES_OUTPUT_PATH make -j12 modules modules_install
)
cp -r external/lib out/cache/modules