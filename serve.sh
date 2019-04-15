#!/usr/bin/env bash

export PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run -it --rm --name my_node -p 4200:4200 -v "$PROJECT_DIR":/usr/src/app -w /usr/src/app test/node:latest /bin/bash
