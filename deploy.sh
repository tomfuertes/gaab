#!/usr/bin/env bash
s3cmd sync --acl-public --cf-invalidate --cf-invalidate-default-index ./demo/ s3://run.gaab.today
