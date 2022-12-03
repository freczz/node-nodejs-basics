import {readFile, rename as fsRename} from "fs/promises";

const wrongFilenameFilePath = "src/fs/files/wrongFilename.txt";
const properFilenameFilePath = "src/fs/files/properFilename.md";

const getErrorMessage = () => console.error("FS operation failed");

const rename = async () => {
    let wrongFilenameStatus;
    let properFilenameStatus;
    try {
        wrongFilenameStatus = await readFile(wrongFilenameFilePath);
        properFilenameStatus = await readFile(properFilenameFilePath);
    } catch {
    } finally {
        if (wrongFilenameStatus && !properFilenameStatus) {
            await fsRename(wrongFilenameFilePath, properFilenameFilePath);
        } else {
            getErrorMessage();
        }
    }
};

await rename();
