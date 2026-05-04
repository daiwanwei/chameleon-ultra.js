import { Buffer } from '@taichunmin/buffer';
import { U as UInt32Like, R as RecoverContextUint32Array, M as Mf1KeyType } from './enums-fmPabGpD.js';
import 'type-fest';
import 'web-serial-polyfill';

/**
 * JavaScript implementation of the Crypto1 cipher.
 * @see [crypto1.c | RfidResearchGroup/proxmark3](https://github.com/RfidResearchGroup/proxmark3/blob/master/common/crapto1/crypto1.c)
 * @example
 * ```js
 * import Crypto1 from 'chameleon-ultra.js/Crypto1'
 * ```
 */
declare class Crypto1 {
    /**
     * @group Internal
     * @internal
     */
    static evenParityCache: number[];
    /**
     * @group Internal
     * @internal
     */
    static lfsrBuf: Buffer;
    /**
     * @group Internal
     * @internal
     */
    even: number;
    /**
     * @group Internal
     * @internal
     */
    odd: number;
    /**
     * @param opts -
     * @param opts.even - The even bits of lfsr.
     * @param opts.odd - The odd bits of lfsr.
     * @see [mfkey source code from RfidResearchGroup/proxmark3](https://github.com/RfidResearchGroup/proxmark3/tree/master/tools/mfkey)
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * const state1 = new Crypto1()
     * const state2 = new Crypto1({ even: 0, odd: 0 })
     * ```
     */
    constructor({ even, odd }?: {
        even?: number;
        odd?: number;
    });
    /**
     * Reset the internal lfsr.
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * const state1 = new Crypto1({ even: 1, odd: 1 })
     * state1.reset()
     * ```
     */
    reset(): this;
    /**
     * Set the internal lfsr with the key.
     * @param key - The key to set the internal lfsr.
     * @example
     * ```js
     * const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * const state1 = new Crypto1()
     * state1.setLfsr(new Buffer('FFFFFFFFFFFF'))
     * ```
     */
    setLfsr(key: number): this;
    /**
     * Get the value of lfsr.
     * @returns lfsr.
     * @example
     * ```js
     * const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * const state1 = new Crypto1()
     * console.log(state1.setLfsr(new Buffer('FFFFFFFFFFFF')).getLfsr().toString(16)) // 'FFFFFFFFFFFF'
     * ```
     */
    getLfsr(): number;
    /**
     * Get the lfsr output bit and update lfsr by input bit.
     * @param input - The input bit.
     * @param isEncrypted - Indicates whether the input bit is encrypted or not.
     * @returns The lfsr output bit.
     */
    lfsrBit(input: number, isEncrypted: number): number;
    /**
     * Get the lfsr output byte and update lfsr by input byte.
     * @param input - The input byte.
     * @param isEncrypted - Indicates whether the input byte is encrypted or not.
     * @returns The lfsr output byte.
     */
    lfsrByte(input: number, isEncrypted: number): number;
    /**
     * Get the lfsr 32-bit output word and update lfsr by 32-bit input word.
     * @param input - The 32-bit input word.
     * @param isEncrypted - Indicates whether the 32-bit input word is encrypted or not.
     * @returns The lfsr 32-bit output word.
     */
    lfsrWord(input: number, isEncrypted: number): number;
    /**
     * Rollback the lfsr in order to get previous states
     * @param input - The input bit.
     * @param isEncrypted - Indicates whether the input bit is encrypted or not.
     * @returns The lfsr output bit.
     */
    lfsrRollbackBit(input: number, isEncrypted: number): number;
    /**
     * Rollback the lfsr in order to get previous states
     * @param input - The input byte.
     * @param isEncrypted - Indicates whether the input byte is encrypted or not.
     * @returns The lfsr output byte.
     */
    lfsrRollbackByte(input: number, isEncrypted: number): number;
    /**
     * Rollback the lfsr in order to get previous states
     * @param input - The 32-bit input word.
     * @param isEncrypted - Indicates whether the 32-bit input word is encrypted or not.
     * @returns The lfsr 32-bit output word.
     */
    lfsrRollbackWord(input: number, isEncrypted: number): number;
    /**
     * Get bit of the unsigned reversed endian 32-bit integer `x` at position `n`.
     * @param x - The reversed endian unsigned 32-bit integer.
     * @param n - The bit position.
     * @returns The bit at position `n`.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.beBit(0x01000000, 0)) // 1
     * ```
     */
    static beBit(x: number, n: number): number;
    /**
     * Get bit of the unsigned 32-bit integer `x` at position `n`.
     * @param x - The unsigned 32-bit integer.
     * @param n - The bit position.
     * @returns The bit at position `n`.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.bit(0x1, 0)) // 1
     * ```
     */
    static bit(x: number, n: number): number;
    /**
     * Cast the number `x` to bit.
     * @param x - The number.
     * @returns The casted bit.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.toBit(1)) // 1
     * console.log(Crypto1.toBit(2)) // 0
     * ```
     */
    static toBit(x: number): number;
    /**
     * Indicates whether the number is truly or not.
     * @param x - The number.
     * @returns Return `1` if the number is not falsey, otherwise return `0`.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.toBool(1)) // 1
     * console.log(Crypto1.toBool(2)) // 1
     * ```
     */
    static toBool(x: number): number;
    /**
     * Cast the number `x` to unsigned 24-bit integer.
     * @param x - The number.
     * @returns The casted unsigned 24-bit integer.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.toUint24(-1).toString(16)) // 'ffffff'
     * ```
     */
    static toUint24(x: number): number;
    /**
     * Cast the number `x` to unsigned 32-bit integer.
     * @param x - The number.
     * @returns The casted unsigned 32-bit integer.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.toUint32(-1).toString(16)) // 'ffffffff'
     * ```
     */
    static toUint32(x: number): number;
    /**
     * Cast Buffer, hex string or number to UInt32
     * @param x - Buffer, string or number
     * @returns UInt32
     * @internal
     * @group Internal
     */
    static castToUint32(x: UInt32Like): number;
    /**
     * Cast the number `x` to unsigned 8-bit integer.
     * @param x - The number.
     * @returns The casted unsigned 8-bit integer.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.toUint8(-1).toString(16)) // 'ff'
     * ```
     */
    static toUint8(x: number): number;
    /**
     * The filter function of Crypto1.
     * @param x - The unsigned 32-bit integer.
     * @returns The filtered bit.
     * @internal
     * @group Internal
     */
    static filter(x: number): number;
    /**
     * Return the even parity of the unsigned 8-bit integer `x`.
     * @param x - The unsigned 8-bit integer.
     * @returns The even parity of `x`.
     * @internal
     * @group Internal
     */
    static evenParity8(x: number): number;
    /**
     * Return the odd parity of the unsigned 8-bit integer `x`.
     * @param x - The unsigned 8-bit integer.
     * @returns The odd parity of `x`.
     * @internal
     * @group Internal
     */
    static oddParity8(x: number): number;
    /**
     * Return the even parity of the unsigned 32-bit integer `x`.
     * @param x - The unsigned 32-bit integer.
     * @returns The even parity of `x`.
     * @internal
     * @group Internal
     */
    static evenParity32(x: number): number;
    /**
     * Swap endian of the unsigned 32-bit integer `x`.
     * @param x - The unsigned 32-bit integer.
     * @returns The unsigned 32-bit integer after swap endian.
     * @internal
     * @group Internal
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.swapEndian(0x12345678).toString(16)) // '78563412'
     * ```
     */
    static swapEndian(x: number): number;
    /**
     * Generate the new prng state from the current prng state `x` by `n` times.
     * @param x - The current prng state.
     * @param n - The number of times to generate the new prng state.
     * @returns The new prng state.
     */
    static prngSuccessor(x: number, n: number): number;
    /**
     * A helper function to calculates the partial linear feedback contributions and puts in MSB (Most Significant Bit).
     * @param item - The input number.
     * @param mask1 -
     * @param mask2 -
     * @internal
     * @group Internal
     */
    static updateContribution(item: number, mask1: number, mask2: number): number;
    /**
     * Using a bit of the keystream extend the table of possible lfsr states. (complex version)
     * @param tbl - An array of the even/odd bits of lfsr.
     * @param size - Size of array.
     * @param bit - The bit of the keystream.
     * @param m1 - mask1
     * @param m2 - mask2
     * @param input - The value that was fed into the lfsr at the time the keystream was generated.
     * @returns The new size of array.
     * @internal
     * @group Internal
     */
    static extendTable(tbl: Uint32Array, size: number, bit: number, m1: number, m2: number, input: number): number;
    /**
     * Using a bit of the keystream extend the table of possible lfsr states. (simple version)
     * @param tbl - An array of the even/odd bits of lfsr.
     * @param size - Size of array.
     * @param bit - The bit of the keystream.
     * @returns The new size of array.
     * @internal
     * @group Internal
     */
    static extendTableSimple(tbl: Uint32Array, size: number, bit: number): number;
    /**
     * Recursively narrow down the search space, 4 bits of keystream at a time.
     * @param ctx -
     * @param ctx.evens - The array of even bits of possible lfsr states.
     * @param ctx.odds - The array of odd bits of possible lfsr states.
     * @param ctx.states - The array of recovered lfsr states.
     * @internal
     * @group Internal
     */
    static mfkeyRecoverState(ctx: {
        eks: number;
        evens: RecoverContextUint32Array;
        input: number;
        odds: RecoverContextUint32Array;
        oks: number;
        rem: number;
        states: Crypto1[];
    }): void;
    /**
     * Recover the state of the lfsr given 32 bits of the keystream.
     * Additionally you can use the in parameter to specify the value that was fed into the lfsr at the time the keystream was generated
     * @param ks2 -
     * @param input -
     * @returns The array of recovered lfsr states.
     * @internal
     * @group Internal
     */
    static lfsrRecovery32(ks2: number, input: number): Crypto1[];
    /**
     * Reverse 64 bits of keystream into possible lfsr states.
     * Variation mentioned in the paper. Somewhat optimized version
     * @param ks2 - keystream 2
     * @param ks3 - keystream 3
     * @returns The recovered lfsr state.
     * @internal
     * @group Internal
     */
    static lfsrRecovery64(ks2: number, ks3: number): Crypto1;
    /**
     * Recover the key with the two authentication attempts from reader.
     * @param opts -
     * @param opts.uid - The 4-bytes uid in the authentication attempt.
     * @param opts.nt0 - The nonce from tag in the first authentication attempt.
     * @param opts.nr0 - The calculated nonce response from reader in the first authentication attempt.
     * @param opts.ar0 - The random challenge from reader in the first authentication attempt.
     * @param opts.nt1 - The nonce from tag in the second authentication attempt.
     * @param opts.nr1 - The calculated nonce response from reader in the second authentication attempt.
     * @param opts.ar1 - The random challenge from reader in the second authentication attempt.
     * @returns The recovered key.
     * @example
     * ```js
     * const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.mfkey32v2({
     *   uid: 0x65535D33,
     *   nt0: 0xCB7B9ED9,
     *   nr0: 0x5A8FFEC6,
     *   ar0: 0x5C7C6F89,
     *   nt1: 0x1E6D9228,
     *   nr1: 0x6FB8B4A8,
     *   ar1: 0xEF4039FB,
     * }).toString('hex')) // A9AC67832330
     * console.log(Crypto1.mfkey32v2({
     *   uid: Buffer.fromHex('65535D33'),
     *   nt0: Buffer.fromHex('CB7B9ED9'),
     *   nr0: Buffer.fromHex('5A8FFEC6'),
     *   ar0: Buffer.fromHex('5C7C6F89'),
     *   nt1: Buffer.fromHex('1E6D9228'),
     *   nr1: Buffer.fromHex('6FB8B4A8'),
     *   ar1: Buffer.fromHex('EF4039FB'),
     * }).toString('hex')) // A9AC67832330
     * console.log(Crypto1.mfkey32v2({
     *   uid: '65535D33',
     *   nt0: 'CB7B9ED9',
     *   nr0: '5A8FFEC6',
     *   ar0: '5C7C6F89',
     *   nt1: '1E6D9228',
     *   nr1: '6FB8B4A8',
     *   ar1: 'EF4039FB',
     * }).toString('hex')) // A9AC67832330
     * ```
     */
    static mfkey32v2(opts: {
        uid: UInt32Like;
        nt0: UInt32Like;
        nr0: UInt32Like;
        ar0: UInt32Like;
        nt1: UInt32Like;
        nr1: UInt32Like;
        ar1: UInt32Like;
    }): Buffer;
    /**
     * A method for Tag to validate Reader has the correct key.
     * @param opts.ar - The encrypted prng successor of `opts.nt`.
     * @param opts.key - The 6-bytes key to be test.
     * @param opts.nr - The encrypted nonce from reader.
     * @param opts.nt - The nonce from tag.
     * @param opts.uid - The 4-bytes uid of tag.
     * @example
     * ```js
     * const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.mfkey32IsReaderHasKey({
     *   ar: 'CF0A3C7E',
     *   key: 'A9AC67832330',
     *   nr: 'FEDAC6D2',
     *   nt: '2C198BE4',
     *   uid: '65535D33',
     * }).toString('hex')) // true
     * ```
     */
    static mfkey32IsReaderHasKey(opts: {
        ar: UInt32Like;
        key: Buffer;
        nr: UInt32Like;
        nt: UInt32Like;
        uid: UInt32Like;
    }): boolean;
    /**
     * Recover the key with the successfully authentication between the reader and the tag.
     * @param opts -
     * @param opts.uid - The 4-bytes uid in the authentication.
     * @param opts.nt - The nonce from tag in the authentication.
     * @param opts.nr - The calculated response of `args.nt` from reader in the authentication.
     * @param opts.ar - The random challenge from reader in the authentication.
     * @param opts.at - The calculated response of `args.ar` from tag in the authentication.
     * @returns The recovered key.
     * @example
     * ```js
     * const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *
     * console.log(Crypto1.mfkey32v2({
     *   uid: 0x65535D33,
     *   nt: 0x2C198BE4,
     *   nr: 0xFEDAC6D2,
     *   ar: 0xCF0A3C7E,
     *   at: 0xF4A81AF8,
     * }).toString('hex')) // A9AC67832330
     * console.log(Crypto1.mfkey32v2({
     *   uid: Buffer.fromHex('65535D33'),
     *   nt: Buffer.fromHex('2C198BE4'),
     *   nr: Buffer.fromHex('FEDAC6D2'),
     *   ar: Buffer.fromHex('CF0A3C7E'),
     *   at: Buffer.fromHex('F4A81AF8'),
     * }).toString('hex')) // A9AC67832330
     * console.log(Crypto1.mfkey32v2({
     *   uid: '65535D33',
     *   nt: '2C198BE4',
     *   nr: 'FEDAC6D2',
     *   ar: 'CF0A3C7E',
     *   at: 'F4A81AF8',
     * }).toString('hex')) // A9AC67832330
     * ```
     */
    static mfkey64(opts: {
        uid: UInt32Like;
        nt: UInt32Like;
        nr: UInt32Like;
        ar: UInt32Like;
        at: UInt32Like;
    }): Buffer;
    /**
     * Decrypt the data.
     * @param opts -
     * @param opts.uid - The 4-bytes uid in the authentication.
     * @param opts.nt - The nonce from tag in the authentication.
     * @param opts.nr - The calculated response of `args.nt` from reader in the authentication.
     * @param opts.data - The encrypted data.
     * @param opts.key - The 6-bytes key to decrypt the data.
     * @returns The decrypted data.
     */
    static decrypt(opts: {
        uid: UInt32Like;
        nt: UInt32Like;
        nr: UInt32Like;
        data: Buffer;
        key: Buffer;
    }): Buffer;
    /**
     * @group Internal
     * @internal
     */
    static nestedRecoverState(opts: {
        uid: number;
        atks: Array<{
            ntp: number;
            ks1: number;
        }>;
    }): Buffer[];
    /**
     * Recover key from mifare tags with static nonce
     * @param opts -
     * @param opts.uid - The 4-bytes uid in the authentication.
     * @param opts.keyType - The key type of target block.
     * @param opts.atks - The nonce logs of the authentication.
     * @returns candidates keys
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     * const { Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     * const args = {
     *   uid: 'b908a16d',
     *   keyType: Mf1KeyType.KEY_A,
     *   atks: [
     *     { nt1: '01200145', nt2: '81901975' },
     *     { nt1: '01200145', nt2: 'cdd400f3' },
     *   ],
     * }
     * const keys = Crypto1.staticnested(args)
     * console.log(`keys = ${JSON.stringify(_.map(keys, key => key.toString('hex')))}`)
     * ```
     */
    static staticnested(opts: {
        uid: UInt32Like;
        keyType: Mf1KeyType;
        atks: Array<{
            nt1: UInt32Like;
            nt2: UInt32Like;
        }>;
    }): Buffer[];
    /**
     * Recover key from mifare tags with weak prng
     * @param opts -
     * @param opts.uid - The 4-bytes uid in the authentication.
     * @param opts.dist - The nonce distance between two authentication.
     * @param opts.atks - The logs of the nested attack.
     * @returns candidates keys
     * @example
     * ```js
     * const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     * const args = {
     *   uid: '877209e1',
     *   dist: '00000080',
     *   atks: [
     *     { nt1: 'b4a08a09', nt2: '8a15bbf2', par: 5 },
     *     { nt1: '1613293d', nt2: '912e6760', par: 7 }
     *   ]
     * }
     * const keys = Crypto1.nested(args)
     * console.log(`keys = ${JSON.stringify(_.map(keys, key => key.toString('hex')))}`)
     * ```
     */
    static nested(opts: {
        uid: UInt32Like;
        dist: UInt32Like;
        atks: Array<{
            nt1: UInt32Like;
            nt2: UInt32Like;
            par: UInt32Like;
        }>;
    }): Buffer[];
    /**
     * @group Internal
     * @internal
     */
    static nestedIsValidNonce(nt1: number, nt2: number, ks1: number, par: number): boolean;
    /**
     * @group Internal
     * @internal
     */
    static lfsrPrefixKs(ks: Buffer, isOdd: boolean): number[];
    /**
     * helper function which eliminates possible secret states using parity bits
     * @internal
     * @group Internal
     */
    static checkPfxParity(pfx: number, ar: number, par: number[][], odd: number, even: number, isZeroPar: boolean): Crypto1 | undefined;
    /**
     * @group Internal
     * @internal
     */
    static lfsrCommonPrefix(pfx: number, ar: number, ks: Buffer, par: number[][], isZeroPar: boolean): Crypto1[];
    /**
     * Recover the key from the tag with the darkside attack.
     * @param fnAcquire - An async function to acquire the darkside attack data.
     * @param fnCheckKey - An async function to check the key.
     * @param attempts - The maximum number of attempts to try.
     * @returns The recovered key.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, DarksideStatus, DeviceMode, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const { default: Crypto1 } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/Crypto1/+esm')
     *   await ultra.cmdChangeDeviceMode(DeviceMode.READER)
     *   const block = 0
     *   const keyType = Mf1KeyType.KEY_A
     *   const key = await Crypto1.darkside(
     *     async attempt => {
     *       const accquired = await ultra.cmdMf1AcquireDarkside(block, keyType, attempt === 0)
     *       console.log(_.mapValues(accquired, buf => Buffer.isBuffer(buf) ? buf.toString('hex') : buf))
     *       if (acquired.status === DarksideStatus.LUCKY_AUTH_OK) throw new Error('LUCKY_AUTH_OK')
     *       if (acquired.status !== DarksideStatus.OK) throw new Error('card is not vulnerable to Darkside attack')
     *       return accquired
     *     },
     *     async key => {
     *       return await ultra.cmdMf1CheckBlockKey({ block, keyType, key })
     *     },
     *   )
     *   console.log(`key founded: ${key.toString('hex')}`)
     * })(vm.ultra)
     * ```
     */
    static darkside(fnAcquire: (attempt: number) => Promise<{
        uid: Buffer;
        nt: Buffer;
        nr: Buffer;
        ar: Buffer;
        par: Buffer;
        ks: Buffer;
    }>, fnCheckKey: (key: Buffer) => Promise<boolean>, attempts?: number): Promise<Buffer>;
}

export { Crypto1 as default };
