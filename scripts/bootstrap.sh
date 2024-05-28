#!/bin/bash


export IMAGE_NAME="linux.img"
export DEVICE_TREE_NAME="sun50i-h616-orangepi-zero2w.dtb"
export PROJECT_ROOT_DIR=${PWD}/

export IMAGE_SIZE_MB=768
export BOOT_PARTITION_SIZE_MB=100
export LOOP_DEVICE=/dev/loop88
export UBOOT_SCRIPT_FILE=${PROJECT_ROOT_DIR}config/boot.cmd
export UBOOT_SCRIPT_OUT_FILE=${CACHE_DIR}/boot.scr
export ROOTFS_DIR=${PROJECT_ROOT_DIR}debootstrap

export OUTPUT_DIR=${PROJECT_ROOT_DIR}out
export CACHE_DIR=$OUTPUT_DIR/cache
export OUTPUT_FILE=${OUTPUT_DIR}/${IMAGE_NAME}
export KERNEL_FILE=${CACHE_DIR}/Image
export UBOOT_FILE=${CACHE_DIR}/u-boot-sunxi-with-spl.bin
export DEVICE_TREE_BINARY=${CACHE_DIR}/$DEVICE_TREE_NAME
export BL31_BIN=${CACHE_DIR}/bl31.bin
export MODULES_OUTPUT_PATH=${CACHE_DIR}/modules







