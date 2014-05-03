A CLI for https://github.com/locomote/node-migrate-orm2 .

## Installation
```
npm install -g orm-migrate
```

## Usage

For help docs run ```migrate --help```.

Generate a migration:

```
♪  node-orm-migrate git:(master) ✗ ./bin/migrate -g foo.js
  create : /Users/nicholasf/code/nicholasf/node-orm-migrate/data/migrations/001-foo.js.js
Done.
```

Perform an up run:

```
♪  node-orm-migrate git:(master) ✗ ./bin/migrate -u       
(orm/postgres) CREATE TABLE "orm_migrations" ("migration" TEXT NOT NULL , "direction" TEXT NOT NULL , "created_at" TEXT NOT NULL )
(orm/postgres) SELECT migration FROM orm_migrations ORDER BY created_at DESC LIMIT 1;
  up : data/migrations/001-foo.js.js
(orm/postgres) INSERT INTO orm_migrations(migration, direction, created_at) VALUES('001-foo.js.js', 'up', '2014-05-03T05:42:29.188Z');
  migration : complete
Done.

```

Perform a down run:

```
(orm/postgres) INSERT INTO orm_migrations(migration, direction, created_at) VALUES('001-foo.js.js', 'down', '2014-05-03T05:42:52.659Z');
  migration : complete
Done.
```

That's it! (Made with beer)