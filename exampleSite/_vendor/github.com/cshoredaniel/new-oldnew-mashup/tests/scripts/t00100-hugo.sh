#!/bin/sh

TS=PASS

hugo-extended --ignoreCache || TS=FAIL

echo "$TS: Generate site with Hugo"

if [ "$TS" = "FAIL" ]; then
	OTS=FAIL
	exit 3
fi

exit 0
