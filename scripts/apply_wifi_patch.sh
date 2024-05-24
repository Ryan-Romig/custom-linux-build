#!/bin/bash

cp patch/Kconfig ${PROJECT_ROOT_DIR}/src/linux/drivers/net/wireless/Kconfig
cp patch/Makefile ${PROJECT_ROOT_DIR}/src/linux/drivers/net/wireless/Makefile

cp patch/dts/melodia.dts ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/
cp patch/dts/Makefile ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/

cp patch/melodia_defconfig ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/configs/