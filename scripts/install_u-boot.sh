#!/bin/bash
#compile boot.cmd into a boot.scr for u-boot
mkimage -C none -A arm64 -T script -d $UBOOT_SCRIPT_FILE ${OUTPUT_DIR}/boot.scr
sudo cp ${OUTPUT_DIR}/boot.scr ${PROJECT_ROOT_DIR}/mount/boot/boot.scr

#dont copy the u-boot binary like the commented out code, it needs to be at the right memory address per allwinner instructions. use dd with seek=8M
#sudo cp u-boot/u-boot-sunxi-with-spl.bin mount/boot/
sudo dd if=${UBOOT_FILE} of=${OUTPUT_FILE} seek=8 bs=1024 status=progress
