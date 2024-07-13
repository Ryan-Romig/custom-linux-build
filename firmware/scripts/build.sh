#!/bin/bash


source scripts/bootstrap.sh
echo $OUTPUT_FILE $OUTPUT_DIR $PROJECT_ROOT_DIR

# create image file 
dd if=/dev/zero of=$OUTPUT_FILE bs=1M count=$IMAGE_SIZE_MB status=progress
# partition image file
#----set the label to msdos, not gpt
sudo  parted $OUTPUT_FILE mklabel msdos
#----create boot partition starting at 1MB to skip any vendor specific sectors and ending at 100MB, increase as needed.
#--this is set in the bootstrap.sh file
sudo  parted $OUTPUT_FILE mkpart primary fat32 1MiB $BOOT_PARTITION_SIZE_MB
#----create rootfs partition starting at 100MB to end of disk. 
sudo  parted $OUTPUT_FILE mkpart primary ext4 $BOOT_PARTITION_SIZE_MB 100%

#mount the image to loop device so so we can format the partitions
sudo losetup -P /dev/loop88 ${OUTPUT_FILE}
#format the partitions
#---label the boot partition BOOT and format as fat32, the label shows up as the mount name 
sudo mkfs.vfat -F 32 -n BOOT /dev/loop88p1
#---label the rootfs partition ROOTFS and format as ext4
sudo mkfs.ext4 -L ROOTFS /dev/loop88p2
# mount the partitions to folder so we can write data to them
sudo mount /dev/loop88p1 ${PROJECT_ROOT_DIR}/mount/boot
sudo mount /dev/loop88p2 ${PROJECT_ROOT_DIR}/mount/rootfs
#make the boot folder structure
sudo mkdir -p ${PROJECT_ROOT_DIR}/mount/boot/boot/dtb

#copy linux kernel to the boot partition
sudo cp $KERNEL_FILE ${PROJECT_ROOT_DIR}/mount/boot/boot

sudo cp $DEVICE_TREE_BINARY ${PROJECT_ROOT_DIR}/mount/boot/boot/dtb
#sudo cp u-boot/arch/arm/dts/sun50i-h618-orangepi-zero2w.dtb mount/boot/boot/

#compile boot.cmd into a boot.scr for u-boot
mkimage -C none -A arm64 -T script -d $UBOOT_SCRIPT_FILE ${UBOOT_SCRIPT_OUT_FILE}
sudo cp ${UBOOT_SCRIPT_OUT_FILE} ${PROJECT_ROOT_DIR}/mount/boot/boot.scr

#dont copy the u-boot binary like the commented out code, it needs to be at the right memory address per allwinner instructions. use dd with seek=8M
#sudo cp u-boot/u-boot-sunxi-with-spl.bin mount/boot/
sudo dd if=${UBOOT_FILE} of=/dev/loop88 seek=8 bs=1024 status=progress


# curl https://images.linuxcontainers.org/images/debian/bullseye/arm64/default/20240604_05%3A24/rootfs.tar.xz -o rootfs.tar.xz >> /dev/null
# mkdir -p ${CACHE_DIR}/rootfs
# tar -xvf rootfs.tar.xz -C ${PROJECT_ROOT_DIR}/out/cache/rootfs/ >> /dev/null
sudo cp -r ${PROJECT_ROOT_DIR}/out/cache/rootfs/* ${PROJECT_ROOT_DIR}/mount/rootfs >> /dev/null
#sudo cp -r ${PROJECT_ROOT_DIR}/src/rootfs/rootfs/* ${PROJECT_ROOT_DIR}/mount/rootfs >> /dev/null

#install debootstrap to rootfs
#sudo debootstrap --arch=arm64 --foreign bullseye  mount/rootfs
#sudo cp /usr/bin/qemu-aarch64-static mount/rootfs/usr/bin/
#configure debootstrap from another machine using qemu to emulate arm64 to run the /bin/sh shell 
#sudo chroot mount/rootfs /usr/bin/qemu-aarch64-static /bin/sh -i



sudo cp -r ${CACHE_DIR}/modules/lib/* ${PROJECT_ROOT_DIR}/mount/rootfs/lib/ >> /dev/null
sudo umount ${PROJECT_ROOT_DIR}/mount/*
#sudo dd if=/dev/loop88 of=/dev/sdc bs=1M status=progress
sudo losetup -d /dev/loop88


echo "Complete, please burn the .img to sd card with etcher(linux or mac) rufus(windows) or use dd command"
