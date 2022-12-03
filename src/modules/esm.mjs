import path from "path"
import { release, version } from "os";
import { createServer } from "http";
import "./files/c.js";

const {createServerHttp} = createServer;

const random = Math.random();

const unknownObject = await import(`./files/${ random > 0.5 ? "a" : "b" }.json`, { assert: { type: 'json' } });

const URL = import.meta.url;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${URL}`);
console.log(`Path to current directory is ${URL.substring(0, URL.lastIndexOf("/"))}`);

const myServer = createServer((req, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};
