#!/bin/bash
WIRELESS_PATCH_STRING='obj-$(CONFIG_SPARD_WLAN_SUPPORT) += uwe5622/'
KCONFIG_PATCH_STRING='source "drivers/net/wireless/uwe5622/Kconfig"'
# patch make files
echo -e "${WIRELESS_PATCH_STRING}" >> ${SUBMODULE_PATH}/linux/drivers/net/wireless/Makefile
sed -i "/endif # WLAN/i ${KCONFIG_PATCH_STRING}" ${SUBMODULE_PATH}/linux/drivers/net/wireless/Kconfig
# sync patch folder to source folder
rsync -a ${PROJECT_ROOT_DIR}/firmware/patch/linux/ ${SUBMODULE_PATH}/linux