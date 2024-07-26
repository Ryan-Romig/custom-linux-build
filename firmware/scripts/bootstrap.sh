#!/bin/bash


export IMAGE_NAME="linux.img"
mkdir -p out/cache/modules
mkdir -p mount/boot
mkdir -p mount/rootfs
export PROJECT_ROOT_DIR=${PWD}
export OUTPUT_DIR=${PROJECT_ROOT_DIR}/out
export CACHE_DIR=$OUTPUT_DIR/cache
export MODULES_OUTPUT_PATH=${CACHE_DIR}/modules
export SUBMODULE_PATH=${PROJECT_ROOT_DIR}/firmware/src


export LOOP_DEVICE=/dev/loop88

export OUTPUT_FILE=${OUTPUT_DIR}/${IMAGE_NAME}

export UBOOT_FILE=${SUBMODULE_PATH}/src/u-boot/u-boot-sunxi-with-spl.bin
export UBOOT_SCRIPT_FILE=${PROJECT_ROOT_DIR}/config/boot.cmd
export KERNEL_FILE=${SUBMODULE_PATH}/linux/arch/arm64/boot/Image
export ROOTFS_DIR=${PROJECT_ROOT_DIR}/debootstrap

export DEVICE_TREE_BINARY=${SUBMODULE_PATH}/linux/arch/arm64/boot/dts/allwinner/sun50i-h618-orangepi-zero2w.dtb
export IMAGE_SIZE_MB=1024
export BOOT_PARTITION_SIZE_MB=100


export DEVICE_TREE_BINARY=${CACHE_DIR}/sun50i-h618-orangepi-zero2w.dtb
export KERNEL_FILE=${CACHE_DIR}/Image
export UBOOT_FILE=${CACHE_DIR}/u-boot-sunxi-with-spl.bin
export UBOOT_SCRIPT_OUT_FILE=${CACHE_DIR}/boot.scr
export BL31_BIN=${CACHE_DIR}/bl31.bin