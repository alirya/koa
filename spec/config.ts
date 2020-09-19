import ConfigSuffixJson from "@dikac/tn-filesystem/object/config-suffix-json";


const Config = ConfigSuffixJson(__dirname + '/../config.json', '-dist');

export default <{
    port : number
}>  Config;
