#!/bin/bash
(cd $PROJECT_ROOT_DIRsrc/u-boot
make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin   orangepi_zero2w_defconfig
#make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin menuconfig
make CROSS_COMPILE=aarch64-linux-gnu- BL31=$CACHE_DIR/bl31.bin

cp $PROJECT_ROOT_DIRsrc/u-boot/u-boot-sunxi-with-spl.bin $CACHE_DIR
)

