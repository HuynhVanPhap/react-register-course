const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@types': path.resolve(__dirname, 'src/types/'),
            '@icons': path.resolve(__dirname, 'src/icons/'),
        },
    },
};