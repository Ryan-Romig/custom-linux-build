setenv rootdev "/dev/mmcblk0p2"
setenv rootfstype "ext4"
setenv verbosity "7"
setenv consoleargs "console=ttyS0,115200"
setenv bootargs "root=${rootdev} rootfstype=${rootfstype} rootwait rw ${consoleargs} consoleblank=0 loglevel=${verbosity} init=/sbin/init"
load mmc 0:1 ${fdt_addr_r} boot/dtb/sun50i-h618-orangepi-zero2w.dtb 
load mmc 0:1 ${kernel_addr_r} boot/Image
booti ${kernel_addr_r} - ${fdt_addr_r}
