#!/bin/bash
WIRELESS_PATCH_STRING='obj-$(CONFIG_SPARD_WLAN_SUPPORT) += uwe5622/'

KCONFIG_PATCH_STRING='source "drivers/net/wireless/uwe5622/Kconfig"'


echo -e "${WIRELESS_PATCH_STRING}" >> ${PROJECT_ROOT_DIR}/src/linux/drivers/net/wireless/Makefile
sed -i "/endif # WLAN/i ${KCONFIG_PATCH_STRING}" ${PROJECT_ROOT_DIR}/src/linux/drivers/net/wireless/Kconfig

# cp patch/dts/melodia.dts ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/
# cp patch/dts/Makefile ${PROJECT_ROOT_DIR}/src/linux/arch/arm64/boot/dts/allwinner/

cp -rf ${PROJECT_ROOT_DIR}/patch/linux/* ${PROJECT_ROOT_DIR}/src/linux