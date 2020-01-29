run:
	bundle exec jekyll serve

port:
	lsof -i: 4000
	#kill -9 pid

.PHONY: run port