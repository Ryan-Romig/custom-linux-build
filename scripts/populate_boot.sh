#!/bin/bash

sudo mkdir -p ${PROJECT_ROOT_DIR}/mount/boot/boot/dtb
sudo cp $KERNEL_FILE ${PROJECT_ROOT_DIR}/mount/boot/boot
sudo cp $DEVICE_TREE_BINARY ${PROJECT_ROOT_DIR}/mount/boot/boot/dtb
mkimage -C none -A arm64 -T script -d $UBOOT_SCRIPT_FILE ${PROJECT_ROOT_DIR}/out/boot.scr
sudo cp ${PROJECT_ROOT_DIR}/out/boot.scr ${PROJECT_ROOT_DIR}/mount/boot/boot.scr
./scripts/install_u-boot.sh
