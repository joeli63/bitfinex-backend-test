import crypto from 'crypto';

// generate unique id as 32-chars string
export const generateUniqId = () => crypto.randomBytes(16).toString('hex')
