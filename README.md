# VTEX Jussi Store - Development Test for Front End Developer | VTEX IO

This project was created with create-react-app and uses:
ReactJS | Typescript | Node | Styled-components
-> It doesn't have a "published" version, because I didn't know if there would be any problems caused by the KEY API.

### Project depencendies

```shell
yarn
```
or
```shell
npm install
```

### Compile the project for development


```shell
yarn start
```
or 
```shell
npm start
```
and 

```shell
yarn dev:server
```

or 
```shell
npm run dev:server
```

### Compile the project for production

```shell
yarn build
```

or 
```shell
npm run build
```

### Search 

The project is consuming a GRAPHQL API from Jussi's BRASTEMP client.
You can search by workspace.

You can search by desktop.

Known workspaces:
"master"
and "homolog"


### LazyImage

I didn't have time to implement lazyImage in the project, but the component itself is ready and inside the folder's UI


### SERVER
Internal CORS Anywhere server started at port 5000 and
External 8000

### Warning: 
I didn't have time to maintain default breakpoints on stylized components; \
Notify me to remove API key after evaluation