#!/bin/bash

(cd ${SUBMODULE_PATH}/linux
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make melodia_defconfig
# ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make menuconfig

ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) Image
)
cp ${SUBMODULE_PATH}/linux/arch/arm64/boot/Image ${CACHE_DIR}