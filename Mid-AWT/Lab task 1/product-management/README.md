# Lab Task 1 – Product & Employee Management API (NestJS)

| SL: 34 | Name: MD. SADAT HOSSAIN | ID: 23-54928-3 | Section: D |


NestJS + TypeORM + PostgreSQL (built on the provided `nest-boilerplate`).

## Database setup
1. Install PostgreSQL and start it.
2. Create the database:
   ```bash
   psql -U postgres -c "CREATE DATABASE product_management;"
   ```
3. Copy the sample settings and edit the password if needed:
   ```bash
   cp .env.example .env
   ```

## Install & run
```bash
pnpm install          # or: npm install
pnpm run migration:run   # creates the products and employees tables
pnpm run start:dev       # server on http://localhost:5001
```

## Endpoints
| Method | Endpoint | Behavior |
|--------|----------|----------|
| POST | /products | Create a product |
| GET | /products | List all products |
| GET | /products/:id | Get one product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |
| POST | /employees | Create an employee |
| GET | /employees | List all employees |
| GET | /employees/:id | Get one employee |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

Product body: `{ "name": "Rice", "category": "Grocery", "price": 55.5, "quantity": 100 }`

Employee body: `{ "name": "Ann Lee", "email": "ann@x.com", "phone": "01700000000", "password": "dummy123", "age": 30, "yearsOfWorking": 5 }`

Screenshots are in the `screenshots/` folder.
