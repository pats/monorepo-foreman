const { iAmUiLibrary } = require('@monorepo-foreman/awesome-library');
const { getAmazingThings } = require('@monorepo-foreman/amazing-things');

(() => {
    const value = iAmUiLibrary();
    console.log(value);



    //tidyings 3.2
    console.log('AT', getAmazingThings());
})();
