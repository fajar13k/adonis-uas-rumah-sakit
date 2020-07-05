# Description

A simple Clinic app to get Nurses, Patients, and Visits.

## Installation

1. Clone
2. Copy `.env.example` paste in the root too, and rename the newly pasted file to `.env`
3. Don't forget to configure your postgre credentials inside the `.env`
4. Run `adonis key generate` to generate new APP KEY
5. Run `adonis migration:run` to generate all the necessary tables, fields, and columns
6. Run `adonis seed` to generate pre-made rows
7. Finally you can start the app by `adonis serve --dev` or without the ending arguments if you're not in dev mode.
8. Open `http://127.0.0.1:3333` in your browser to start exploring!

## Used

- AdonisJs
- PostgreSQL (pg)
- Bootstrap
