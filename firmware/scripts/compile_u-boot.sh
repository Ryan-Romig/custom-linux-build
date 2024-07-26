#!/bin/bash
(
cd ${SUBMODULE_PATH}/trusted-firmware-a
make CROSS_COMPILE=aarch64-linux-gnu- PLAT=sun50i_h616 DEBUG=1 bl31
cp ${SUBMODULE_PATH}/trusted-firmware-a/build/sun50i_h616/debug/bl31.bin ${CACHE_DIR}

cd $PROJECT_ROOT_DIR/firmware/src/u-boot
make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin orangepi_zero2w_defconfig
# make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin menuconfig
make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin

cp $PROJECT_ROOT_DIR/firmware/src/u-boot/u-boot-sunxi-with-spl.bin $CACHE_DIR
)

