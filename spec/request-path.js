export default function RequestPath(currentFilePath) {
    return currentFilePath.replace(process.env.INIT_CWD, '').replace(/\\/g, '/');
}
//# sourceMappingURL=request-path.js.map