.POSIX:

.PHONY: test
test: 
	@echo "Install dependencies" 
	npm ci
	@echo "Check code formatting"
	npm run check-format
	@echo "Lint code"
	npm run lint
	@echo "Generate production build"
	npm run export
