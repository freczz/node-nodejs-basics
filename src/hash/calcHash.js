import {readFile} from "fs/promises";
import {createHash} from "crypto";

const filePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
    const text = await readFile(filePath, "utf8");
    const hash = createHash("sha256");
    hash.update(text);
    const hex = hash.digest("hex");
    console.log(hex);
};

await calculateHash();
