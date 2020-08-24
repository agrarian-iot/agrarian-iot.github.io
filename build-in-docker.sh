#!/bin/sh

if [ -z "$1" ]; then
  docker run -it --rm \
    --workdir /app \
    --volume `pwd`:/app \
    --publish 4000:4000 \
    --publish 4001:4001 \
    jekyll/jekyll:pages \
    /app/build-in-docker.sh build
else
  jekyll serve --incremental\
    -H 0.0.0.0 \
    --trace \
    --watch \
    --force_polling \
    --livereload \
    --livereload-port 4001
fi
