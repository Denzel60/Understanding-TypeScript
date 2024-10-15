## tsc --init

Initialising a typescript project

## Compiling a specific file

```cmd
tsc <file-name> --watch / tsc <file-name> -w
```

## Compiling the entire project / Mulitple files

```cmd
tsc --watch
```

On tsconfig.json, one can 'exclude' files that they don't want to be compiled into tyspcript files;

```json
"exclude": [
    "node_modules",
],
```

On tsconfig.json, one can 'include' files that they want to be compiled into tyspcript files;

```json
"include": [
"app.ts",
],
```
