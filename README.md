# Load testing for forum

## Setup

1. Install k6.

## Get request

```bash
k6 run forum.js
```

## Put request

1. Copy the .env file to .env.local:

```bash
cp .env .env.local
```

2. Update the .env.local file with the correct values.
3. Run the test:

```bash
./run-put.sh
```