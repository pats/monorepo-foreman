const {iAmUiLibrary} = require('@monorepo-foreman/awesome-library');

const getAmazingThings = () => {
    return `Some amazing things with ${iAmUiLibrary()} and tiydings pr 3`;
};

module.exports = {
    getAmazingThings
};
