A command line tool for https://github.com/locomote/node-migrate-orm2 .

## Installation
```
npm install -g orm-migrate
```

## Usage

```
♪  node-orm-migrate git:(master) ✗ migrate --help

  Usage: migrate [options]

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -g, --generate  Generate a migration
    -u, --up        Run up migrations
    -d, --down      Run down migrations
```

Generate a migration:

```
♪  node-orm-migrate git:(master) ✗ migrate -g create-foo
  create : /Users/nicholasf/code/nicholasf/node-orm-migrate/data/migrations/001-create-foo.js
Done.
```

Perform an up run:

```
♪  node-orm-migrate git:(master) ✗ migrate -u       
(orm/postgres) CREATE TABLE "orm_migrations" ("migration" TEXT NOT NULL , "direction" TEXT NOT NULL , "created_at" TEXT NOT NULL )
(orm/postgres) SELECT migration FROM orm_migrations ORDER BY created_at DESC LIMIT 1;
  up : data/migrations/001-foo.js.js
(orm/postgres) INSERT INTO orm_migrations(migration, direction, created_at) VALUES('001-foo.js.js', 'up', '2014-05-03T05:42:29.188Z');
  migration : complete
Done.

```

Perform a down run:

```
♪  node-orm-migrate git:(master) ✗ migrate -d
(orm/postgres) CREATE TABLE "orm_migrations" ("migration" TEXT NOT NULL , "direction" TEXT NOT NULL , "created_at" TEXT NOT NULL )
(orm/postgres) SELECT migration FROM orm_migrations ORDER BY created_at DESC LIMIT 1;
(orm/postgres) SELECT migration FROM orm_migrations ORDER BY created_at DESC LIMIT 1;
  down : data/migrations/001-foo.js.js
(orm/postgres) INSERT INTO orm_migrations(migration, direction, created_at) VALUES('001-foo.js.js', 'down', '2014-05-03T05:42:52.659Z');
  migration : complete
Done.
```

That's it! (Made with beer)