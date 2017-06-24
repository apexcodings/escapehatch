const db = require('./server/db')
const User = require('./server/db/models/user')
const Err = require('./server/db/models/err')
const Link = require('./server/db/models/link')
const Vote = require('./server/db/models/vote')

const data = {
  user: [
    {
      firstName: 'Jen',
      lastName: 'Smith',
      email: 'jen@jen.com',
      password: '1234',
    },
    {
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob@bob.com',
      password: '1234',
    },
    {
      firstName: 'Dave',
      lastName: 'Jones',
      email: 'dave@dave.com',
      password: '1234',
    },
  ],
  err: [
  {
    type: 'TypeError',
    message: `Cannot read property 'be' of undefined`,
    stack: 'at Context.<anonymous> (test/test.js:18:16)',
  },
  {
    type: 'SyntaxError',
    message: `Unexpected token ,`,
    stack: `at createScript (vm.js:53:10)
    at Object.runInThisContext (vm.js:95:10)
    at Module._compile (module.js:543:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:423:7)
    at startup (bootstrap_node.js:147:9)`,
  },
  ]
}

db.sync()
.then(() => {
  return db.sync({force: true})
  // return db.sync()
})
.then( () => {return User.bulkCreate(data.user)})
.then( () => {return Err.bulkCreate(data.err)})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close()
  console.log('connection closed');
  return null;
});
