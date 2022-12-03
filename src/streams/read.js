import {createReadStream} from "fs";

const read = async () => {
    const readStream = createReadStream("src/streams/files/fileToRead.txt");
    readStream.on("data", (chunk) => process.stdout.write(chunk.toString()));
};

await read();
