const https = require('https');
const crypto = require("crypto");
const fs = require('fs');

const start = Date.now();

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log("Hash : ", Date.now() - start);
    })
}

function doRequest() {
    https.request("https://www.google.com", res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log("Request : ", Date.now() - start);
        })
    }).end();
}

function readFile() {
    fs.readFile('multiTask.js', () => {
        console.log("File : ", Date.now() - start);
    })
}

readFile();
doHash();
doHash();
doHash();
doHash();
doHash();
doRequest();

// RUN : UV_THREADPOOL_SIZE=2 node --trace-sync-io --perf-basic-prof-only-functions multiTask.js