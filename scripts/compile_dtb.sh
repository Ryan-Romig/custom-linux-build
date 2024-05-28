#!/bin/bash
(
    cd ${PROJECT_ROOT_DIR}src/linux
    ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) dtbs 
)
cp ${PROJECT_ROOT_DIR}src/linux/arch/arm64/boot/dts/allwinner/$DEVICE_TREE_NAME ${CACHE_DIR}