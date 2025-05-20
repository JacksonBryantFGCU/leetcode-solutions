# System Design – Job Queue

## 1. Functional Requirements
- Accept background jobs (e.g. "send email", "resize image")
- Run them asynchronously
- Support retries and prioritization

## 2. Non-Functional
- High reliability
- Fault tolerance
- Horizontal scalability

## 3. Components
- API Gateway
- Job Producer (writes job to queue)
- Job Queue (Redis, RabbitMQ, Kafka)
- Job Worker (picks up jobs and processes)
- Job Store / DB (logs, retries, failures)

## 4. Flow
1. Client sends POST to /job
2. Producer writes job to queue
3. Worker consumes jobs FIFO or by priority
4. Result logged in DB

## 5. Scaling
- Add more workers to handle burst load
- Use exponential backoff or retry queue
- Dead letter queue for failed jobs

## 6. Optional Features
- Delayed jobs / scheduled jobs
- Priority queueing
- Dashboard to monitor queue depth and failures
