.POSIX:
SHELL = /bin/sh
BASE_PATH = "/"

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
	if ! [ -x "$$(command -v aws)" ]; then\
		@echo "Install AWS CLI";\
		curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "$(HOME)/awscliv2.zip";\
		unzip $(HOME)/awscliv2.zip -d $(HOME);\
		sudo $(HOME)/aws/install;\
	fi
	@echo "Configure AWS Credentials"
	aws configure set aws_access_key_id $(AWS_ACCESS_KEY_ID)
	aws configure set aws_secret_access_key $(AWS_SECRET_ACCESS_KEY)
	aws configure set region $(AWS_REGION)
	@echo "Push build to S3 bucket"
	aws s3 sync __sapper__/export$(BASE_PATH) s3://$(S3_BUCKET_NAME) --delete
	@echo "Invalidate Cloudfront"
	aws cloudfront create-invalidation --distribution-id $(CDN_DISTRIBUTION_ID) --paths "/*"