#!/bin/bash
(cd ${PROJECT_ROOT_DIR}/src/linux
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make defconfig
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) Image
)