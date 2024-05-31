






make CROSS_COMPILE=aarch64-linux-gnu- PLAT=<platform> DEBUG=1 bl31




make CROSS_COMPILE=aarch64-linux-gnu- BL31=<path_to_arm-trusted-firmware>/build/sun50i_a64/debug/bl31.bin  <board_name>_defconfig
make CROSS_COMPILE=aarch64-linux-gnu- BL31=<path_to_arm-trusted-firmware>/build/sun50i_a64/debug/bl31.bin menuconfig
make CROSS_COMPILE=aarch64-linux-gnu- BL31=<path_to_arm-trusted-firmware>/build/sun50i_a64/debug/bl31.bin






ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make defconfig
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j4 Image
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j4 dtbs

ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- make -j4 modules
ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=<any-path-you-like> make modules modules_install