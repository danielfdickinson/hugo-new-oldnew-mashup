#!/bin/sh

cd exampleSite && {
	mkdir -p themes || exit 1
	if [ ! -d themes/oldnew-mashup ]; then
		ln -sf ../.. themes/oldnew-mashup || exit 1
	fi
	hugo -b https://new-oldnew-mashup.thecshore.com/ || exit 1
} || exit 1
