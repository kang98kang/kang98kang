console.log(import.meta.url);
console.log(__filename, "__filename은 error. 쓸 수 없다.");

// ReferenceError: __filename is not defined in ES module scope
//     at file:///C:/dev/projects/projects/kang98kang/day16/node/filename.mjs:2:13
//     at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
//     at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)
