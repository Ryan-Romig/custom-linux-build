#!/bin/bash

export IMAGE_NAME="linux.img"
export PROJECT_ROOT_DIR=${PWD}
export OUTPUT_DIR=${PROJECT_ROOT_DIR}/out
export OUTPUT_FILE=${OUTPUT_DIR}/${IMAGE_NAME}
export UBOOT_FILE=${PROJECT_ROOT_DIR}/src/u-boot/u-boot-sunxi-with-spl.bin
export UBOOT_SCRIPT_FILE=${PROJECT_ROOT_DIR}/config/boot.cmd
export KERNEL_FILE=${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/Image
export ROOTFS_DIR=${PROJECT_ROOT_DIR}/debootstrap
export DEVICE_TREE_BINARY=${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/sun50i-h618-orangepi-zero2w.dtb
export IMAGE_SIZE_MB=512
export BOOT_PARTITION_SIZE_MB=100
