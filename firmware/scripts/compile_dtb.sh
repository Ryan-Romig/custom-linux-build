#!/bin/bash
(
    cd ${SUBMODULE_PATH}/linux
    ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j$(nproc) dtbs 
)
cp ${SUBMODULE_PATH}/linux/arch/arm64/boot/dts/allwinner/sun50i-h618-orangepi-zero2w.dtb ${CACHE_DIR}