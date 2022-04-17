# Frontend Stack

Next.js

# Project Init

1. Typescript Based Next Project Create

```bash
yarn create next-app app --typescript
```

2. Add MUI

- to use default style engine

## install command

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

- to use styled-components

## install command

```bash
yarn add @mui/material @mui/styled-engine-sc styled-components
```

## reconfigure to use styled-components

### package.json

```
typescript
{
   "dependencies": {
-    "@mui/styled-engine": "latest"
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
   },
+  "resolutions": {
+    "@mui/styled-engine": "npm:@mui/styled-engine-sc@latest"
+  },
 }
```

### tsconfig.json

```typescript
{
   "compilerOptions": {
+    "paths": {
+      "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]
+    }
   },
 }
```

### next.config.js

```typescript
+const withTM = require('next-transpile-modules')([
+  '@mui/material',
+  '@mui/system',
+  '@mui/icons-material', // If @mui/icons-material is being used
+]);

+module.exports = withTM({
 webpack: (config) => {
   config.resolve.alias = {
     ...config.resolve.alias,
+    '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  }
+});
```

# Getting Started

```

```
