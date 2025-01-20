<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [TypeScript Initialization and Configuration](#typescript-initialization-and-configuration)
  - [How to initialize the project](#how-to-initialize-the-project)
  - [How to install `Lite-server`](#how-to-install-lite-server)
  - [How to run the project](#how-to-run-the-project)
  - [How to initialise TypeScript](#how-to-initialise-typescript)
  - [After Initialization and starting the project](#after-initialization-and-starting-the-project)
    - [How to keep the project in watch mode](#how-to-keep-the-project-in-watch-mode)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# TypeScript Initialization and Configuration

## How to initialize the project

Run;

```cmd
npm init
```

This will create a `npm` package.json file in the root of your project.

## How to install `Lite-server`

Run;

```cmd
npm install lite-server --save-dev
```

## How to run the project

After installing, add a start script in the package.json file, i.e,

```json
"start": "lite-server",
```

This will allow you to run the server with the command `npm start`

## How to initialise TypeScript

Run;

```
tsc --init
```

## After Initialization and starting the project

### How to keep the project in watch mode

- To begin watch mode, run;

```cmd
tsc --watch
```

alternatively, run;

```cmd
tsc -w
```
