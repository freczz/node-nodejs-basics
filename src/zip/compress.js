import {createGzip} from "zlib";
import {createReadStream, createWriteStream} from "fs";

const compress = async () => {
    const source = createReadStream('src/zip/files/fileToCompress.txt');
    const destination = createWriteStream('src/zip/files/archive.gz');
    const gzip = createGzip();

    source.pipe(gzip).pipe(destination);
};

await compress();
