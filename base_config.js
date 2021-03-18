import path from "path";
const workDir = process.cwd() || process.env.pwd;
export default {
    input: path.join(workDir, "src", "js", "index.js"),
    output: {
        file: path.join(workDir, "build", "js", "bundle.js"),
        format: 'cjs'
    }
}

// process.cwd() || process.env.pwd;