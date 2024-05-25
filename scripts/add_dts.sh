#!/bin/bash

DTB_STRING='dtb-$(CONFIG_ARCH_SUNXI) += melodia.dtb'
DTB_PATH=${PROJECT_ROOT_DIR}src/linux/arch/arm64/boot/dts/allwinner/
echo -e "${DTB_STRING}" >> ${DTB_PATH}Makefile

