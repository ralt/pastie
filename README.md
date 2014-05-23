# pastie

A very simple pastie service.

## Demo

The website is available online: http://pastie.margaine.com

Only 10,000 pasties are available at max (to keep a free account on heroku), so I may or may not regularly truncate the pasties table.

## Description

Sick of other pastie services where much cruft was added, this is a very simple pastie.

There are 2 kinds of pages: the homepage and the pastie pages.

The homepage presents a textarea, filling the whole screen, to put your code in, and a "Save" button. No more.

The pastie pages present your code, with syntax highlighting automatically found out from your code.

## Technical stack

### node.js

The code runs on node.js, so node.js is required.

### postgresql

The supported database is postgresql.

An extension (uuid-ossp) is required, so you'll probably need to install the "postgresql-contrib" package or whatever your distribution provides.

## Contributors

- [Florian Margaine](http://margaine.com)

## License

MIT License.
