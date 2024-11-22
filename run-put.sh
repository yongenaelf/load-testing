#!/bin/bash

# Load .env.local file
export $(grep -v '^#' .env.local | xargs)

# Run the K6 script
k6 run forum-put.js