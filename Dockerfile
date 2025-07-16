# 1. Node.js 베이스 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉토리 설정
WORKDIR /usr/src/app

# 3. package.json과 lock 파일 복사
COPY package*.json ./

# 4. Nest CLI 설치 및 의존성 설치
RUN npm install -g @nestjs/cli
RUN npm install

# 5. 전체 소스 복사
COPY . .

# 6. NestJS 빌드
RUN npm run build

# 7. 사용할 포트 열기
EXPOSE 3000

# 8. 애플리케이션 실행 (빌드된 파일 기준)
CMD ["node", "dist/main"]
