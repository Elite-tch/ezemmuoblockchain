#!/bin/bash

directoryPath="src"

function change_extensions() {
  for file in "$1"/*; do
    if [ -d "$file" ]; then
      change_extensions "$file"
    elif [[ "$file" == *.js ]]; then
      newFilePath="${file%.js}.jsx"
      mv "$file" "$newFilePath"
      echo "Renamed: $file -> $newFilePath"
    fi
  done
}

change_extensions "$directoryPath"
