import {copyFileSync, existsSync, readFileSync} from 'fs';

const file = __dirname + '/../';
let raw : string;

if(existsSync(file)) {

    raw = readFileSync(file + '/config.json').toString();

} else {

    copyFileSync(file + '/config.json', file + '/config.json-dist');
    raw = readFileSync(file + '/config.json').toString();
}

// let object = Parser(example, parser);
// copyFileSync(example, file);
// return object;
//
// const Config = ConfigSuffixJson(__dirname + '/../config.json', '-dist');

const Config = JSON.parse(raw);
export default <{
    port : number
}>  Config;
