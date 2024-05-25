#!/bin/bash
DTB_PATCH_STRING='dtb-$(CONFIG_ARCH_SUNXI) += melodia.dtb'
WIRELESS_PATCH_STRING='obj-$(CONFIG_SPARD_WLAN_SUPPORT) += uwe5622/'

KCONFIG_PATCH_STRING='source "drivers/net/wireless/uwe5622/Kconfig"'


cp patch/melodia_defconfig ${PROJECT_ROOT_DIR}src/linux/arch/arm64/configs/

cp -r uwe5622 ${PROJECT_ROOT_DIR}src/linux/drivers/net/wireless/
# read text file, append to the end of the file
echo -e "${WIRELESS_PATCH_STRING}" >> ${PROJECT_ROOT_DIR}src/linux/drivers/net/wireless/Makefile

# Insert KCONFIG_PATCH_STRING above the line that reads "endif # WLAN"
sed -i "/endif # WLAN/i ${KCONFIG_PATCH_STRING}" ${PROJECT_ROOT_DIR}src/linux/drivers/net/wireless/Kconfig




