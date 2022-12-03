import {readFile, writeFile} from "fs/promises";

const freshFilePath = "src/fs/files/fresh.txt";
const freshFileData = "I am fresh and young";

const getErrorMessage = () => console.error("FS operation failed");

const create = async () => {
    try {
        await readFile(freshFilePath, "utf8");
        getErrorMessage();
    } catch {
        await writeFile(freshFilePath, freshFileData, "utf8");
    }
};

await create();
