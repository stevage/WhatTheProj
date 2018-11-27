# what-the-proj

https://stevage.github.io/WhatTheProj/

What do you do when you have a geospatial file and you don't know which projection it's in? Use *What the Proj*! 

1. Enter one of the projected coordinates, as X and Y.
2. Enter the longitude and latitude that you think it might correspond to. (For instance, if you know all the data is related to Canberra, you could pick a long/lat in the middle of Canberra)
3. Click "Guess!" All known EPSG codes will be tried. The one that gives a result closest to your target will be shown.

Don't have any actual data and just want to see it work? Try [test data](https://stevage.github.io/WhatTheProj/#test)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
