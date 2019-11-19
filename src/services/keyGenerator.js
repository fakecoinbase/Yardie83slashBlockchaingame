//  TODO generate Public and private key for user
import hash from './hasher'

export const keyPair = () => {
    const timestamp = Date.now();
    const privateKey = timestamp * 12;
    
    const publicKey = hash(privateKey);    

    return [
        publicKey,
        privateKey
    ]
}