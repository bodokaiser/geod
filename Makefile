SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

test:
	@mocha \
		--harmony \
		--spec reporter \
		test

.PHONY: test