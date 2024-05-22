#!/bin/bash

#format the partitions
sudo losetup -P /dev/loop88 ${OUTPUT_FILE}
#---label the boot partition BOOT and format as fat32, the label shows up as the mount name 
sudo mkfs.vfat -F 32 -n BOOT /dev/loop88p1
#---label the rootfs partition ROOTFS and format as ext4
sudo mkfs.ext4 -L ROOTFS /dev/loop88p2
sudo losetup -d /dev/loop88