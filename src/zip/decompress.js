import {createUnzip} from "zlib";
import {createReadStream, createWriteStream} from "fs";

const decompress = async () => {
    const source = createReadStream('src/zip/files/archive.gz');
    const destination = createWriteStream('src/zip/files/fileToCompress.txt');
    const ungzip = createUnzip();

    source.pipe(ungzip).pipe(destination);
};

await decompress();
