import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';



export const dirFromFileURL = url => dirname(fileURLToPath(url));


export const dirPackage = process.env.NENV_PKG_PATH ? dirFromFileURL(process.env.NENV_PKG_PATH) : resolve(dirFromFileURL(import.meta.url), '..');
