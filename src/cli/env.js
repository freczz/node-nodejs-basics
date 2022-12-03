import {env} from "process";

const parseEnv = () => {
    const envWithPrefix = {};
    Object.entries(env).forEach(([key, value]) => {
        envWithPrefix[`RSS_${key}`] = value;
    })
    console.log(envWithPrefix);
};

parseEnv();
