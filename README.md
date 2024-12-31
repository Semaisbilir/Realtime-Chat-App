# Chat Application Project

## Objective

This project involves building a real-time chat application using `Node.js`. The backend will utilize either `PostgreSQL` or `MongoDB` as the database. The goal is to create a fully functional chat application that allows multiple users to join chat rooms, exchange messages, and view chat history.


## Tech Stack & Architecture

1. **`TypeScript`**

2. **`Express`**

3. **`Web Sockets`**

4. **`MVC`**

5. **`Database` - `Postgres`**

6. **`ORM / ODM` - `Prisma` / `Mongoose`**

7. **`EJS` / `HTML`** 

8. **`CSS` / `SASS`

9. **`Bcrypt` + `Cookie-Session`.**

## Features

### Minimum Requirements:

1. **User Authentication with session management. (Protected Routes)**

2. **Real-Time messaging between users.**

3. **Persistence of chat history in the database**.

4. **Ability to join and leave groups for chats**.


## Database Setup

Use the following command in PSQL to create the database and tables:

> \i src/migration/InitialSetup.sql;

Use the following command in PSQL to insert the default records:

> \i src/migration/InitialSeeds.sql;

## Entity Relationship Diagram

![ERD](SafeComm-ERD.jpg)
