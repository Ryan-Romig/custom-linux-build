#!/bin/bash
(
    cd ${PROJECT_ROOT_DIR}/src/linux
    ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) dtbs 
)
cp ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/sun50i-h618-orangepi-zero2w.dtb ${CACHE_DIR}