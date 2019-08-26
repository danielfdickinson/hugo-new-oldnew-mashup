#!/bin/sh

cd exampleSite && {
	mkdir -p themes || exit 1
	ln -sf ../.. themes/oldnew-mashup || exit 1
	sed -i -e 's,BaseURL = '\''https://example.com/'\'',BaseURL = '\''https://new-oldnew-mashup.thecshore.com/'\'',' config.toml
	hugo || exit 1
} || exit 1
