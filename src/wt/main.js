import {Worker} from "worker_threads";
import os from 'os';

const firstNumber = 10;

const runWorker = async (workerData) => {
    return new Promise((res, rej) => {
        const worker = new Worker("./src/wt/worker.js", {workerData});
        worker.on('message', res);
        worker.on('error', rej);
        worker.on('exit', (code) => {
            if (code !== 0) {
                rej(new Error(`Worker stopped with exit code ${code}`));
            }
        })
    })
}

const performCalculations = async () => {
    const promises = [];
    const CpusNum = os.cpus().length;
    for (let i = 0; i < CpusNum; i++) {
        promises.push(runWorker(firstNumber + i));
    }
    const promisesResult = await Promise.allSettled(promises);
    const results = promisesResult.map(item => item.value);
    console.log(results);
};

await performCalculations();
