const {iAmUiLibrary} = require('@monorepo-foreman/awesome-library');

const getAmazingThings = () => {
    return `Some amazing thing with ${iAmUiLibrary()} some change in premode`;
};

module.exports = {
    getAmazingThings
};
