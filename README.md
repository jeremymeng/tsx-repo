1. `npm install`

2. `npm run test`


Actual:

```
/home/meng/working/tsx-repo/src/configurationClient.ts:4
import { ConfigurationSetting } from "./generated/index.js";
         ^

SyntaxError: The requested module './generated/index.js' does not provide an export named 'ConfigurationSetting'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:134:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:217:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.16.0
```

Expected: The code is being executed, and getting expected error of 

```
The sample encountered an error: NotYetImplemented
```

Note: If the `"type": "module",` field is removed from package.json, then `npm run test` gives me expected result.
