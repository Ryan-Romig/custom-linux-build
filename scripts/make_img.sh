#!/bin/bash

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