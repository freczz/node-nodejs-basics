import {readFile} from "fs/promises";

const fileToReadPath = "src/fs/files/fileToRead.txt";

const getErrorMessage = () => console.error("FS operation failed");

const read = async () => {
    try {
        const data = await readFile(fileToReadPath, "utf8");
        console.log(data);
    } catch {
        getErrorMessage()
    }
};

await read();
