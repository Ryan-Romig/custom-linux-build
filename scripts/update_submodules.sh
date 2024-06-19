#!/bin/bash

# Get the list of submodules
submodules=$(git config --file .gitmodules --get-regexp path | awk '{ print $2 }')

# Loop over each submodule
for submodule in $submodules
do
  # Get the current branch of the submodule
  branch=$(git -C $submodule symbolic-ref --short HEAD)

  # Update the .gitmodules file
  git config --file .gitmodules submodule.$submodule.branch $branch
done

# Stage the .gitmodules file
git add .gitmodules

# Commit the changes
git commit -m "Update .gitmodules with current branches of submodules"