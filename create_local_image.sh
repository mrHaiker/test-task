#!/usr/bin/env bash

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker build -t virexom/test-task:8 -f "$PROJECT_DIR"/Dockerfile_dev "$PROJECT_DIR"
