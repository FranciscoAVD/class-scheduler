# JWT Auth and Drizzle with PostgreSQL
1. Replace SESSION_SECRET in .env with output from `openssl rand -hex 32`
2. `npm run dev`
3. `docker compose up`
4. `npm run db:push`
5. add test user in drizzle studio (`npm run db:studio`)

### TODO
- Password hashing
- update expiration on cookie on valid requests in the middleware