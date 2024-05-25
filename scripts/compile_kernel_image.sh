#!/bin/bash
(cd ${PROJECT_ROOT_DIR}src/linux
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make melodia_defconfig

ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) Image
)
cp ${PROJECT_ROOT_DIR}src/linux/arch/arm64/boot/Image ${CACHE_DIR}