#!/bin/bash
echo "Installing toolchain..."
sudo apt install -y parted util-linux dosfstools e2fsprogs flex bison gcc-aarch64-linux-gnu swig python3-dev libssl-dev u-boot-tools qemu-user-static gcc make bc libncurses5-dev libssl-dev dosfstools python3-pip rsync
python3 -m pip install setuptools