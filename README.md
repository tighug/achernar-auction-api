# auction-management-api

余剰電力取引システムの約定管理 API です。配電混雑を考慮するため、最適潮流計算を用いてノード毎に約定価格の重み付けを行います。

## Installation

```bash
git clone https://gitlab.com/ylab-bc/2019/surplus-power-market/auction-management-api.git
```

## Usage

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
