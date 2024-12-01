// process.env.UV_THREADPOOL_SIZE=2;
//UV_THREADPOOL_SIZE=2 node --trace-sync-io --perf-basic-prof-only-functions index.js

const crypto = require('crypto');
const start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(Date.now() - start)
})
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(Date.now() - start)
})

console.log(process.env.UV_THREADPOOL_SIZE)