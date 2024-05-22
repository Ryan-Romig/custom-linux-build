#!/bin/bash
sudo losetup -P /dev/loop88 ${OUTPUT_FILE}
sudo mount /dev/loop88p1 ${PROJECT_ROOT_DIR}/mount/boot
sudo mount /dev/loop88p2 ${PROJECT_ROOT_DIR}/mount/rootfs