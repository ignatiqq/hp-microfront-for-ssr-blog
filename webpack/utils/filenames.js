const filenameWithHash = (filename, extension) => `${filename}.[hash].${extension}`;
const filenameWithContentHash = (filename, extension) => `${filename}.[contenthash].${extension}`;

module.exports = {
    filenameWithHash,
    filenameWithContentHash
};
