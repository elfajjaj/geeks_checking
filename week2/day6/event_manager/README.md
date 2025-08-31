# Event Manager (Flask + PostgreSQL + Neon)

## Setup
1. Clone repo
2. Create venv + install requirements
3. Copy `.env.example` to `.env` and fill DATABASE_URL (Neon connection string)
4. Seed DB:
   ```bash
   psql "$DATABASE_URL" -f database/seed/index.sql
