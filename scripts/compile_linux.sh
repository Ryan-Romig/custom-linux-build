#!/bin/bash
${PROJECT_ROOT_DIR}scripts/compile_kernel_image.sh
${PROJECT_ROOT_DIR}scripts/compile_modules.sh
${PROJECT_ROOT_DIR}scripts/compile_dtb.sh