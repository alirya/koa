export default function RequestPath(currentFilePath : string) : string {

    return  currentFilePath.replace(process.env.INIT_CWD as string, '').replace(/\\/g, '/');
}
