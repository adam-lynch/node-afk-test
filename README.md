node-afk-test
===

To prove [node-afk](http://github.com/Teamwork/node-afk) works on Windows 8.1 with node-webkit 0.10.x. See [teamwork/node-afk#6](http://github.com/Teamwork/node-afk#6) and [teamwork/node-afk#7](http://github.com/Teamwork/node-afk#7).

1. `npm install -g gulp` (if you don't have it already)
2. `npm install`
3. `gulp` (creates `test.nw`)
4. `nw\nw.exe test.nw` Starts the app (with node-webkit@0.10.3)
