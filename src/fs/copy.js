import {opendir, cp} from "fs/promises";

const filesFolderPath = "src/fs/files";
const filesCopyFolderPath = "src/fs/files_copy";

const getErrorMessage = () => console.error("FS operation failed");

const copy = async () => {
    let filesFolderInfo;
    let filesFolderCopyInfo;
    try {
        filesFolderInfo = await opendir(filesFolderPath);
        filesFolderCopyInfo = await opendir(filesCopyFolderPath);
    } catch {
    } finally {
        if (filesFolderInfo && !filesFolderCopyInfo) {
            await cp(filesFolderPath, filesCopyFolderPath, { recursive: true });
        } else {
            getErrorMessage();
        }
    }
};

copy();
