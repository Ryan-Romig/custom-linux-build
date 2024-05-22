#!/bin/bash
(
cd ${PROJECT_ROOT_DIR}/src/trusted-firmware-a
make CROSS_COMPILE=aarch64-linux-gnu- PLAT=sun50i_h616 DEBUG=1 bl31
cp ${PROJECT_ROOT_DIR}/src/trusted-firmware-a/build/sun50i_h616/debug/bl31.bin ${CACHE_DIR}
)
