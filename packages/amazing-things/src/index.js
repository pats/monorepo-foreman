const {iAmUiLibrary} = require('@monorepo-foreman/awesome-library');

const getAmazingThings = () => {
    return `Some amazing thing with ${iAmUiLibrary()}`;
};

module.exports = {
    getAmazingThings
};
