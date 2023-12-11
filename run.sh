#!/bin/bash

docker pull webrecorder/browsertrix-crawler:latest

docker run \
    -p 9037:9037 \
    --rm \
    -v $PWD:/crawls/ \
    webrecorder/browsertrix-crawler:latest crawl \
        --config /crawls/example.yaml \
        --customBehaviors /crawls/custom-behaviors/
