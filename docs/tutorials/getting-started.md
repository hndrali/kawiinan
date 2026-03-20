# Getting Started with Sakeenah

This tutorial walks you through setting up your first wedding invitation with Sakeenah.

## Prerequisites

- Bun v1.3.5 or later
- PostgreSQL v14+ (local or cloud-hosted)
- Git

## Installation

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/hndrali/kawiinan.git
cd kawiinan
bun install
```

### 2. Set Up PostgreSQL Database

```bash
# Create database
createdb kawiinan

# Apply schema
psql -U postgres -d kawiinan -f src/server/db/schema.sql.example
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
# Frontend
VITE_API_URL=http://localhost:3000

# Backend
DATABASE_URL=postgresql://username:password@localhost:5432/kawiinan
PORT=3000
```
ganti ussername sama pw postgresql mu

### 4. Add Your Wedding Data

```bash
# Then insert into database
psql -U postgres -d kawiinan -f my-wedding.sql
```


### 5. Start Development Servers

```bash
bun run dev
```

This runs both frontend (Vite on port 5173) and backend (Hono API on port 3000) concurrently.

### 6. Access Your Invitation

- **Frontend**: `http://localhost:5173/basir-farah-2026?to=Pak+Budi`
- **API endpoint**: `http://localhost:3000/api/invitation/basir-farah-2026d`


## Next Steps

- [Generate personalized guest links](../how-to/personalized-links.md)
- [Deploy to production](../how-to/deployment.md)
- [API Reference](../reference/api.md)
