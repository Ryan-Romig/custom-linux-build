#!/bin/bash
. scripts/bootstrap.sh
. scripts/make_img.sh
. scripts/format_image.sh
. scripts/populate_boot.sh
#populate rootfs

. scripts/finish_build.sh
