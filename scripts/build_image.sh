#!/bin/bash
source ${PWD}/scripts/bootstrap.sh
./scripts/make_img.sh
./scripts/format_image.sh
./scripts/populate_boot.sh
./scripts/finish_build.sh
