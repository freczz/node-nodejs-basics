import {argv} from "process";

const parseArgs = () => {
    argv.forEach((arg, i) => {
        if (arg[0] === arg[1] && arg[0] === "-") {
            console.log(`${arg.substring(2)} is ${argv[i + 1]}`)
        }
    })
};

parseArgs();
