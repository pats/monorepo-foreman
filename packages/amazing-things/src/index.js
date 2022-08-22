const {iAmUiLibrary} = require('@monorepo-foreman/awesome-library');

const getAmazingThings = () => {
    return `Some amazing things with ${iAmUiLibrary()}`;
};

module.exports = {
    getAmazingThings
};
