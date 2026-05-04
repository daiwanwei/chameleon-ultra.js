import { Buffer } from '@taichunmin/buffer';
import { D as DfuManifest, a as DfuImageType, b as DfuImage } from './types-Vzjtul7g.mjs';
import 'type-fest';

declare class DfuZip {
    #private;
    constructor(buf: Buffer);
    getManifest(): Promise<DfuManifest>;
    getFirstImageFile(types: DfuImageType[]): Promise<DfuImage | null>;
    getBaseImage(): Promise<DfuImage | null>;
    getAppImage(): Promise<DfuImage | null>;
    getGitVersion(): Promise<string | null>;
}

export { DfuZip as default };
