PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

docker run -it --rm --name my-project-dev -p 4200:4200 -v "$PROJECT_DIR":/usr/src/app -w /usr/src/app virexom/test-task:8 /bin/bash
