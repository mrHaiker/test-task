#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker build -t test/node:8 -f ${PROJECT_DIR}/Dockerfile ${PROJECT_DIR}
