import {rm} from "fs/promises";

const fileToRemovePath = "src/fs/files/fileToRemove.txt";

const getErrorMessage = () => console.error("FS operation failed");

const remove = async () => {
    try {
        await rm(fileToRemovePath);
    } catch {
        getErrorMessage();
    }
};

await remove();
