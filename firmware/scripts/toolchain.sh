#!/bin/bash
echo "Installing toolchain..."
sudo apt install -y flex bison gcc-aarch64-linux-gnu swig python3-dev libssl-dev u-boot-tools qemu-user-static gcc make bc libncurses5-dev libssl-dev dosfstools python3-pip
python3 -m pip install setuptools