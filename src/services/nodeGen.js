const KJUR = require("jsrsasign");
const keys = require("./keyGenerator");
const addressGenerator = require("./addressGen");

const generateNode = () => {
    const pair = keys.keyPair();
    const pubKeyObject = pair[0];
    const publicKey = KJUR.KEYUTIL.getPEM(pubKeyObject);
    const privKeyObject = pair[1];
    const privateKey = KJUR.KEYUTIL.getPEM(privKeyObject, "PKCS8PRV");
    const address = addressGenerator.address(publicKey);
    const info = {
        privateKey,
        publicKey,
        address
    };
    return info;
}

export default generateNode
