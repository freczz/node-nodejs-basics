import {fork} from 'child_process';
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const child = fork(scriptPath, args, { silent: true });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.stdout.on("data", (data) =>
        console.log("From child stdout:", data.toString())
    );
};

spawnChildProcess(process.argv.slice(2));
