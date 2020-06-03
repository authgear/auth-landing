.POSIX:
SHELL=/bin/sh
BASE_PATH="/"

.PHONY: ci-test
ci-test: 
	@echo "Install dependencies" 
	npm ci
	@echo "Check code formatting"
	npm run check-format
	@echo "Lint code"
	npm run lint
	@echo "Generate production build"
	npm run export

.PHONY: ci-deploy-prod
ci-deploy-prod:
	@echo "Generate production build"
	npm run export -- --basepath=$(BASE_PATH)
	@if ! [ -x "$$(command -v aws)" ]; then\
		echo "Please install AWS CLI";\
		exit 1;\
	fi
	@echo "Push build to S3 bucket"
	aws s3 sync __sapper__/export$(BASE_PATH) s3://$(S3_BUCKET_NAME) --delete
	@echo "Invalidate Cloudfront"
	aws cloudfront create-invalidation --distribution-id $(CDN_DISTRIBUTION_ID) --paths "/*"