#!/bin/bash

gauntlet -h $1 -p $2 -f $3 -d $4 -a "$5?" -g "" -u "$6" \
  --aws-key "" \
  --aws-secret "" \
  --aws-bucket ""
