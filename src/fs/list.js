import {opendir} from "fs/promises";

const filesFolderPath = "src/fs/files";

const getErrorMessage = () => console.error("FS operation failed");

const list = async () => {
    try {
        const filenames = [];
        const dirInfo = await opendir(filesFolderPath);
        for await (const dirItem of dirInfo) {
            filenames.push(dirItem.name);
        }
        console.log(filenames);
    } catch {
        getErrorMessage();
    }
};

await list();
