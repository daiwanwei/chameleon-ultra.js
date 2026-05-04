import { Buffer } from '@taichunmin/buffer';
import { SetOptional } from 'type-fest';

declare class CustomEventTarget extends EventTarget {
    #private;
    on(type: string, listener: Listener): this;
    once(type: string, listener: Listener): this;
    emit(type: string, ...detail: any[]): void;
    removeListener(type: string, listener: Listener): this;
}
/** @inline */
type Listener = (...detail: any[]) => unknown;

/** @inline */
type MiddlewareComposeFn = (ctx: Record<string, any>, next: () => Promise<unknown>) => Promise<unknown>;

declare enum AnimationMode {
    FULL = 0,
    SHORT = 1,
    NONE = 2,
    SYMMETRIC = 3
}
declare enum ButtonAction {
    /** No Function */
    DISABLE = 0,
    /** Select next slot */
    CYCLE_SLOT_INC = 1,
    /** Select previous slot */
    CYCLE_SLOT_DEC = 2,
    /** Read then simulate the ID/UID card number */
    CLONE_IC_UID = 3,
    /** Show Battery Level */
    BATTERY = 4
}
declare enum ButtonType {
    BUTTON_A = 65,
    BUTTON_B = 66
}
declare enum Cmd {
    GET_APP_VERSION = 1000,
    CHANGE_DEVICE_MODE = 1001,
    GET_DEVICE_MODE = 1002,
    SET_ACTIVE_SLOT = 1003,
    SET_SLOT_TAG_TYPE = 1004,
    SET_SLOT_DATA_DEFAULT = 1005,
    SET_SLOT_ENABLE = 1006,
    SET_SLOT_TAG_NICK = 1007,
    GET_SLOT_TAG_NICK = 1008,
    SLOT_DATA_CONFIG_SAVE = 1009,
    ENTER_BOOTLOADER = 1010,
    GET_DEVICE_CHIP_ID = 1011,
    GET_DEVICE_ADDRESS = 1012,
    SAVE_SETTINGS = 1013,
    RESET_SETTINGS = 1014,
    SET_ANIMATION_MODE = 1015,
    GET_ANIMATION_MODE = 1016,
    GET_GIT_VERSION = 1017,
    GET_ACTIVE_SLOT = 1018,
    GET_SLOT_INFO = 1019,
    WIPE_FDS = 1020,
    DELETE_SLOT_TAG_NICK = 1021,
    GET_ENABLED_SLOTS = 1023,
    DELETE_SLOT_SENSE_TYPE = 1024,
    GET_BATTERY_INFO = 1025,
    GET_BUTTON_PRESS_CONFIG = 1026,
    SET_BUTTON_PRESS_CONFIG = 1027,
    GET_LONG_BUTTON_PRESS_CONFIG = 1028,
    SET_LONG_BUTTON_PRESS_CONFIG = 1029,
    SET_BLE_PAIRING_KEY = 1030,
    GET_BLE_PAIRING_KEY = 1031,
    DELETE_ALL_BLE_BONDS = 1032,
    GET_DEVICE_MODEL = 1033,
    GET_DEVICE_SETTINGS = 1034,
    GET_DEVICE_CAPABILITIES = 1035,
    GET_BLE_PAIRING_ENABLE = 1036,
    SET_BLE_PAIRING_ENABLE = 1037,
    GET_ALL_SLOT_NICKS = 1038,
    HF14A_SCAN = 2000,
    MF1_DETECT_SUPPORT = 2001,
    MF1_DETECT_PRNG = 2002,
    MF1_STATIC_NESTED_ACQUIRE = 2003,
    MF1_DARKSIDE_ACQUIRE = 2004,
    MF1_DETECT_NT_DIST = 2005,
    MF1_NESTED_ACQUIRE = 2006,
    MF1_AUTH_ONE_KEY_BLOCK = 2007,
    MF1_READ_ONE_BLOCK = 2008,
    MF1_WRITE_ONE_BLOCK = 2009,
    HF14A_RAW = 2010,
    MF1_MANIPULATE_VALUE_BLOCK = 2011,
    MF1_CHECK_KEYS_OF_SECTORS = 2012,
    MF1_HARDNESTED_ACQUIRE = 2013,
    MF1_ENC_NESTED_ACQUIRE = 2014,
    MF1_CHECK_KEYS_ON_BLOCK = 2015,
    HF14A_GET_CONFIG = 2200,
    HF14A_SET_CONFIG = 2201,
    EM410X_SCAN = 3000,
    EM410X_WRITE_TO_T55XX = 3001,
    EM410X_ELECTRA_WRITE_TO_T55XX = 3006,
    HIDPROX_SCAN = 3002,
    HIDPROX_WRITE_TO_T55XX = 3003,
    VIKING_SCAN = 3004,
    VIKING_WRITE_TO_T55XX = 3005,
    ADC_GENERIC_READ = 3009,
    MF1_WRITE_EMU_BLOCK_DATA = 4000,
    HF14A_SET_ANTI_COLL_DATA = 4001,
    MF1_SET_DETECTION_ENABLE = 4004,
    MF1_GET_DETECTION_COUNT = 4005,
    MF1_GET_DETECTION_LOG = 4006,
    MF1_GET_DETECTION_ENABLE = 4007,
    MF1_READ_EMU_BLOCK_DATA = 4008,
    MF1_GET_EMULATOR_CONFIG = 4009,
    MF1_GET_GEN1A_MODE = 4010,
    MF1_SET_GEN1A_MODE = 4011,
    MF1_GET_GEN2_MODE = 4012,
    MF1_SET_GEN2_MODE = 4013,
    MF1_GET_BLOCK_ANTI_COLL_MODE = 4014,
    MF1_SET_BLOCK_ANTI_COLL_MODE = 4015,
    MF1_GET_WRITE_MODE = 4016,
    MF1_SET_WRITE_MODE = 4017,
    HF14A_GET_ANTI_COLL_DATA = 4018,
    MF0_NTAG_GET_UID_MAGIC_MODE = 4019,
    MF0_NTAG_SET_UID_MAGIC_MODE = 4020,
    MF0_NTAG_READ_EMU_PAGE_DATA = 4021,
    MF0_NTAG_WRITE_EMU_PAGE_DATA = 4022,
    MF0_NTAG_GET_VERSION_DATA = 4023,
    MF0_NTAG_SET_VERSION_DATA = 4024,
    MF0_NTAG_GET_SIGNATURE_DATA = 4025,
    MF0_NTAG_SET_SIGNATURE_DATA = 4026,
    MF0_NTAG_GET_COUNTER_DATA = 4027,
    MF0_NTAG_SET_COUNTER_DATA = 4028,
    MF0_NTAG_RESET_AUTH_CNT = 4029,
    MF0_NTAG_GET_PAGE_COUNT = 4030,
    MF0_NTAG_GET_WRITE_MODE = 4031,
    MF0_NTAG_SET_WRITE_MODE = 4032,
    MF0_NTAG_SET_DETECTION_ENABLE = 4033,
    MF0_NTAG_GET_DETECTION_COUNT = 4034,
    MF0_NTAG_GET_DETECTION_LOG = 4035,
    MF0_NTAG_GET_DETECTION_ENABLE = 4036,
    MF0_NTAG_GET_EMULATOR_CONFIG = 4037,
    MF1_SET_FIELD_OFF_DO_RESET = 4038,
    MF1_GET_FIELD_OFF_DO_RESET = 4039,
    EM410X_SET_EMU_ID = 5000,
    EM410X_GET_EMU_ID = 5001,
    HIDPROX_SET_EMU_ID = 5002,
    HIDPROX_GET_EMU_ID = 5003,
    VIKING_SET_EMU_ID = 5004,
    VIKING_GET_EMU_ID = 5005
}
declare enum DarksideStatus {
    /** normal process */
    OK = 0,
    /** the random number cannot be fixed, this situation may appear on some UID card */
    CANT_FIX_NT = 1,
    /** the direct authentification is successful, maybe the key is just the default one */
    LUCKY_AUTH_OK = 2,
    /** the card does not respond to NACK, it may be a card that fixes Nack logic vulnerabilities */
    NO_NAK_SENT = 3,
    /** card change while running DARKSIDE */
    TAG_CHANGED = 4
}
declare enum DeviceMode {
    TAG = 0,
    READER = 1
}
declare enum DeviceModel {
    ULTRA = 0,
    LITE = 1
}
declare enum DfuFwId {
    BOOTLOADER = 0,
    APPLICATION = 1,
    SOFTDEVICE = 2
}
declare enum DfuFwType {
    SOFTDEVICE = 0,
    APPLICATION = 1,
    BOOTLOADER = 2,
    UNKNOWN = 255
}
declare enum DfuObjType {
    /** Invalid object type. */
    INVALID = 0,
    /** Command object. */
    COMMAND = 1,
    /** Data object. */
    DATA = 2
}
declare enum FreqType {
    /** No Freq */
    NONE = 0,
    /** Low Freq: 125 kHz */
    LF = 1,
    /** High Freq: 13.56 MHz */
    HF = 2
}
declare enum Hf14aBccMode {
    /** follow standard */
    STANDARD = 0,
    /** auto calculate from UID */
    UID_CALC = 1,
    /** use BCC from block 0 */
    BLOCK0 = 2
}
declare enum Hf14aCascadeLevelMode {
    /** follow standard */
    STANDARD = 0,
    /** force this cascade level */
    FORCE = 1,
    /** skip this cascade level */
    SKIP = 2
}
declare enum Hf14aRatsMode {
    /** follow standard */
    STANDARD = 0,
    /** force RATS */
    FORCE = 1,
    /** skip RATS */
    SKIP = 2
}
declare enum HidProxFormat {
    /** HID H10301 26-bit */
    H10301 = 1,
    /** Indala 26-bit */
    IND26 = 2,
    /** Indala 27-bit */
    IND27 = 3,
    /** Indala ASC 27-bit */
    INDASC27 = 4,
    /** Tecom 27-bit */
    TECOM27 = 5,
    /** 2804 Wiegand 28-bit */
    W2804 = 6,
    /** Indala 29-bit */
    IND29 = 7,
    /** ATS Wiegand 30-bit */
    ATSW30 = 8,
    /** HID ADT 31-bit */
    ADT31 = 9,
    /** HID Check Point 32-bit */
    HCP32 = 10,
    /** HID Hewlett-Packard 32-bit */
    HPP32 = 11,
    /** Kastle 32-bit */
    KASTLE = 12,
    /** Indala/Kantech KFS 32-bit */
    KANTECH = 13,
    /** Wiegand 32-bit */
    WIE32 = 14,
    /** HID D10202 33-bit */
    D10202 = 15,
    /** HID H10306 34-bit */
    H10306 = 16,
    /** Honeywell/Northern N10002 34-bit */
    N10002 = 17,
    /** Indala Optus 34-bit */
    OPTUS34 = 18,
    /** Cardkey Smartpass 34-bit */
    SMP34 = 19,
    /** BQT 34-bit */
    BQT34 = 20,
    /** HID Corporate 1000 35-bit Std */
    C1K35S = 21,
    /** HID KeyScan 36-bit */
    C15001 = 22,
    /** HID Simplex 36-bit */
    S12906 = 23,
    /** HID 36-bit Siemens */
    SIE36 = 24,
    /** HID H10320 37-bit BCD */
    H10320 = 25,
    /** HID H10302 37-bit huge ID */
    H10302 = 26,
    /** HID H10304 37-bit */
    H10304 = 27,
    /** HID P10004 37-bit PCSC */
    P10004 = 28,
    /** HID Generic 37-bit */
    HGEN37 = 29,
    /** PointGuard MDI 37-bit */
    MDI37 = 30,
    /** HID ACTProx 36-bit */
    ACTPHID = 42
}
declare enum Mf1EmuWriteMode {
    /** Normal write as standard mifare */
    NORMAL = 0,
    /** Send NACK to write attempts */
    DENIED = 1,
    /** Acknowledge writes, but don't remember contents */
    DECEIVE = 2,
    /** Store data to RAM, but not save to persistent storage */
    SHADOW = 3,
    /** Shadow requested, will be changed to SHADOW and stored to ROM */
    SHADOW_REQ = 4
}
declare enum Mf1KeyType {
    KEY_A = 96,
    KEY_B = 97
}
declare enum Mf1PrngType {
    /** StaticNested: the random number of the card response is fixed */
    STATIC = 0,
    /** Nested: the random number of the card response is weak */
    WEAK = 1,
    /** HardNested: the random number of the card response is unpredictable */
    HARD = 2
}
/**
 * Operators of mifare classic value block manipulation.
 */
declare enum Mf1VblockOperator {
    /** decrement value by X (0 ~ 2147483647) from src to dst */
    DECREMENT = 192,
    /** increment value by X (0 ~ 2147483647) from src to dst */
    INCREMENT = 193,
    /** copy value from src to dst (Restore and Transfer) */
    RESTORE = 194
}
declare enum MfuEmuWriteMode {
    /** Normal write as standard mifare */
    NORMAL = 0,
    /** Send NACK to write attempts */
    DENIED = 1,
    /** Acknowledge writes, but don't remember contents */
    DECEIVE = 2,
    /** Store data to RAM, but not save to persistent storage */
    SHADOW = 3,
    /** Shadow requested, will be changed to SHADOW and stored to ROM */
    SHADOW_REQ = 4
}
declare enum NxpMfuType {
    UNKNOWN = 0,
    UL = 1,
    UL_C = 2,
    UL_EV1_48 = 3,
    UL_EV1_128 = 4,
    NTAG = 5,
    NTAG_203 = 6,
    NTAG_210 = 7,
    NTAG_212 = 8,
    NTAG_213 = 9,
    NTAG_215 = 10,
    NTAG_216 = 11,
    MY_D = 12,
    MY_D_NFC = 13,
    /** my-d move / my-d move NFC */
    MY_D_MOVE = 14,
    MY_D_MOVE_LEAN = 15,
    NTAG_I2C_1K = 16,
    NTAG_I2C_2K = 17,
    NTAG_I2C_1K_PLUS = 18,
    NTAG_I2C_2K_PLUS = 19,
    FUDAN_UL = 20,
    NTAG_213_F = 21,
    NTAG_216_F = 22,
    UL_EV1 = 23,
    UL_NANO_40 = 24,
    NTAG_213_TT = 25,
    NTAG_213_C = 26,
    NTAG_210u = 27,
    UL_AES = 28
}
declare enum TagType {
    UNDEFINED = 0,
    EM410X = 100,
    EM410X_16 = 101,
    EM410X_32 = 102,
    EM410X_64 = 103,
    EM410X_ELECTRA = 104,
    Viking = 170,
    HIDProx = 200,
    LF_END = 999,
    MIFARE_Mini = 1000,
    MIFARE_1024 = 1001,
    MIFARE_2048 = 1002,
    MIFARE_4096 = 1003,
    /** NTAG213 (NT2H1511) */
    NTAG_213 = 1100,
    /** NTAG215 (NT2H1511) */
    NTAG_215 = 1101,
    /** NTAG216 (NT2H1611) */
    NTAG_216 = 1102,
    /** Mifare Ultralight (MF0ICU1) */
    MF0_ICU1 = 1103,
    /** Mifare Ultralight C (MF0ICU2) */
    MF0_ICU2 = 1104,
    /** Mifare Ultralight EV1 (MF0UL11/MF0ULH11) */
    MF0_UL11 = 1105,
    /** Mifare Ultralight EV2 (MF0UL21/MF0ULH21) */
    MF0_UL21 = 1106,
    /** NTAG210 (NT2L1011) */
    NTAG_210 = 1107,
    /** NTAG212 (NT2L1211) */
    NTAG_212 = 1108
}
declare enum Slot {
    SLOT_1 = 0,
    SLOT_2 = 1,
    SLOT_3 = 2,
    SLOT_4 = 3,
    SLOT_5 = 4,
    SLOT_6 = 5,
    SLOT_7 = 6,
    SLOT_8 = 7
}

/**
 * The core library of `chameleon-ultra.js`. You need to register exactly one adapter to the `ChameleonUltra` instance.
 *
 * @see You can learn how to use `@taichunmin/buffer` from {@link https://taichunmin.idv.tw/js-buffer/ | here}.
 * @example
 * <details>
 * <summary>Click here see how to use the SDK.</summary>
 *
 * Example of import the library using `import` or `require`:
 *
 * ```js
 * // import
 * import { Buffer, ChameleonUltra } from 'chameleon-ultra.js'
 * import SerialPortAdapter from 'chameleon-ultra.js/plugin/SerialPortAdapter'
 * import WebbleAdapter from 'chameleon-ultra.js/plugin/WebbleAdapter'
 * import WebserialAdapter from 'chameleon-ultra.js/plugin/WebserialAdapter'
 *
 * // require
 * const { Buffer, ChameleonUltra } = require('chameleon-ultra.js')
 * const SerialPortAdapter = require('chameleon-ultra.js/plugin/SerialPortAdapter')
 * const WebbleAdapter = require('chameleon-ultra.js/plugin/WebbleAdapter')
 * const WebserialAdapter = require('chameleon-ultra.js/plugin/WebserialAdapter')
 * ```
 *
 * Example of import the library in Browser (place at the end of body):
 *
 * ```html
 * <!-- script -->
 * <script src="https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/dist/index.global.js"></script>
 * <script src="https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/dist/Crypto1.global.js"></script>
 * <script src="https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/dist/plugin/WebbleAdapter.global.js"></script>
 * <script src="https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/dist/plugin/WebserialAdapter.global.js"></script>
 * <script>
 *   const { Buffer, ChameleonUltra, WebbleAdapter, WebserialAdapter } = window.ChameleonUltraJS
 * </script>
 *
 * <!-- module -->
 * <script type="module">
 *   import { Buffer, ChameleonUltra } from 'https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm'
 *   import WebbleAdapter from 'https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/plugin/WebbleAdapter/+esm'
 *   import WebserialAdapter from 'https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/plugin/WebserialAdapter/+esm'
 * </script>
 *
 * <!-- module + async import -->
 * <script type="module">
 *   const { Buffer, ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
 *   const { default: WebbleAdapter } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/plugin/WebbleAdapter/+esm')
 *   const { default: WebserialAdapter } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/plugin/WebserialAdapter/+esm')
 * </script>
 * ```
 *
 * After importing the SDK, you need to register exactly one adapter to the `ChameleonUltra` instance:
 *
 * ```js
 * const ultraUsb = new ChameleonUltra()
 * ultraUsb.use(new WebserialAdapter())
 * const ultraBle = new ChameleonUltra()
 * ultraBle.use(new WebbleAdapter())
 * ```
 *
 * </details>
 */
declare class ChameleonUltra {
    #private;
    /** @hidden */
    $adapter?: any;
    /**
     * The supported version of SDK.
     * @group Device Related
     */
    static VERSION_SUPPORTED: {
        readonly gte: "2.0";
        readonly lt: "3.0";
    };
    /**
     * @hidden
     */
    readDefaultTimeout: number;
    /**
     * The event emitter of `ChameleonUltra`.
     * - `disconnected`: Emitted when device is disconnected.
     * - `connected`: Emitted when device is connected.
     * - `debug`: Emitted when debug message is generated. `(logName: string, formatter: any, ...args: [] | any[]) => void`
     * @hidden
     */
    readonly emitter: CustomEventTarget;
    /**
     * @hidden
     */
    port: UltraSerialPort | null;
    constructor();
    /**
     * Register a plugin.
     * @param plugin - The plugin to register.
     * @param option - The option to pass to plugin.install().
     * @internal
     * @group Internal
     */
    use(plugin: UltraPlugin, option?: any): Promise<this>;
    /**
     * Register a hook.
     * @param hookName - The hook name.
     * @param fn - The function to register.
     * @internal
     * @group Internal
     */
    addHook(hookName: string, fn: MiddlewareComposeFn): this;
    /**
     * Invoke a hook with context.
     * @param hookName - The hook name.
     * @param ctx - The context will be passed to every middleware.
     * @param next - The next middleware function.
     * @returns The return value depent on the middlewares
     * @internal
     * @group Internal
     */
    invokeHook(hookName: string, ctx?: any, next?: MiddlewareComposeFn): Promise<unknown>;
    /**
     * Connect to ChameleonUltra. This method will be called automatically when you call any command.
     * @group Connection Related
     */
    connect(): Promise<void>;
    /**
     * Disconnect ChameleonUltra.
     * @group Connection Related
     */
    disconnect(err?: Error): Promise<void>;
    /**
     * Return true if ChameleonUltra is connected.
     * @group Connection Related
     */
    isConnected(): boolean;
    /**
     * Return true if ChameleonUltra is in DFU mode.
     * @group DFU Related
     */
    isDfu(): boolean;
    /**
     * Get current firmware version of device.
     * @returns Current firmware version of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdGetAppVersion()) // '1.0'
     * })(vm.ultra)
     * ```
     */
    cmdGetAppVersion(): Promise<`${number}.${number}`>;
    /**
     * Change device mode to tag reader or tag emulator.
     * @param mode - The mode to be changed.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { DeviceMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdChangeDeviceMode(DeviceMode.TAG)
     * })(vm.ultra)
     * ```
     */
    cmdChangeDeviceMode(mode: DeviceMode): Promise<void>;
    /**
     * Get current mode of device.
     * @returns Current mode of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { DeviceMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const deviceMode = await ultra.cmdGetDeviceMode()
     *   console.log(DeviceMode[deviceMode]) // 'TAG'
     * })(vm.ultra)
     * ```
     */
    cmdGetDeviceMode(): Promise<DeviceMode>;
    /**
     * Automatically change the device mode to `mode` if the current device mode is not equal to `mode`.
     * @group Device Related
     */
    assureDeviceMode(mode: DeviceMode): Promise<void>;
    /**
     * Change the active emulation tag slot of device.
     * @param slot - The slot to be active.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotSetActive(Slot.SLOT_1)
     * })(vm.ultra)
     * ```
     */
    cmdSlotSetActive(slot: Slot): Promise<void>;
    /**
     * Change the emulation tag type of specified slot.
     * @param slot - The slot to be set.
     * @param tagType - The tag type to be set.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotChangeTagType(Slot.SLOT_1, TagType.MIFARE_1024)
     * })(vm.ultra)
     * ```
     */
    cmdSlotChangeTagType(slot: Slot, tagType: TagType): Promise<void>;
    /**
     * Reset the emulation tag data of specified tag type in specified slot to default values.
     * @param slot - The slot to be reset.
     * @param tagType - The tag type to be reset.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotResetTagType(Slot.SLOT_1, TagType.MIFARE_1024)
     * })(vm.ultra)
     * ```
     */
    cmdSlotResetTagType(slot: Slot, tagType: TagType): Promise<void>;
    /**
     * Enable or disable the specified slot.
     * @param slot - The slot to be enable/disable.
     * @param enable - `true` to enable the slot, `false` to disable the slot.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { FreqType, Slot } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotSetEnable(Slot.SLOT_1, FreqType.HF, true)
     * })(vm.ultra)
     * ```
     */
    cmdSlotSetEnable(slot: Slot, freq: FreqType, enable: boolean | number): Promise<void>;
    /**
     * Helper function to change slot to tagType, reset to default tagType data, enable slot, save settings and set active slot.
     * @param slot - The target slot.
     * @param hfTagType - The hf tagType to be change. If `null`, the hf of slot will be skip.
     * @param lfTagType - The lf tagType to be change. If `null`, the lf of slot will be skip.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, TagType.MIFARE_1024, TagType.EM410X)
     * })(vm.ultra)
     * ```
     */
    slotChangeTagTypeAndActive(slot: Slot, hfTagType?: TagType | null, lfTagType?: TagType | null): Promise<void>;
    /**
     * Set the nickname of specified freq type in specified slot.
     * @param slot - The slot to be set.
     * @param freq - The freq type to be set.
     * @param name - The name to be set. The `byteLength` of name should between `1` and `32`.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, FreqType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotSetFreqName(Slot.SLOT_1, FreqType.HF, 'My Tag')
     * })(vm.ultra)
     * ```
     */
    cmdSlotSetFreqName(slot: Slot, freq: FreqType, name: string): Promise<void>;
    /**
     * Get the nickname of specified freq type in specified slot.
     * @param slot - The slot to be get.
     * @param freq - The freq type to be get.
     * @returns The nickname of specified freq type in specified slot.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, FreqType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const name = await ultra.cmdSlotGetFreqName(Slot.SLOT_1, FreqType.HF)
     *   console.log(name) // 'My Tag'
     * })(vm.ultra)
     * ```
     */
    cmdSlotGetFreqName(slot: Slot, freq: FreqType): Promise<string | undefined>;
    /**
     * The SlotSettings, hf tag data and lf tag data will be written to persistent storage. But the slot nickname is not affected by this command.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMf1EmuWriteBlock(1, Buffer.alloc(16))
     *   await ultra.cmdSlotSaveSettings()
     * })(vm.ultra)
     * ```
     */
    cmdSlotSaveSettings(): Promise<void>;
    /**
     * Enter bootloader mode.
     * @group DFU Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     * })(vm.ultra)
     * ```
     */
    cmdDfuEnter(): Promise<void>;
    /**
     * Get chipset id of device in hex format.
     * @returns Chipset id of device in hex format.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdGetDeviceChipId()) // 'db1c624228d9634c'
     * })(vm.ultra)
     * ```
     */
    cmdGetDeviceChipId(): Promise<string>;
    /**
     * Get the ble address of device.
     * @returns The ble address of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdBleGetAddress()) // 'E8:B6:3D:04:B6:FE'
     * })(vm.ultra)
     * ```
     */
    cmdBleGetAddress(): Promise<string>;
    /**
     * Save the settings of device to persistent storage.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdSaveSettings()
     * })(vm.ultra)
     * ```
     */
    cmdSaveSettings(): Promise<void>;
    /**
     * Reset the settings of device to default values.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdResetSettings()
     * })(vm.ultra)
     * ```
     */
    cmdResetSettings(): Promise<void>;
    /**
     * Set the animation mode of device while wake-up and sleep.
     * @param mode - The animation mode to be set.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { AnimationMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSetAnimationMode(AnimationMode.SHORT)
     * })(vm.ultra)
     * ```
     */
    cmdSetAnimationMode(mode: AnimationMode): Promise<void>;
    /**
     * Get the animation mode of device while wake-up and sleep.
     * @returns The animation mode of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { AnimationMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const mode = await ultra.cmdGetAnimationMode()
     *   console.log(AnimationMode[mode]) // 'FULL'
     * })(vm.ultra)
     * ```
     */
    cmdGetAnimationMode(): Promise<AnimationMode>;
    /**
     * Get the git version of firmware. The returned string is the output of `git describe --abbrev=7 --dirty --always --tags --match "v*.*"`. Depending on the status of repo, the string can be:
     * - a short tag, e.g. `v2.0.0` if the firmware is built from the tagged commit
     * - a longer tag indicating how many commits far from the latest tag and 7 nibbles of its commit hash, prepended with g, e.g. 5 commits away from v2.0.0: `v2.0.0-5-g617d6d0`
     * - a long tag finishing with `-dirty` if the local repo contains changes not yet committed, e.g. `v2.0.0-5-g617d6d0-dirty`
     * @returns The git version of firmware.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdGetGitVersion()) // 'v2.0.0-209-gc68ea99'
     * })(vm.ultra)
     * ```
     */
    cmdGetGitVersion(): Promise<string>;
    /**
     * Get the active emulation tag slot of device.
     * @returns The active slot of device.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const slot = await ultra.cmdSlotGetActive()
     *   console.log(Slot[slot]) // 'SLOT_1'
     * })(vm.ultra)
     * ```
     */
    cmdSlotGetActive(): Promise<Slot>;
    /**
     * Get the slot info of all slots.
     * @returns The slot info of all slots.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const slots = await ultra.cmdSlotGetInfo()
     *   console.log(JSON.stringify(slots))
     *   /**
     *    * [
     *    *   { "hfTagType": 1001, "lfTagType": 100 },
     *    *   { "hfTagType": 1001, "lfTagType": 0 },
     *    *   { "hfTagType": 0, "lfTagType": 100 },
     *    *   { "hfTagType": 0, "lfTagType": 0 },
     *    *   { "hfTagType": 0, "lfTagType": 0 },
     *    *   { "hfTagType": 0, "lfTagType": 0 },
     *    *   { "hfTagType": 0, "lfTagType": 0 },
     *    *   { "hfTagType": 0, "lfTagType": 0 }
     *    * ]
     *    *\/
     * })(vm.ultra)
     * ```
     */
    cmdSlotGetInfo(): Promise<Array<{
        hfTagType: TagType;
        lfTagType: TagType;
    }>>;
    /**
     * Permanently wipes Chameleon to factory settings. This will delete all your slot data and custom settings. There's no going back.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdWipeFds()
     * })(vm.ultra)
     * ```
     */
    cmdWipeFds(): Promise<void>;
    /**
     * Delete the nick name of the slot
     * @param slot - Slot number
     * @param freq - Frequency type
     * @returns `true` if success, `false` if slot name is empty.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, FreqType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(await ultra.cmdSlotDeleteFreqName(Slot.SLOT_1, FreqType.HF)) // true
     * })(vm.ultra)
     * ```
     */
    cmdSlotDeleteFreqName(slot: Slot, freq: FreqType): Promise<boolean>;
    /**
     * Get enabled slots.
     * @returns Enabled slots.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const enabledSlots = await ultra.cmdSlotGetIsEnable()
     *   console.log(JSON.stringify(enabledSlots))
     *   // [
     *   //   { "hf": true, "lf": true },
     *   //   { "hf": true, "lf": false },
     *   //   { "hf": false, "lf": true },
     *   //   { "hf": false, "lf": false },
     *   //   { "hf": false, "lf": false },
     *   //   { "hf": false, "lf": false },
     *   //   { "hf": false, "lf": false },
     *   //   { "hf": true, "lf": false }
     *   // ]
     * })(vm.ultra)
     * ```
     */
    cmdSlotGetIsEnable(): Promise<Array<{
        hf: boolean;
        lf: boolean;
    }>>;
    /**
     * Delete the emulation tag data of specified freq type in specified slot.
     * @param slot - The slot to be deleted.
     * @param freq - The freq type of slot.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, FreqType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSlotDeleteFreqType(Slot.SLOT_1, FreqType.HF)
     * })(vm.ultra)
     * ```
     */
    cmdSlotDeleteFreqType(slot: Slot, freq: FreqType): Promise<void>;
    /**
     * Get the battery info of device.
     * @returns The battery info of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const battery = await ultra.cmdGetBatteryInfo()
     *   console.log(JSON.stringify(battery)) // { "voltage": 4192, "level": 99 }
     * })(vm.ultra)
     * ```
     */
    cmdGetBatteryInfo(): Promise<{
        voltage: number;
        level: number;
    }>;
    /**
     * Get the button press action of specified button.
     * @param btn - The button to be get.
     * @returns The button press action of specified button.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { ButtonAction, ButtonType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const btnAction = await ultra.cmdGetButtonPressAction(ButtonType.BUTTON_A)
     *   console.log(ButtonAction[btnAction]) // 'CYCLE_SLOT_INC'
     * })(vm.ultra)
     * ```
     */
    cmdGetButtonPressAction(btn: ButtonType): Promise<ButtonAction>;
    /**
     * Set the button press action of specified button.
     * @param btn - The button to be set.
     * @param action - The button press action to be set.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { ButtonAction, ButtonType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSetButtonPressAction(ButtonType.BUTTON_A, ButtonAction.CYCLE_SLOT_INC)
     * })(vm.ultra)
     * ```
     */
    cmdSetButtonPressAction(btn: ButtonType, action: ButtonAction): Promise<void>;
    /**
     * Get the button long press action of specified button.
     * @param btn - The button to be get.
     * @returns The button long press action of specified button.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { ButtonAction, ButtonType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const btnAction = await ultra.cmdGetButtonLongPressAction(ButtonType.BUTTON_A)
     *   console.log(ButtonAction[btnAction]) // 'CLONE_IC_UID'
     * })(vm.ultra)
     * ```
     */
    cmdGetButtonLongPressAction(btn: ButtonType): Promise<ButtonAction>;
    /**
     * Set the button long press action of specified button.
     * @param btn - The button to be set.
     * @param action - The button long press action to be set.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { ButtonAction, ButtonType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdSetButtonLongPressAction(ButtonType.BUTTON_A, ButtonAction.CYCLE_SLOT_INC)
     * })(vm.ultra)
     * ```
     */
    cmdSetButtonLongPressAction(btn: ButtonType, action: ButtonAction): Promise<void>;
    /**
     * Set the ble pairing key of device.
     * @param key - The new ble pairing key.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdBleSetPairingKey('123456')
     * })(vm.ultra)
     * ```
     */
    cmdBleSetPairingKey(key: string): Promise<void>;
    /**
     * Get current ble pairing key of device.
     * @returns The ble pairing key.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdBleGetPairingKey()) // '123456'
     * })(vm.ultra)
     * ```
     */
    cmdBleGetPairingKey(): Promise<string>;
    /**
     * Delete all ble bindings.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdBleDeleteAllBonds()
     * })(vm.ultra)
     * ```
     */
    cmdBleDeleteAllBonds(): Promise<void>;
    /**
     * Get the device is ChameleonUltra or ChameleonLite.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { DeviceModel } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const model = await ultra.cmdGetDeviceModel()
     *   console.log(DeviceModel[model]) // 'ULTRA'
     * })(vm.ultra)
     * ```
     */
    cmdGetDeviceModel(): Promise<DeviceModel>;
    /**
     * Get the settings of device.
     * @returns The settings of device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const settings = await ultra.cmdGetDeviceSettings()
     *   console.log(JSON.stringify(settings))
     *   /**
     *    * {
     *    *   "version": 5,
     *    *   "animation": 0,
     *    *   "buttonPressAction": [1, 2],
     *    *   "buttonLongPressAction": [3, 3],
     *    *   "blePairingMode": false,
     *    *   "blePairingKey": "123456"
     *    * }
     *    *\/
     * })(vm.ultra)
     * ```
     */
    cmdGetDeviceSettings(): Promise<{
        version: number;
        animation: AnimationMode;
        buttonPressAction: ButtonAction[];
        buttonLongPressAction: ButtonAction[];
        blePairingMode: boolean;
        blePairingKey: string;
    }>;
    /**
     * Get the cmds supported by device.
     * @returns The cmds supported by device.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const cmds = await ultra.cmdGetSupportedCmds()
     *   console.log(cmds.size) // 67
     * })(vm.ultra)
     * ```
     */
    cmdGetSupportedCmds(): Promise<Set<Cmd>>;
    /**
     * To check if the specified cmd is supported by device.
     * @returns `true` if the specified cmd is supported by device, otherwise return `false`.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Cmd } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(await ultra.isCmdSupported(Cmd.GET_APP_VERSION)) // true
     * })(vm.ultra)
     * ```
     */
    isCmdSupported(cmd: Cmd): Promise<boolean>;
    /**
     * Get the ble pairing mode of device.
     * @returns `true` if pairing is required to connect to device, otherwise return `false`.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdBleGetPairingMode()) // false
     * })(vm.ultra)
     * ```
     */
    cmdBleGetPairingMode(): Promise<boolean>;
    /**
     * Set if the ble pairing is required when connecting to device.
     * @param enable - `true` to enable pairing mode, `false` to disable pairing mode.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdBleSetPairingMode(false)
     * })(vm.ultra)
     * ```
     */
    cmdBleSetPairingMode(enable: boolean | number): Promise<void>;
    /**
     * Retrieves the nicknames for all frequency types (HF and LF) across all slots.
     * @group Slot Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, FreqType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const resp = await ultra.cmdSlotGetFreqNames()
     *   console.log(resp[Slot.SLOT_1][FreqType.HF]) // 'My Tag'
     * })(vm.ultra)
     * ```
     */
    cmdSlotGetFreqNames(): Promise<Array<Record<FreqType.HF | FreqType.LF, string | undefined>>>;
    /**
     * Scan 14a tag, and return basic information. The device mode must be set to READER before using this command.
     * @returns The basic infomation of scanned tag.
     * @throws This command will throw an error if tag not scanned or any error occured.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const antiColl = _.first(await ultra.cmdHf14aScan())
     *   console.log(_.mapValues(antiColl, val => val.toString('hex')))
     *   // { uid: '040dc4420d2981', atqa: '4400', sak: '00', ats: ''}
     * })(vm.ultra)
     * ```
     */
    cmdHf14aScan(): Promise<Array<{
        uid: Buffer;
        atqa: Buffer;
        sak: Buffer;
        ats: Buffer;
    }>>;
    /**
     * Test whether it is mifare classic tag.
     * @returns `true` if tag is mifare classic tag, otherwise return `false`.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1IsSupport()) // true
     * })(vm.ultra)
     * ```
     */
    cmdMf1IsSupport(): Promise<boolean>;
    /**
     * Check the nt level of mifare protocol.
     * @returns The nt level of mifare protocol.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Mf1PrngType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(Mf1PrngType[await ultra.cmdMf1TestPrngType()]) // 'WEAK'
     * })(vm.ultra)
     * ```
     */
    cmdMf1TestPrngType(): Promise<Mf1PrngType>;
    /**
     * Use a known key to do the mifare static nested attack.
     * @param known - The known `block`, `keyType` and `key`.
     * @param target - The info of target key to be attack.
     * @param target.block - The block of target key.
     * @param target.keyType - The key type of target key.
     * @returns The result of mifare static nested attack.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const res1 = await ultra.cmdMf1AcquireStaticNested({
     *     block: 0,
     *     keyType: Mf1KeyType.KEY_A,
     *     key
     *   }, {
     *     block: 4,
     *     keyType: Mf1KeyType.KEY_A
     *   })
     *   const res = {
     *     uid: res1.uid.toString('hex'),
     *     atks: _.map(res1.atks, item => ({ nt1: item.nt1.toString('hex'), nt2: item.nt2.toString('hex') })),
     *   }
     *   console.log(res)
     *   // {
     *   //   uid: 'b908a16d',
     *   //   atks: [
     *   //     { nt1: '01200145', nt2: '81901975' },
     *   //     { nt1: '01200145', nt2: 'cdd400f3' },
     *   //   ],
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdMf1AcquireStaticNested(known: Mf1KnownBlockKey, target: {
        block: number;
        keyType: Mf1KeyType;
    }): Promise<{
        uid: Buffer;
        atks: Array<{
            nt1: Buffer;
            nt2: Buffer;
        }>;
    }>;
    /**
     * Acquire the data from mifare darkside attack.
     * @param block - The target block.
     * @param keyType - The target key type.
     * @param isFirst - `true` if this is the first attack.
     * @param syncMax - The max sync count of darkside attack.
     * @returns The data from mifare darkside attack.
     * @group Mifare Classic Related
     * @see [THE DARK SIDE OF SECURITY BY OBSCURITY and Cloning MiFare Classic Rail and Building Passes, Anywhere, Anytime](https://eprint.iacr.org/2009/137)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Mf1KeyType, DarksideStatus } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const res1 = await ultra.cmdMf1AcquireDarkside(0, Mf1KeyType.KEY_A, true)
     *   console.log(res1)
     *   const res2 = {
     *     status: `${DarksideStatus[res1.status]} (${res1.status})`,
     *     ...(res1.status !== DarksideStatus.OK ? {} : {
     *       ar: res1.ar.toString('hex'),
     *       ks: res1.ks.toString('hex'),
     *       nr: res1.nr.toString('hex'),
     *       nt: res1.nt.toString('hex'),
     *       par: res1.par.toString('hex'),
     *       uid: res1.uid.toString('hex'),
     *     }),
     *   }
     *   console.log(res2)
     *   // {
     *   //   "ar": "00000000",
     *   //   "ks": "0c0508080f04050a",
     *   //   "nr": "00000000",
     *   //   "nt": "b346fc3d",
     *   //   "par": "0000000000000000",
     *   //   "status": "OK (0)",
     *   //   "uid": "d3efed0c"
     *   // }
     * })(vm.ultra)
     * ```
     *
     * If you want to use darkside attack to recover the key, you can use the following example code:
     *
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, DarksideStatus, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const block = 0
     *   const keyType = Mf1KeyType.KEY_A
     *   const key = await Crypto1.darkside(
     *     async attempt => {
     *       const acquired = await ultra.cmdMf1AcquireDarkside(block, keyType, attempt === 0)
     *       console.log(_.mapValues(acquired, buf => Buffer.isBuffer(buf) ? buf.toString('hex') : buf))
     *       if (acquired.status === DarksideStatus.LUCKY_AUTH_OK) throw new Error('LUCKY_AUTH_OK')
     *       if (acquired.status !== DarksideStatus.OK) throw new Error('card is not vulnerable to Darkside attack')
     *       return acquired
     *     },
     *     async key => {
     *       return await ultra.cmdMf1CheckBlockKey({ block, keyType, key })
     *     },
     *   )
     *   console.log(`key founded: ${key.toString('hex')}`)
     * })(vm.ultra)
     * ```
     */
    cmdMf1AcquireDarkside(block: number, keyType: Mf1KeyType, isFirst: boolean | number, syncMax?: number): Promise<{
        status: DarksideStatus;
        uid?: Buffer;
        nt?: Buffer;
        par?: Buffer;
        ks?: Buffer;
        nr?: Buffer;
        ar?: Buffer;
    }>;
    /**
     * Dectect the nt distance of mifare protocol.
     * @param known - The info of known key.
     * @param known.block - The block of known key.
     * @param known.key - The known key.
     * @param known.keyType - The key type of known key.
     * @returns The nt distance of mifare protocol.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const res1 = await ultra.cmdMf1TestNtDistance({ block: 0, keyType: Mf1KeyType.KEY_A, key })
     *   const res2 = await ultra.cmdMf1AcquireNested(
     *     { block: 0, keyType: Mf1KeyType.KEY_A, key },
     *     { block: 4, keyType: Mf1KeyType.KEY_A },
     *   )
     *   const res = {
     *     uid: res1.uid.toString('hex'),
     *     dist: res1.dist.toString('hex'),
     *     atks: _.map(res2, item => ({
     *       nt1: item.nt1.toString('hex'),
     *       nt2: item.nt2.toString('hex'),
     *       par: item.par,
     *     }))
     *   }
     *   console.log(res)
     *   // {
     *   //   uid: '877209e1',
     *   //   dist: '00000080',
     *   //   atks: [
     *   //     { nt1: '35141fcb', nt2: '40430522', par: 7 },
     *   //     { nt1: 'cff2b3ef', nt2: '825ba8ea', par: 5 },
     *   //   ]
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdMf1TestNtDistance(known: {
        block: number;
        key: Buffer;
        keyType: Mf1KeyType;
    }): Promise<{
        uid: Buffer;
        dist: Buffer;
    }>;
    /**
     * Use a known key to do the mifare nested attack.
     * @param known - The known `block`, `keyType` and `key`.
     * @param target - The info of target key to be attack.
     * @param target.block - The block of target key.
     * @param target.keyType - The key type of target key.
     * @returns The result of mifare nested attack.
     * - nt1: Unblocked explicitly random number
     * - nt2: Random number of nested verification encryption
     * - par: The 3 parity bit of nested verification encryption
     * @group Mifare Classic Related
     * @see [Wirelessly Pickpocketing a Mifare Classic Card](http://proxmark.org/files/Documents/13.56%20MHz%20-%20MIFARE%20Classic/Wirelessly.Pickpocketing.a.Mifare.Classic.Card-IEEE.2009.pdf)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const res1 = await ultra.cmdMf1TestNtDistance({ block: 0, keyType: Mf1KeyType.KEY_A, key })
     *   const res2 = await ultra.cmdMf1AcquireNested(
     *     { block: 0, keyType: Mf1KeyType.KEY_A, key },
     *     { block: 4, keyType: Mf1KeyType.KEY_A },
     *   )
     *   const res = {
     *     uid: res1.uid.toString('hex'),
     *     dist: res1.dist.toString('hex'),
     *     atks: res2,
     *   }
     *   console.log(res)
     *   // {
     *   //   uid: '877209e1',
     *   //   dist: '00000080',
     *   //   atks: [
     *   //     { nt1: 0x35141FCB, nt2: 0x40430522, par: 7 },
     *   //     { nt1: 0xCFF2B3EF, nt2: 0x825BA8EA, par: 5 },
     *   //   ]
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdMf1AcquireNested(known: Mf1KnownBlockKey, target: {
        block: number;
        keyType: Mf1KeyType;
    }): Promise<Array<{
        nt1: number;
        nt2: number;
        par: number;
    }>>;
    /**
     * Check if the key is valid for specified block and key type.
     * @param known - The known `block`, `keyType` and `key`.
     * @returns `true` if the key is valid for specified block and key type.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   console.log(await ultra.cmdMf1CheckBlockKey({
     *     block: 0,
     *     keyType: Mf1KeyType.KEY_A,
     *     key,
     *   })) // true
     * })(vm.ultra)
     * ```
     */
    cmdMf1CheckBlockKey(known: Mf1KnownBlockKey): Promise<boolean>;
    /**
     * Read block data from a mifare tag.
     * @param known - The known `block`, `keyType` and `key`.
     * @returns The block data read from a mifare tag.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const block1 = await ultra.cmdMf1ReadBlock({
     *     block: 1,
     *     keyType: Mf1KeyType.KEY_A,
     *     key,
     *   })
     *   console.log(block1.toString('hex')) // '00000000000000000000000000000000'
     * })(vm.ultra)
     * ```
     */
    cmdMf1ReadBlock(known: Mf1KnownBlockKey): Promise<Buffer>;
    /**
     * Write data to a mifare tag.
     * @param opts - The block to be written and the key info of the block.
     * @param opts.block - The block to be written.
     * @param opts.keyType - The key type of the block.
     * @param opts.key - The key of the block.
     * @param opts.data - The block data to be written.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const block1 = Buffer.from('00000000000000000000000000000000', 'hex')
     *   await ultra.cmdMf1WriteBlock({
     *     block: 1,
     *     keyType: Mf1KeyType.KEY_A,
     *     key,
     *     data: block1,
     *   })
     * })(vm.ultra)
     * ```
     */
    cmdMf1WriteBlock(opts: {
        block: number;
        keyType: Mf1KeyType;
        key: Buffer;
        data: Buffer;
    }): Promise<void>;
    /**
     * Get the info composed of `cmdHf14aScan()` and `cmdMf1TestNtLevel()`.
     * @returns The info about 14a tag and mifare protocol.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Mf1PrngType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const tag = _.first(await ultra.hf14aInfo())
     *   console.log(tag.nxpTypeBySak) // 'MIFARE Classic 1K | Plus SE 1K | Plug S 2K | Plus X 2K'
     *   console.log(Mf1PrngType[tag.prngType]) // 'WEAK'
     *   console.log(_.mapValues(tag.antiColl, val => val.toString('hex')))
     *   // { uid: 'dbe3d63d', atqa: '0400', sak: '08', ats: '' }
     * })(vm.ultra)
     * ```
     */
    hf14aInfo(): Promise<Array<{
        antiColl: {
            uid: Buffer;
            atqa: Buffer;
            sak: Buffer;
            ats: Buffer;
        };
        nxpTypeBySak?: string;
        prngType?: Mf1PrngType;
    }>>;
    /**
     * Send raw NfcA data to a tag and receive the response.
     * @param opts.activateRfField - Set `true` to activate RF field. If `data` is not empty or `autoSelect` is true, `activateRfField` will be set to `true`.
     * @param opts.appendCrc - Set `true` to add CRC before sending data.
     * @param opts.autoSelect - Set `true` to automatically select card before sending data.
     * @param opts.checkResponseCrc - Set `true` to verify CRC of response and remove. If CRC of response is valid, CRC will be removed from response, otherwise will throw HF_ERR_CRC error.
     * @param opts.data - The data to be send. If `appendCrc` is `true`, the maximum length of data is `62`, otherwise is `64`.
     * @param opts.dataBitLength - Number of bits to send. Useful for send partial byte. `dataBitLength` is incompatible with `appendCrc`.
     * @param opts.keepRfField - Set `true` to keep the RF field active after sending.
     * @param opts.waitResponse - Default value is `true`. Set `false` to skip reading tag response.
     * @param opts.timeout - Default value is `1000 ms`. Maximum timeout for reading tag response in ms while `waitResponse` is `true`.
     * @returns The response from tag.
     * @group Reader/Writer Related
     */
    cmdHf14aRaw(opts: {
        activateRfField?: boolean;
        appendCrc?: boolean;
        autoSelect?: boolean;
        checkResponseCrc?: boolean;
        data?: Buffer;
        dataBitLength?: number;
        keepRfField?: boolean;
        waitResponse?: boolean;
        timeout?: number;
    }): Promise<Buffer>;
    /**
     * MIFARE Classic manipulate value block
     *
     * - Decrement: decrement value by `X` (`0` ~ `2147483647`) from src to dst
     * - Increment: increment value by `X` (`0` ~ `2147483647`) from src to dst
     * - Restore: copy value from src to dst (Restore and Transfer)
     *
     * @param src - The source `block`, `keyType` and `key`.
     * @param operator - The operator of value block.
     * @param operand - The operand of value block.
     * @param dst - The destination `block`, `keyType` and `key`.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType, Mf1VblockOperator } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const src = { block: 4, keyType: Mf1KeyType.KEY_A, key }
     *   await ultra.mf1VblockSetValue(src, { value: 2 })
     *   console.log(await ultra.mf1VblockGetValue(src))
     *   await ultra.cmdMf1VblockManipulate(
     *     { block: 4, keyType: Mf1KeyType.KEY_A, key },
     *     Mf1VblockOperator.DECREMENT, 1,
     *     { block: 4, keyType: Mf1KeyType.KEY_A, key },
     *   )
     *   console.log(await ultra.mf1VblockGetValue(src))
     * })(vm.ultra)
     * ```
     */
    cmdMf1VblockManipulate(src: Mf1KnownBlockKey, operator: Mf1VblockOperator, operand: number, dst: Mf1KnownBlockKey): Promise<void>;
    /**
     * Get value from `opts` block (MIFARE Classic value block)
     * @returns The value and address of `opts` block.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType, Mf1VblockOperator } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const src = { block: 4, keyType: Mf1KeyType.KEY_A, key }
     *   await ultra.mf1VblockSetValue(src, { value: 2 })
     *   console.log(await ultra.mf1VblockGetValue(src))
     * })(vm.ultra)
     * ```
     */
    mf1VblockGetValue(known: Mf1KnownBlockKey): Promise<{
        value: number;
        adr: number;
    }>;
    /**
     * Set value X (-2147483647 ~ 2147483647) to `dst` block (MIFARE Classic value block)
     * @param dst - The destination `block`, `keyType` and `key`.
     * @param val - The value and address to be set.
     * @param val.value - The value to be set. Default is `0`.
     * @param val.adr - The address to be set. Default is `dst.block`.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType, Mf1VblockOperator } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const src = { block: 4, keyType: Mf1KeyType.KEY_A, key }
     *   await ultra.mf1VblockSetValue(src, { value: 2 })
     *   console.log(await ultra.mf1VblockGetValue(src))
     * })(vm.ultra)
     * ```
     */
    mf1VblockSetValue(dst: Mf1KnownBlockKey, val: {
        adr?: number;
        value?: number;
    }): Promise<void>;
    /**
     * Given a list of keys, check which is the correct key A and key B of the sectors. If you want to check more than 83 keys, you can use `mf1CheckKeysOfSectors()`.
     * @param opts.keys - The keys to be checked. Maximum length is `83`.
     * @param opts.mask - The mask of sectors. 80 bits, 2 bits/sector, the first bit is key A, the second bit is key B, `0b1` represent to skip checking the key.
     * @returns
     * - `found`: 80 bits, 2 bits/sector, the first bit is key A, the second bit is key B, `0b1` represent key is found.
     * - `sectorKeys`: 80 keys, 2 keys/sector, the first key is key A, the second key is key B. `null` represent key is not found.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const mask = Buffer.from('00000000FFFFFFFFFFFF', 'hex')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const tsStart = Date.now()
     *   const result = await ultra.cmdMf1CheckKeysOfSectors({ keys, mask })
     *   console.log(`Time: ${Date.now() - tsStart}ms`)
     *   const replacer = function (k, v) { return Buffer.isBuffer(this[k]) ? this[k].toString('hex') : v }
     *   console.log(JSON.stringify(result, replacer, 2))
     * })(vm.ultra)
     * // {
     * //   "found": "ffffffff000000000000",
     * //   "sectorKeys": [
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     "ffffffffffff", "ffffffffffff", "ffffffffffff", "ffffffffffff",
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //     null, null, null, null,
     * //   ]
     * // }
     * ```
     */
    cmdMf1CheckKeysOfSectors(opts: {
        keys: Buffer[];
        mask: Buffer;
    }): Promise<null | {
        found: Buffer;
        sectorKeys: Array<Buffer | null>;
    }>;
    /**
     * Use a known key to do the mifare hardnested attack.
     * @param known - The known `block`, `keyType` and `key`.
     * @param target - The info of target key to be attack.
     * @param target.block - The block of target key.
     * @param target.keyType - The key type of target key.
     * @param target.slow - Is it a low-speed acquisition mode? Low-speed acquisition is suitable for some non-standard cards.
     * @returns The result of mifare hardnested attack.
     * - nt: tag nonce of nested authentication
     * - ntEnc: encrypted tag nonce of nested authentication
     * - par: The 8 parity bit of nested authentication
     * @group Mifare Classic Related
     * @see [Ciphertext-only Cryptanalysis on Hardened Mifare Classic Cards](http://proxmark.org/files/Documents/13.56%20MHz%20-%20MIFARE%20Classic/Ciphertext_only_cryptanalysis_on_hardened_mfc_cards_Carlos_Meijer.pdf)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const antiColl = _.first(await ultra.cmdHf14aScan())
     *   const key = Buffer.from('FFFFFFFFFFFF', 'hex')
     *   const res = await ultra.cmdMf1AcquireHardNested(
     *     { block: 0, keyType: Mf1KeyType.KEY_A, key },
     *     { block: 4, keyType: Mf1KeyType.KEY_A },
     *   )
     *   console.log(res)
     *   // [
     *   //   { nt: 0xCE178123, ntEnc: 0x37ADDC14, par: 0xB8 },
     *   //   { nt: 0xD9380BBF, ntEnc: 0x0080795A, par: 0xF3 },
     *   //   // ...
     *   // ]
     * })(vm.ultra)
     * ```
     */
    cmdMf1AcquireHardNested(known: Mf1KnownBlockKey, target: {
        block: number;
        keyType: Mf1KeyType;
        slow?: boolean;
    }): Promise<Array<{
        nt: number;
        ntEnc: number;
        par: number;
    }>>;
    /**
     * Execute nested attack against FUDAN static encrypted nonce cards (FM11RF08/FM11RF08S).
     * @param opts.key - FUDAN backdoor key, currently known: `A396EFA4E24F` (default), `A31667A8CEC1`, `518B3354E760`.
     * @group Mifare Classic Related
     * @see [MIFARE Classic: exposing the static encrypted nonce variant](https://eprint.iacr.org/2024/1275)
     */
    cmdMf1AcquireStaticEncryptedNested(opts: {
        key?: Buffer;
        startSector?: number;
        maxSectors?: number;
    }): Promise<Mf1AcquireStaticEncryptedNestedRes>;
    /**
     * Check keys for specified block and key type.
     * @param opts.block - The block number to check.
     * @param opts.keyType - The key type to check.
     * @param opts.keys - The keys to check.
     * @returns The found key.
     * @group Mifare Classic Related
     * @example
     * ```
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('A0A1A2A3A4A5\nD3F7D3F7D3F7\nFFFFFFFFFFFF', 'hex').chunk(6)
     *   const tsStart = Date.now()
     *   const key = await ultra.cmdMf1CheckKeysOfBlock({ block: 3, keyType: Mf1KeyType.KEY_A, keys })
     *   console.log(`elapsed time: ${Date.now() - tsStart}ms, found key: ${key.toString('hex')}`)
     * })(vm.ultra)
     * ```
     */
    cmdMf1CheckKeysOfBlock(opts: {
        block: number;
        keyType: Mf1KeyType;
        keys: Buffer[];
    }): Promise<Buffer>;
    /**
     * Get hf14a settings for scanning tags.
     * @returns
     * - `bcc`: The BCC mode.
     * - `cl2`: The cascade level 2 mode.
     * - `cl3`: The cascade level 3 mode.
     * - `rats`: The RATS mode.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const settings = await ultra.cmdHf14aGetSettings()
     *   console.log(JSON.stringify(settings))
     *   /* Example output:
     *   {"bcc":0,"cl2":0,"cl3":0,"rats":0}
     *   *\/
     * })(vm.ultra)
     * ```
    */
    cmdHf14aGetSettings(): Promise<{
        bcc: Hf14aBccMode;
        cl2: Hf14aCascadeLevelMode;
        cl3: Hf14aCascadeLevelMode;
        rats: Hf14aRatsMode;
    }>;
    /**
     * Set hf14a settings for scanning tags.
     * @param opts - The settings to be set.
     * @param opts.bcc - The BCC mode.
     * @param opts.cl2 - The cascade level 2 mode.
     * @param opts.cl3 - The cascade level 3 mode.
     * @param opts.rats - The RATS mode.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Hf14aBccMode, Hf14aCascadeLevelMode, Hf14aRatsMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const settings = {
     *     bcc: Hf14aBccMode.STANDARD,
     *     cl2: Hf14aCascadeLevelMode.STANDARD,
     *     cl3: Hf14aCascadeLevelMode.STANDARD,
     *     rats: Hf14aRatsMode.STANDARD,
     *   }
     *   await ultra.cmdHf14aSetSettings(settings)
     * })(vm.ultra)
     * ```
    */
    cmdHf14aSetSettings(opts: {
        bcc: Hf14aBccMode;
        cl2: Hf14aCascadeLevelMode;
        cl3: Hf14aCascadeLevelMode;
        rats: Hf14aRatsMode;
    }): Promise<void>;
    /**
     * Set/Get hf14a settings for scanning tags.
     * @param opts - The settings to be set.
     * @param opts.bcc - The BCC mode.
     * @param opts.cl2 - The cascade level 2 mode.
     * @param opts.cl3 - The cascade level 3 mode.
     * @param opts.rats - The RATS mode.
     * @returns
     * - `bcc`: The BCC mode.
     * - `cl2`: The cascade level 2 mode.
     * - `cl3`: The cascade level 3 mode.
     * - `rats`: The RATS mode.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Hf14aBccMode, Hf14aCascadeLevelMode, Hf14aRatsMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const settings = await ultra.hf14aSettings({ bcc: Hf14aBccMode.STANDARD })
     *   console.log(JSON.stringify(settings))
     * })(vm.ultra)
     * ```
    */
    hf14aSettings(opts: {
        bcc?: Hf14aBccMode;
        cl2?: Hf14aCascadeLevelMode;
        cl3?: Hf14aCascadeLevelMode;
        rats?: Hf14aRatsMode;
    }): Promise<Awaited<ReturnType<this['cmdHf14aGetSettings']>>>;
    /**
     * Scan em410x tag and read tag id
     * @returns The id of em410x tag.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const tag = await ultra.cmdEm410xScan()
     *   console.log({ tagType: TagType[tag.tagType], id: tag.id.toString('hex') }) // 'deadbeef88'
     * })(vm.ultra)
     * ```
     */
    cmdEm410xScan(): Promise<{
        tagType: TagType;
        id: Buffer;
    }>;
    /**
     * Write id of em410x tag to t55xx tag.
     * @param id - The 5 bytes id of em410x tag.
     * @param newKey - The new key of t55xx tag.
     * @param oldKeys - The keys to be checked.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const id = Buffer.from('deadbeef88', 'hex')
     *   // https://github.com/RfidResearchGroup/proxmark3/blob/master/client/dictionaries/t55xx_default_pwds.dic
     *   const newKey = Buffer.from('20206666', 'hex')
     *   const oldKeys = Buffer.from('5124364819920427', 'hex').chunk(4)
     *   await ultra.cmdEm410xWriteToT55xx(id, newKey, oldKeys)
     * })(vm.ultra)
     * ```
     */
    cmdEm410xWriteToT55xx(id: Buffer, newKey: Buffer, oldKeys: Buffer[]): Promise<void>;
    /**
     * Scan HID Prox tag and read tag information.
     * @returns
     * - `format`: The format of HID Prox tag.
     * - `fc`: The facility code of HID Prox tag.
     * - `cn`: The card number of HID Prox tag.
     * - `il`: The issue level of HID Prox tag.
     * - `oem`: The OEM code of HID Prox tag.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { HidProxFormat } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const tag = await ultra.cmdHidProxScan()
     *   console.log(JSON.stringify({ ...tag, format: HidProxFormat[tag.format] }))
     * })(vm.ultra)
     * ```
     */
    cmdHidProxScan(): Promise<HidProxTag>;
    /**
     * Write HID Prox tag to t55xx tag.
     * @param newKey - The new key of t55xx tag.
     * @param oldKeys - The keys to be checked.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, HidProxFormat } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   // https://github.com/RfidResearchGroup/proxmark3/blob/master/client/dictionaries/t55xx_default_pwds.dic
     *   const newKey = Buffer.from('20206666', 'hex')
     *   const oldKeys = Buffer.from('5124364819920427', 'hex').chunk(4)
     *   await ultra.cmdHidProxWriteToT55xx({ format: HidProxFormat.H10301, fc: 118, cn: 1603 }, newKey, oldKeys)
     * })(vm.ultra)
     * ```
     */
    cmdHidProxWriteToT55xx(tag: OptionalHidProxTag, newKey: Buffer, oldKeys: Buffer[]): Promise<void>;
    /**
     * Scan ID of Viking tags.
     * @returns The Viking tag ID be scanned.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const tagId = await ultra.cmdVikingScan()
     *   console.log(tagId.toString('hex')) // 'deadbeef'
     * })(vm.ultra)
     * ```
     */
    cmdVikingScan(): Promise<Buffer>;
    /**
     * Write id of viking tag to t55xx tag.
     * @param id - The id of viking tag.
     * @param newKey - The new key of t55xx tag.
     * @param oldKeys - The keys to be checked.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const id = Buffer.from('deadbeef', 'hex')
     *   // https://github.com/RfidResearchGroup/proxmark3/blob/master/client/dictionaries/t55xx_default_pwds.dic
     *   const newKey = Buffer.from('20206666', 'hex')
     *   const oldKeys = Buffer.from('5124364819920427', 'hex').chunk(4)
     *   await ultra.cmdVikingWriteToT55xx(id, newKey, oldKeys)
     * })(vm.ultra)
     * ```
     */
    cmdVikingWriteToT55xx(id: Buffer, newKey: Buffer, oldKeys: Buffer[]): Promise<void>;
    /**
     * Write id of em410x electra tag to t55xx tag.
     * @param id - The 13 bytes id of em410x electra tag.
     * @param newKey - The new key of t55xx tag.
     * @param oldKeys - The keys to be checked.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const id = Buffer.from('000102030405060708090a0b0c', 'hex')
     *   // https://github.com/RfidResearchGroup/proxmark3/blob/master/client/dictionaries/t55xx_default_pwds.dic
     *   const newKey = Buffer.from('20206666', 'hex')
     *   const oldKeys = Buffer.from('5124364819920427', 'hex').chunk(4)
     *   await ultra.cmdEm410xElectraWriteToT55xx(id, newKey, oldKeys)
     * })(vm.ultra)
     * ```
     */
    cmdEm410xElectraWriteToT55xx(id: Buffer, newKey: Buffer, oldKeys: Buffer[]): Promise<void>;
    /**
     * Read the raw ADC value of LF antenna. The raw ADC value is the direct value read from ADC without any processing, which may be helpful to debug some non working readers.
     * @returns The raw ADC value of LF antenna.
     * @group Reader/Writer Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const rawAdc = await ultra.cmdLfReadRawAdc()
     *   console.log(rawAdc.toString('hex'))
     * })(vm.ultra)
     * ```
     */
    cmdLfReadRawAdc(): Promise<Buffer>;
    /**
     * Set the mifare block data of actived slot.
     * @param offset - The start block of actived slot.
     * @param data - The data to be set. the length of data should be multiples of 16.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMf1EmuWriteBlock(1, Buffer.alloc(16))
     * })(vm.ultra)
     * ```
     */
    cmdMf1EmuWriteBlock(offset: number, data: Buffer): Promise<void>;
    /**
     * Set the mifare anti-collision data of actived slot.
     * @param opts.uid - The new uid to be set.
     * @param opts.atqa - `2 bytes`, the new atqa to be set.
     * @param opts.sak - `1 byte`, the new sak to be set.
     * @param opts.ats - The new ats to be set.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdHf14aSetAntiCollData({
     *     atqa: Buffer.from('0400', 'hex'),
     *     sak: Buffer.of(0x08),
     *     uid: Buffer.from('01020304', 'hex')
     *   })
     * })(vm.ultra)
     * ```
     */
    cmdHf14aSetAntiCollData(opts: {
        uid: Buffer;
        atqa: Buffer;
        sak: Buffer;
        ats?: Buffer;
    }): Promise<void>;
    /**
     * Enable or disable the mifare MFKey32 detection and clear the data of detections.
     * @param enable - `true` to enable the detection, `false` to disable the detection.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMf1SetDetectionEnable(true)
     * })(vm.ultra)
     * ```
     */
    cmdMf1SetDetectionEnable(enable: boolean | number): Promise<void>;
    /**
     * Get the count of mifare MFKey32 detections.
     * @returns The count of mifare MFKey32 detections.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1GetDetectionCount()) // 0
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetDetectionCount(): Promise<number>;
    /**
     * Get the data of mifare MFKey32 detections.
     * @param offset - The start log of detections to be get.
     * @returns The mifare MFKey32 detections.
     * @group Mifare Classic Related
     * @see
     * 1. [Dismantling MIFARE Classic](http://proxmark.org/files/Documents/13.56%20MHz%20-%20MIFARE%20Classic/Dismantling.MIFARE.Classic-ESORICS.2008.pdf)
     * 2. [Recovering MIFARE Classic keys](https://docs.flipper.net/nfc/mfkey32)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const logs = await ultra.cmdMf1GetDetectionLogs(0)
     *   console.log(logs)
     *   /**
     *    * {
     *    *   "block": 2,
     *    *   "isKeyB": 1,
     *    *   "isNested": 0,
     *    *   "uid": Buffer.from('65535d33', 'hex'),
     *    *   "nt": Buffer.from('cb7b9ed9', 'hex'),
     *    *   "nr": Buffer.from('5a8ffec6', 'hex'),
     *    *   "ar": Buffer.from('5c7c6f89', 'hex'),
     *    * }
     *    *\/
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetDetectionLogs(offset?: number): Promise<Array<{
        block: number;
        isKeyB: boolean;
        isNested: boolean;
        uid: Buffer;
        nt: Buffer;
        nr: Buffer;
        ar: Buffer;
    }>>;
    /**
     * Get the feature of mifare MFKey32 detections is enabled or not.
     * @returns `true` if the feature of mifare MFKey32 detections is enabled, otherwise return `false`.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1GetDetectionEnable()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetDetectionEnable(): Promise<boolean>;
    /**
     * Get the mifare block data of actived slot.
     * @param offset - The start block of actived slot.
     * @param length - The count of blocks to be get.
     * @returns The mifare block data of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.cmdMf1EmuReadBlock(1)
     *   console.log(data.toString('hex')) // '00000000000000000000000000000000'
     * })(vm.ultra)
     * ```
     */
    cmdMf1EmuReadBlock(offset?: number, length?: number): Promise<Buffer>;
    /**
     * Get the mifare settings of actived slot.
     * @returns The mifare settings of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const mf1Settings = await ultra.cmdMf1GetEmuSettings()
     *   console.log(JSON.stringify(mf1Settings))
     *   /*
     *   {
     *     "detection": false,
     *     "gen1a": false,
     *     "gen2": false,
     *     "antiColl": false,
     *     "write": 0
     *   }
     *   *\/
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetEmuSettings(): Promise<{
        detection: boolean;
        gen1a: boolean;
        gen2: boolean;
        antiColl: boolean;
        write: Mf1EmuWriteMode;
    }>;
    /**
     * Set the mifare gen1a mode of actived slot.
     * @returns The mifare gen1a mode of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1GetGen1aMode()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetGen1aMode(): Promise<boolean>;
    /**
     * Set the mifare gen1a mode of actived slot.
     * @param enable - `true` to enable the gen1a mode, `false` to disable the gen1a mode.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMf1SetGen1aMode(false)
     * })(vm.ultra)
     * ```
     */
    cmdMf1SetGen1aMode(enable: boolean | number): Promise<void>;
    /**
     * Get the mifare gen2 mode of actived slot.
     * @returns The mifare gen2 mode of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1GetGen2Mode()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetGen2Mode(): Promise<boolean>;
    /**
     * Set the mifare gen2 mode of actived slot.
     * @param enable - `true` to enable the gen2 mode, `false` to disable the gen2 mode.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMf1SetGen2Mode(false)
     * })(vm.ultra)
     * ```
     */
    cmdMf1SetGen2Mode(enable: boolean | number): Promise<void>;
    /**
     * Get the mode of actived slot that using anti-collision data from block 0 for 4 byte UID tags or not.
     * @returns The mode of actived slot that using anti-collision data from block 0 for 4 byte UID tags or not.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMf1GetAntiCollMode()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetAntiCollMode(): Promise<boolean>;
    /**
     * Set the mode of actived slot that using anti-collision data from block 0 for 4 byte UID tags or not.
     * @param enable - `true` to enable the mode, `false` to disable the mode.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMf1SetAntiCollMode(false)
     * })(vm.ultra)
     * ```
     */
    cmdMf1SetAntiCollMode(enable: boolean | number): Promise<void>;
    /**
     * Get the mifare write mode of actived slot.
     * @returns The mifare write mode of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Mf1EmuWriteMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(Mf1EmuWriteMode[await ultra.cmdMf1GetWriteMode()]) // NORMAL
     * })(vm.ultra)
     * ```
     */
    cmdMf1GetWriteMode(): Promise<Mf1EmuWriteMode>;
    /**
     * Set the mifare write mode of actived slot.
     * @param mode - The mifare write mode of actived slot.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Mf1EmuWriteMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMf1SetWriteMode(Mf1EmuWriteMode.NORMAL)
     * })(vm.ultra)
     * ```
     */
    cmdMf1SetWriteMode(mode: Mf1EmuWriteMode): Promise<void>;
    /**
     * Get anti-collision data from actived slot.
     * @returns The anti-collision data from actived slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const res = await ultra.cmdHf14aGetAntiCollData()
     *   console.log(JSON.stringify(res))
     *   // {
     *   //   "uid": { "type": "Buffer", "data": [222, 173, 190, 239] },
     *   //   "atqa": { "type": "Buffer", "data": [4, 0] },
     *   //   "sak": { "type": "Buffer", "data": [8] },
     *   //   "ats": { "type": "Buffer", "data": [] }
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdHf14aGetAntiCollData(): Promise<{
        uid: Buffer;
        atqa: Buffer;
        sak: Buffer;
        ats: Buffer;
    } | null>;
    /**
     * Get the magic mode of actived slot.
     *
     * If the actived slot is in magic mode, all read and write protection is bypassed.
     *
     * - The UID (page 0-1) can be write.
     * - Static Lock Bytes (page 2) and Dynamic Lock Bytes can be write with any value.
     * - The Capability Container CC of NTAG (page 3) can be write with any value.
     * - PWD and PACK can be read.
     * - All other pages can be read/write without authentication.
     * - The counter of NTAG can be read without authentication.
     * @group Mifare Ultralight Related
     * @returns The magic mode of actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetMagicMode()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetMagicMode(): Promise<boolean>;
    /**
     * Set the magic mode of actived slot.
     *
     * If the actived slot is in magic mode, all read and write protection is bypassed.
     *
     * - The UID (page 0-1) can be write.
     * - Static Lock Bytes (page 2) and Dynamic Lock Bytes can be write with any value.
     * - The Capability Container CC of NTAG (page 3) can be write with any value.
     * - PWD and PACK can be read.
     * - All other pages can be read/write without authentication.
     * - The counter of NTAG can be read without authentication.
     * @param enable - The magic mode of actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMfuSetMagicMode(false)
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetMagicMode(enable: boolean | number): Promise<void>;
    /**
     * Get the page data of actived slot.
     * @param offset - The start page of actived slot.
     * @param length - The count of pages to be get. Must satisfy: `1 <= length <= 128`.
     * @group Mifare Ultralight Related
     * @returns The page data of actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.cmdMfuReadEmuPage(1)
     *   console.log(data.toString('hex')) // 'fa5c6480'
     * })(vm.ultra)
     * ```
     */
    cmdMfuReadEmuPage(offset?: number, length?: number): Promise<Buffer>;
    /**
     * Set the page data of actived slot.
     * @param offset - The start page of actived slot.
     * @param data - The data to be write. Length of data must be multiples of 4 and satisfy: `4 <= data.length <= 508`.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMfuWriteEmuPage(1, Buffer.from('fa5c6480', 'hex'))
     * })(vm.ultra)
     * ```
     */
    cmdMfuWriteEmuPage(offset: number, data: Buffer): Promise<void>;
    /**
     * Get the version of actived slot. The version is used to retrieve information on the NTAG family, the product version, storage size and other product data required to identify the specific NTAG21x.
     * @group Mifare Ultralight Related
     * @returns The version of actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.cmdMfuGetEmuVersion()
     *   console.log(data.toString('hex')) // '0004040201001103'
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuVersion(): Promise<Buffer | undefined>;
    /**
     * Set the version of actived slot. The version is used to retrieve information on the NTAG family, the product version, storage size and other product data required to identify the specific NTAG21x.
     * @param version - The version of actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMfuSetEmuVersion(Buffer.from('0004040201001103', 'hex'))
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetEmuVersion(version: Buffer): Promise<void>;
    /**
     * Get the signature of actived slot. NTAG21x features a cryptographically supported originality check. The signature is used to verify with a certain confidence that the tag is using an IC manufactured by NXP Semiconductors. The signature digital is based on standard Elliptic Curve Cryptography (curve name secp128r1), according to the ECDSA algorithm.
     * @group Mifare Ultralight Related
     * @returns The signature of actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.cmdMfuGetEmuSignature()
     *   console.log(data.toString('hex')) // '0000000000000000000000000000000000000000000000000000000000000000'
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuSignature(): Promise<Buffer | undefined>;
    /**
     * Set the signature of actived slot. NTAG21x features a cryptographically supported originality check. The signature is used to verify with a certain confidence that the tag is using an IC manufactured by NXP Semiconductors. The signature digital is based on standard Elliptic Curve Cryptography (curve name secp128r1), according to the ECDSA algorithm.
     * @param signature - The signature. The signature must be a 32 bytes Buffer.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const signature = Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')
     *   await ultra.cmdMfuSetEmuSignature(signature)
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetEmuSignature(signature: Buffer): Promise<void>;
    /**
     * Read the counter and tearing of actived slot.
     *
     * NTAG21x features a NFC counter function. The NFC counter is enabled or disabled with the NFC_CNT_EN bit. This function enables NTAG21x to automatically increase the 24 bit counter value, triggered by the first valid READ or FAST_READ command after the NTAG21x tag is powered by an RF field.
     * @param addr - The address of the counter.
     * @group Mifare Ultralight Related
     * @returns
     * - counter: The counter of the specified address.
     * - tearing: The slot is in tearing mode or not.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetEmuCounter(0))
     *   // { "counter": 0, "tearing": false }
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuCounter(addr: number): Promise<{
        counter?: number;
        tearing?: boolean;
    }>;
    /**
     * Set the counter and reset tearing of actived slot.
     *
     * NTAG21x features a NFC counter function. The NFC counter is enabled or disabled with the NFC_CNT_EN bit. This function enables NTAG21x to automatically increase the 24 bit counter value, triggered by the first valid READ or FAST_READ command after the NTAG21x tag is powered by an RF field.
     * @param opts.addr - The address of the counter.
     * @param opts.counter - The counter to be write. The counter must be a 24-bit unsigned integer.
     * @param opts.resetTearing - `true` to reset tearing.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMfuSetEmuCounter({ addr: 0, counter: 1 })
     *   console.log(await ultra.cmdMfuGetEmuCounter(0))
     *   // { "counter": 1, "tearing": false }
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetEmuCounter(opts: {
        addr?: number;
        counter?: number;
        resetTearing?: boolean;
    }): Promise<void>;
    /**
     * Reset the authentication failed counter of actived slot.
     * @group Mifare Ultralight Related
     * @returns The original value of the unsuccessful auth counter before reset.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuResetEmuAuthFailedCounter()) // 0
     * })(vm.ultra)
     * ```
     */
    cmdMfuResetEmuAuthFailedCounter(): Promise<number>;
    /**
     * Get the number of pages available in the actived slot.
     * @group Mifare Ultralight Related
     * @returns The number of pages available in the actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetEmuPageSize()) // 135
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuPageSize(): Promise<number>;
    /**
     * Get the emulator write mode in the actived slot.
     * @group Mifare Ultralight Related
     * @returns The emulator write mode in the actived slot.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { MfuEmuWriteMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(MfuEmuWriteMode[await ultra.cmdMfuGetEmuWriteMode()]) // 135
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuWriteMode(): Promise<MfuEmuWriteMode>;
    /**
     * Set the emulator write mode of actived slot.
     * @param mode - The emulator write mode of actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { MfuEmuWriteMode } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdMfuSetWriteMode(MfuEmuWriteMode.NORMAL)
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetWriteMode(mode: MfuEmuWriteMode): Promise<void>;
    /**
     * Enable/disable the AUTH logger of NTAG emulator.
     * @param enable - `true` to enable the detection, `false` to disable the detection.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdMfuSetDetectionEnable(true)
     * })(vm.ultra)
     * ```
     */
    cmdMfuSetDetectionEnable(enable: boolean | number): Promise<void>;
    /**
     * Get the AUTH log count of NTAG emulator.
     * @returns The count of AUTH logs.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetDetectionCount()) // 0
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetDetectionCount(): Promise<number>;
    /**
     * Get the AUTH log of NTAG emulator.
     * @param offset - The start log of detections to be get.
     * @returns The AUTH logs.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const pwds = await ultra.cmdMfuGetDetectionLogs(0)
     *   console.log(pwds[0]?.toString('hex')) // 'AA55AA55'
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetDetectionLogs(offset?: number): Promise<Buffer[]>;
    /**
     * Get the AUTH logger of NTAG emulator is enabled or not.
     * @returns `true` if the feature of mifare MFKey32 detections is enabled, otherwise return `false`.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetDetectionEnable()) // false
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetDetectionEnable(): Promise<boolean>;
    /**
     * Get configuration of NTAG emulator.
     * @returns The configuration of NTAG emulator.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   console.log(await ultra.cmdMfuGetEmuSettings())
     *   /*
     *   {
     *     "detection": false,
     *     "uid": true,
     *     "write": 0
     *   }
     *   *\/
     * })(vm.ultra)
     * ```
     */
    cmdMfuGetEmuSettings(): Promise<{
        detection: boolean;
        uid: boolean;
        write: MfuEmuWriteMode;
    }>;
    /**
     * A protected memory area can be accessed only after a successful password verification using the PWD_AUTH command. The AUTH0 configuration byte defines the protected area. It specifies the first page that the password mechanism protects. The level of protection can be configured using the PROT bit either for write protection or read/write protection. The PWD_AUTH command takes the password as parameter and, if successful, returns the password authentication acknowledge, PACK. By setting the AUTHLIM configuration bits to a value larger than 000b, the number of unsuccessful password verifications can be limited. Each unsuccessful authentication is then counted in a counter featuring anti-tearing support. After reaching the limit of unsuccessful attempts, the memory access specified in PROT, is no longer possible.
     * @param opts.autoSelect - `true` to enable auto-select, `false` to disable auto-select.
     * @param opts.keepRfField - `true` to keep RF field after auth, `false` to disable RF field.
     * @param opts.key - The password to be verified. The password must be a 4 bytes Buffer.
     * @group Mifare Ultralight Related
     * @returns The password authentication acknowledge, PACK
     */
    mfuAuth(opts: {
        autoSelect?: boolean;
        keepRfField?: boolean;
        key: Buffer;
        timeout?: number;
    }): Promise<Buffer>;
    /**
     * Read 4 pages (16 bytes) from Mifare Ultralight
     * @param opts.start - start page address
     * @param opts.key - The password to be verified. The password must be a 4 bytes Buffer.
     * @returns 4 pages (16 bytes)
     * @group Mifare Ultralight Related
     * @see [MF0ICU1 MIFARE Ultralight contactless single-ticket IC](https://www.nxp.com/docs/en/data-sheet/MF0ICU1.pdf#page=16)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.mfuReadPages({ start: 0 })
     *   console.log(data.toString('hex')) // '040dc445420d2981e7480000e1100600'
     * })(vm.ultra)
     * ```
     */
    mfuReadPages(opts: {
        key?: Buffer;
        start: number;
        timeout?: number;
    }): Promise<Buffer>;
    /**
     * Read multiple pages from start to end. For example if the start address is 0x03 and the end address is 0x07 then pages 0x03, 0x04, 0x05, 0x06 and 0x07 are returned. If the addressed page is outside of accessible area, NTAG21x replies a NAK.
     * @param opts.start - start page address
     * @param opts.end - end page address
     * @param opts.key - The password to be verified. The password must be a 4 bytes Buffer.
     * @returns 4 pages (16 bytes)
     * @group Mifare Ultralight Related
     * @see [MF0ICU1 MIFARE Ultralight contactless single-ticket IC](https://www.nxp.com/docs/en/data-sheet/MF0ICU1.pdf#page=16)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.mfuFastReadPages({ start: 0, end: 3 })
     *   console.log(data.toString('hex')) // '047c79896cb62a8171480000e1103e00'
     * })(vm.ultra)
     * ```
     */
    mfuFastReadPages(opts: {
        key?: Buffer;
        start: number;
        end: number;
        timeout?: number;
    }): Promise<Buffer>;
    /**
     * Detect Mifare Ultralight tag and return the tag infomation.
     * @returns The tag infomation of detected tag.
     * @group Mifare Ultralight Related
     * @see [Proxmark3 `hf mfu info`](https://github.com/RfidResearchGroup/proxmark3/blob/4e0d4d3ad454285e62fc1a22c2ef3adda508ed01/client/src/cmdhfmfu.c#L2089)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { NxpMfuTypeName } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const NxpMfuType = await ultra.mfuDetectTagType()
     *   console.log(`tagType = ${NxpMfuTypeName.get(NxpMfuType)}`)
     * })(vm.ultra)
     * ```
     */
    mfuDetectTagType(): Promise<NxpMfuType>;
    /**
     * Read the dump of Mifare Ultralight tag.
     * @param opts.key - The key to read pages if tag is read protected.
     * @param opts.start - start page address
     * @param opts.end - end page address
     * @returns The dump of Mifare Ultralight tag.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const dump = await ultra.mfuReadDump()
     *   console.log(`Read ${dump.length} bytes.`) // Read 160 bytes.
     *   return dump
     * })(vm.ultra)
     * ```
     */
    mfuReadDump(opts?: {
        key?: Buffer;
        end?: number;
        start?: number;
    }): Promise<Buffer>;
    /**
     * Assert the tag type of actived slot is Mifare Ultralight like. Throw an error if the tag type is not Mifare Ultralight like.
     * @returns The tag type of actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const tagType = await ultra.mfuAssertEmuTagType()
     *   console.log(TagType[tagType]) // '040dc445420d2981e7480000e1100600'
     * })(vm.ultra)
     * ```
     */
    mfuAssertEmuTagType(): Promise<TagType>;
    /**
     * Get the mifare ultralight settings of actived emulator slot.
     * @group Mifare Ultralight Related
     * @returns
     * - counters: The value of the NFC one-way counter.
     * - magic: The magic mode.
     * - pageSize: The page size.
     * - signature: The IC specific, 32-byte ECC signature.
     * - tearing: The slot is in tearing mode or not.
     * - version: The version information for the specific NTAG21x type.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.mfuGetEmuSettings()
     *   console.log(data)
     * })(vm.ultra)
     * ```
     */
    mfuGetEmuSettings(): Promise<{
        counters: Array<number | undefined>;
        magic?: boolean;
        pageSize?: number;
        signature?: Buffer;
        tearing?: boolean;
        version?: Buffer;
    }>;
    /**
     * The READ_CNT command is used to read out the current value of the NFC one-way counter of the Mifare Ultralight. The command has a single argument specifying the counter number and returns the 24-bit counter value of the corresponding counter. If the NFC_CNT_PWD_PROT bit is set to 1b the counter is password protected and can only be read with the READ_CNT command after a previous valid password authentication.
     * @param opts.addr - The counter addr to read. Must be `0`, `1` or `2`. Default is `2`.
     * @param opts.key - The password to be verified. The password must be a 4 bytes Buffer.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const cnt = await ultra.mfuReadCounter({ addr: 2 })
     *   console.log(cnt) // 0
     * })(vm.ultra)
     * ```
     */
    mfuReadCounter(opts: {
        addr?: number;
        key?: Buffer;
    }): Promise<number>;
    /**
     * The READ_SIG command returns an IC specific, 32-byte ECC signature, to verify NXP Semiconductors as the silicon vendor. The signature is programmed at chip production and cannot be changed afterwards.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.mfuReadSignature()
     *   console.log(data.toString('base64url')) // 'w9dq8MPprf1Ro-C1si32rg3y7cO8UChrtXlNyjLScS4'
     * })(vm.ultra)
     * ```
     */
    mfuReadSignature(): Promise<Buffer>;
    /**
     * The GET_VERSION command is used to retrieve information on the NTAG family, the product version, storage size and other product data required to identify the specific NTAG21x. This command is also available on other NTAG products to have a common way of identifying products across platforms and evolution steps. The GET_VERSION command has no arguments and replies the version information for the specific NTAG21x type.
     * @group Mifare Ultralight Related
     * @returns
     * -  response for NTAG213, NTAG215 and NTAG216
     *
     * | Byte no. | Description | NTAG213 | NTAG215 | NTAG216 | Interpretation |
     * | --- | --- | --- | --- | --- | --- |
     * | 0 | fixed Header | 0x00 | 0x00 | 0x00 |  |
     * | 1 | vendor ID | 0x04 | 0x04 | 0x04 | NXP Semiconductors |
     * | 2 | product type | 0x04 | 0x04 | 0x04 | NTAG |
     * | 3 | product subtype | 0x02 | 0x02 | 0x02 | 50 pF |
     * | 4 | major product version | 0x01 | 0x01 | 0x01 | 1 |
     * | 5 | minor product version | 0x00 | 0x00 | 0x00 | V0 |
     * | 6 | storage size | 0x0F | 0x11 | 0x13 | [reference](https://www.nxp.com/docs/en/data-sheet/NTAG213_215_216.pdf#page=36) |
     * | 7 | protocol | 0x03 | 0x03 | 0x03 | ISO/IEC 14443-3 compliant |
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const data = await ultra.mfuGetVersion()
     *   console.log(data.toString('hex')) // '0004040201001103'
     * })(vm.ultra)
     * ```
     */
    mfuGetVersion(opts?: {
        timeout?: number;
    }): Promise<Buffer>;
    /**
     * Write 1 page (4 bytes) to Mifare Ultralight
     * @param opts.start - start page address
     * @param opts.data - `4 bytes`, the page data to be written.
     * @param opts.key - The password to be verified. The password must be a 4 bytes Buffer.
     * @group Mifare Ultralight Related
     * @see [MF0ICU1 MIFARE Ultralight contactless single-ticket IC](https://www.nxp.com/docs/en/data-sheet/MF0ICU1.pdf#page=17)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const data = await ultra.mfuWritePage({ start: 9, data: Buffer.from('00000000', 'hex') })
     * })(vm.ultra)
     * ```
     */
    mfuWritePage(opts: {
        data: Buffer;
        key?: Buffer;
        start: number;
    }): Promise<void>;
    /**
     * Get the mifare ultralight emulator data of actived slot.
     * @returns The mifare ultralight emulator data of actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const dump = await ultra.mfuReadEmuDump()
     *   console.log(`Read ${dump.length} bytes.`)
     * })(vm.ultra)
     * ```
     */
    mfuReadEmuDump(): Promise<Buffer>;
    /**
     * Write new dump to the actived slot.
     * @param dump - New dump to be write to actived slot.
     * @group Mifare Ultralight Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const dump = new Buffer(540) // Dump size of NTAG_213 is 540 bytes.
     *   dump.set(Buffer.from('04689571fa5c648042480fe0', 'hex'))
     *   dump.set(Buffer.from('040000ff00000000ffffffff', 'hex'), 524)
     *   await ultra.mfuWriteEmuDump(dump)
     * })(vm.ultra)
     * ```
     */
    mfuWriteEmuDump(dump: Buffer): Promise<void>;
    /**
     * Set the em410x id of actived slot. The size of id depends on the em410x tag type.
     * - 5 bytes for EM410x
     * - 13 bytes for EM410X ELECTRA
     * @param id - The em410x id of actived slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.EM410X)
     *   await ultra.cmdEm410xSetEmuId(Buffer.from('deadbeef88', 'hex'))
     * })(vm.ultra)
     * ```
     */
    cmdEm410xSetEmuId(id: Buffer): Promise<void>;
    /**
     * Get the em410x id of actived slot.
     * @returns The em410x id of actived slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.EM410X)
     *   const id = await ultra.cmdEm410xGetEmuId()
     *   console.log(id.toString('hex')) // 'deadbeef88'
     * })(vm.ultra)
     * ```
     */
    cmdEm410xGetEmuId(): Promise<Buffer>;
    /**
     * Set the HID Prox emulated tag of active slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { HidProxFormat, Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.HIDProx)
     *   await ultra.cmdHidProxSetEmu({ format: HidProxFormat.H10301, fc: 118, cn: 1603 })
     * })(vm.ultra)
     * ```
     */
    cmdHidProxSetEmu(tag: OptionalHidProxTag): Promise<void>;
    /**
     * Get the HID Prox emulated tag of active slot.
     * @returns
     * - `format`: The format of HID Prox tag.
     * - `fc`: The facility code of HID Prox tag.
     * - `cn`: The card number of HID Prox tag.
     * - `il`: The issue level of HID Prox tag.
     * - `oem`: The OEM code of HID Prox tag.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { HidProxFormat, Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.HIDProx)
     *   const tag = await ultra.cmdHidProxGetEmu()
     *   console.log(JSON.stringify({ ...tag, format: HidProxFormat[tag.format] }))
     *   // {
     *   //   "format": "H10301",
     *   //   "fc": 118,
     *   //   "cn": 1603,
     *   //   "il": 0,
     *   //   "oem": 0
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdHidProxGetEmu(): Promise<HidProxTag>;
    /**
     * Set the viking id of actived slot.
     * @param id - The viking id of actived slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.Viking)
     *   await ultra.cmdVikingSetEmuId(Buffer.from('deadbeef', 'hex'))
     * })(vm.ultra)
     * ```
     */
    cmdVikingSetEmuId(id: Buffer): Promise<void>;
    /**
     * Get the viking id of actived slot.
     * @returns The viking id of actived slot.
     * @group Emulator Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Slot, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.slotChangeTagTypeAndActive(Slot.SLOT_1, null, TagType.Viking)
     *   const id = await ultra.cmdVikingGetEmuId()
     *   console.log(id.toString('hex')) // 'deadbeef'
     * })(vm.ultra)
     * ```
     */
    cmdVikingGetEmuId(): Promise<Buffer>;
    /**
     * Check if the firmware version is supported by SDK.
     * @returns `true` if the firmware version is supported, `false` otherwise.
     * @group Device Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   if (await ultra.isSupportedAppVersion()) throw new Error('Firmware version is not supported. Please update the firmware.')
     * })(vm.ultra)
     * ```
     */
    isSupportedAppVersion(): Promise<boolean>;
    /**
     * Send Mifare Classic HALT command and close RF field.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.mf1Halt()
     * })(vm.ultra)
     * ```
     */
    mf1Halt(): Promise<void>;
    /**
     * Magic auth helper function for mifare gen1a tag.
     * @param cb - The callback function to be executed after auth.
     * @returns The result of callback function.
     * @group Mifare Classic Related
     */
    _mf1Gen1aAuth<T extends (...args: any) => any>(cb: T): Promise<Awaited<ReturnType<T>>>;
    /**
     * Read blocks from Mifare Classic Gen1a.
     * @param offset - The start block of Mifare Classic Gen1a.
     * @param length - The amount of blocks to read.
     * @returns The blocks data.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const card = await ultra.mf1Gen1aReadBlocks(0, 64)
     *   console.log(_.map(card.chunk(16), chunk => chunk.toString('hex')).join('\n'))
     * })(vm.ultra)
     * ```
     */
    mf1Gen1aReadBlocks(offset: number, length?: number): Promise<Buffer>;
    /**
     * Write blocks to Mifare Classic Gen1a.
     * @param offset - The start block of Mifare Classic Gen1a.
     * @param data - The blocks data to write.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.mf1Gen1aWriteBlocks(1, new Buffer(16))
     * })(vm.ultra)
     * ```
     */
    mf1Gen1aWriteBlocks(offset: number, data: Buffer): Promise<void>;
    /**
     * Get the blockNo of sector trailer.
     * @param sector - The sector number.
     * @returns The blockNo of sector trailer.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(ChameleonUltra.mf1TrailerBlockNoOfSector(0)) // 3
     * })()
     * ```
     */
    static mf1TrailerBlockNoOfSector(sector: number): number;
    /**
     * Given a list of keys, check which is the correct key A and key B of the sector.
     * @param sector - The sector number to be checked.
     * @param keys - The keys dictionary.
     * @returns The Key A and Key B of the sector.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const sectorKey = await ultra.mf1CheckSectorKeys(0, keys)
     *   console.log(_.mapValues(sectorKey, key => key.toString('hex')))
     *   // { "96": "ffffffffffff", "97": "ffffffffffff" }
     * })(vm.ultra)
     * ```
     */
    mf1CheckSectorKeys(sector: number, keys: Buffer[]): Promise<PartialRecord<Mf1KeyType, Buffer>>;
    /**
     * Mifare Classic check keys of sectors.
     * @param opts.chunkSize - `keys` will be chunked by this size.
     * @param opts.keys - The keys to be checked.
     * @param opts.mask - The mask of sectors. 80 bits, 2 bits/sector, the first bit is key A, the second bit is key B, 0b1 represent to skip checking the key.
     * @param opts.maxSectors - The max sectors to be check.
     * @param opts.onChunkKeys - The callback function to be invoked before checking every chunk of keys.
     * @group Mifare Classic Related
     * @returns
     */
    mf1CheckKeysOfSectors(opts: {
        chunkSize?: number;
        keys: Buffer[];
        mask?: Buffer;
        maxSectors?: number;
        onChunkKeys?: (opts: {
            keys: Buffer[];
            mask: Buffer;
        }) => Promise<unknown>;
    }): Promise<Array<Buffer | null>>;
    /**
     * Read a block data of Mifare Classic by given keys.
     * @param block - The block number to be read.
     * @param keys - The keys dictionary.
     * @returns The block data read from a mifare tag. An error is thrown if the block cannot be read.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const data = await ultra.mf1ReadBlockByKeys(0, keys)
     *   console.log(data.toString('hex'))
     * })(vm.ultra)
     * ```
     */
    mf1ReadBlockByKeys(block: number, keys: Buffer[]): Promise<Buffer>;
    /**
     * Read a sector data of Mifare Classic by given keys.
     * @param sector - The sector number to be read.
     * @param keys - The keys dictionary.
     * @returns The sector data and the read status of each block.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer, Mf1KeyType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const { data, success } = await ultra.mf1ReadSectorByKeys(0, keys)
     *   console.log({ data: data.toString('hex'), success })
     *   // { "data": "...", "success": [true, true, true, true] }
     * })(vm.ultra)
     * ```
     */
    mf1ReadSectorByKeys(sector: number, keys: Buffer[]): Promise<{
        data: Buffer;
        success: boolean[];
    }>;
    /**
     * Write a block data to Mifare Classic by given keys.
     * @param block - The block number to be written.
     * @param keys - The keys dictionary.
     * @param data - Block data
     * @returns An error is thrown if the block cannot be write.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const data = Buffer.from('00000000000000000000000000000000', 'hex')
     *   await ultra.mf1WriteBlockByKeys(1, keys, data)
     * })(vm.ultra)
     * ```
     */
    mf1WriteBlockByKeys(block: number, keys: Buffer[], data: Buffer): Promise<void>;
    /**
     * Write a sector data to Mifare Classic by given keys.
     * @param sector - The sector number to be written.
     * @param keys - The key dictionary.
     * @param data - Sector data
     * @returns the write status of each block.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { Buffer } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const keys = Buffer.from('FFFFFFFFFFFF\n000000000000\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   const data = Buffer.concat([
     *     Buffer.from('00000000000000000000000000000000', 'hex'),
     *     Buffer.from('00000000000000000000000000000000', 'hex'),
     *     Buffer.from('00000000000000000000000000000000', 'hex'),
     *     Buffer.from('ffffffffffffff078069ffffffffffff', 'hex'),
     *   ])
     *   const { success } = await ultra.mf1WriteSectorByKeys(1, keys, data)
     *   console.log(success)
     *   // [true, true, true, true]
     * })(vm.ultra)
     * ```
     */
    mf1WriteSectorByKeys(sector: number, keys: Buffer[], data: Buffer): Promise<{
        success: boolean[];
    }>;
    /**
     * Check acl bytes of ACL, block or sector.
     * @param data - Data of ACL, block or sector.
     * @returns `true` if the acl bytes is valid, `false` otherwise.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   console.log(ChameleonUltra.mf1IsValidAcl(Buffer.from('ff078069', 'hex'))) // true
     * })()
     * ```
     */
    static mf1IsValidAcl(data: Buffer): boolean;
    /**
     * Remove duplicated and invalid Mifare Classic keys.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   let keys = Buffer.from('FFFFFFFFFFFF\nFFFFFFFFFFFF\nA0A1A2A3A4A5\nD3F7D3F7D3F7', 'hex').chunk(6)
     *   console.log(`keys.length = ${keys.length}`)
     *   keys = ChameleonUltra.mf1UniqueKeys(keys)
     *   console.log(`keys.length = ${keys.length}`)
     * })()
     * ```
     */
    static mf1UniqueKeys(keys: Buffer[]): Buffer[];
    /**
     * Generate block 0 (manufacturer block) for magic mifare classic tag.
     * @param opts.tagType - The tag type of the mifare classic tag. Default to `MIFARE_1024`.
     * @param opts.atqa - The ATQA of the tag.
     * @param opts.buf - If provided, the data will be written to this buffer.
     * @param opts.sak - The SAK of the tag.
     * @param opts.uid - The UID of the tag.
     * @group Mifare Classic Related
     * @example
     * 4 bytes UID example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const block0 = ChameleonUltra.mf1GenMagicBlock0({
     *     uid: Buffer.from('deadbeef', 'hex'),
     *     atqa: Buffer.from('0004', 'hex').reverse(),
     *     sak: Buffer.of(0x08),
     *   })
     *   console.log(block0.toString('hex')) // deadbeef220804000000000000000000
     * })()
     * ```
     * @example
     * 7 bytes UID example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const block0 = ChameleonUltra.mf1GenMagicBlock0({
     *     uid: Buffer.from('04FE5572AA4880', 'hex'),
     *   })
     *   console.log(block0.toString('hex')) // 04FE5572AA4880884400C82000000000
     * })()
     * ```
     */
    static mf1GenMagicBlock0(opts: {
        atqa?: Buffer;
        buf?: Buffer;
        sak?: Buffer;
        uid: Buffer;
        tagType?: TagType;
    }): Buffer;
    /**
     * Generate empty dump for magic mifare classic tag.
     * @param opts.atqa - The ATQA of the tag.
     * @param opts.buf - If provided, the data will be written to this buffer.
     * @param opts.sak - The SAK of the tag.
     * @param opts.tagType - The tag type of the mifare classic tag.
     * @param opts.uid - The UID of the tag.
     * @group Mifare Classic Related
     * @returns The empty dump for magic mifare classic tag.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({
     *     uid: Buffer.from('deadbeef', 'hex'),
     *     atqa: Buffer.from('0004', 'hex').reverse(),
     *     sak: Buffer.of(0x08),
     *     tagType: TagType.MIFARE_1024,
     *   })
     *   console.log(dump.chunk(16).map(blk => blk.toString('hex')).join('\n'))
     * })()
     * ```
     */
    static mf1GenEmptyDump(opts?: {
        atqa?: Buffer;
        buf?: Buffer;
        sak?: Buffer;
        tagType?: TagType;
        uid?: Buffer;
    }): Buffer;
    /**
     * Convert dump to [Proxmark3](https://github.com/RfidResearchGroup/proxmark3) compatible JSON Object for exporting Mifare Classic.
     * @param opts.atqa - The ATQA of the tag.
     * @param opts.ats - The ATS of the tag.
     * @param opts.body - The body of the tag.
     * @param opts.sak - The SAK of the tag.
     * @param opts.uid - The UID of the tag.
     * @returns The JSON Object for exporting Mifare Classic.
     * @group Mifare Classic Related
     * @see [loadFileJSONex | RfidResearchGroup/proxmark3](https://github.com/RfidResearchGroup/proxmark3/blob/c3a7a11ae78558f1cc187570f40e023dd24f8fb6/client/src/fileutils.c#L1444)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const json = ChameleonUltra.mf1DumpToPm3Json({
     *     atqa: Buffer.from('0004', 'hex').reverse(),
     *     body: dump,
     *     sak: Buffer.of(0x08),
     *     uid: Buffer.from('deadbeef', 'hex'),
     *   })
     *   console.log(json)
     * })()
     * ```
     */
    static mf1DumpToPm3Json(opts: {
        atqa: Buffer;
        ats?: Buffer;
        body: Buffer;
        sak: Buffer;
        sig?: Buffer;
        uid: Buffer;
    }): Mf1DumpToPm3JsonResp;
    /**
     * Convert [Proxmark3](https://github.com/RfidResearchGroup/proxmark3) compatible JSON Object to dump for importing Mifare Classic.
     * @param pm3Json - [Proxmark3](https://github.com/RfidResearchGroup/proxmark3) compatible JSON Object. If a string, `Uint8Array`, `Buffer` is provided, it will be parsed using `JSON.parse`.
     * @returns The tag data imported from Proxmark3 JSON Object.
     * @group Mifare Classic Related
     * @see [loadFileJSONex | RfidResearchGroup/proxmark3](https://github.com/RfidResearchGroup/proxmark3/blob/c3a7a11ae78558f1cc187570f40e023dd24f8fb6/client/src/fileutils.c#L1444)
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const json = ChameleonUltra.mf1DumpToPm3Json({
     *     atqa: Buffer.from('0004', 'hex').reverse(),
     *     body: dump,
     *     sak: Buffer.of(0x08),
     *     uid: Buffer.from('deadbeef', 'hex'),
     *   })
     *   const resp = ChameleonUltra.mf1DumpFromPm3Json(json)
     *   console.log(resp)
     * })()
     * ```
     */
    static mf1DumpFromPm3Json(pm3Json: Buffer | Uint8Array | string | Mf1DumpToPm3JsonResp): Mf1DumpFromPm3JsonResp;
    /**
     * Convert dump to [Proxmark3](https://github.com/RfidResearchGroup/proxmark3) compatible EML string for exporting Mifare Classic.
     * @param opts.body - The body of the tag.
     * @returns The EML string for exporting Mifare Classic.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const eml = ChameleonUltra.mf1DumpToEml({ body: dump })
     *   console.log(eml)
     * })()
     * ```
     */
    static mf1DumpToEml(opts: {
        body: Buffer;
    }): string;
    /**
     * Convert [Proxmark3](https://github.com/RfidResearchGroup/proxmark3) compatible EML string to dump for importing Mifare Classic.
     * @param eml - The EML string of the Mifare Classic.
     * @returns The dump data imported from EML.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const eml = ChameleonUltra.mf1DumpToEml({ body: dump })
     *   const buf = ChameleonUltra.mf1DumpFromEml(eml)
     *   console.log(buf)
     * })()
     * ```
     */
    static mf1DumpFromEml(eml: Buffer | Uint8Array | string): Buffer;
    /**
     * Convert dump to [MifareClassicTool](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool) compatible MCT string for exporting Mifare Classic.
     * @param opts.body - The body of the tag.
     * @returns The MCT string for exporting Mifare Classic.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const mct = ChameleonUltra.mf1DumpToMct({ body: dump })
     *   console.log(mct)
     * })()
     * ```
     */
    static mf1DumpToMct(opts: {
        body: Buffer;
    }): string;
    /**
     * Convert [MifareClassicTool](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool) compatible MCT string to dump for importing Mifare Classic.
     * @param mct - The MCT string of the Mifare Classic.
     * @returns The dump data imported from MCT.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { Buffer, ChameleonUltra, TagType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dump = ChameleonUltra.mf1GenEmptyDump({ tagType: TagType.MIFARE_1024 })
     *   const mct = ChameleonUltra.mf1DumpToMct({ body: dump })
     *   const buf = ChameleonUltra.mf1DumpFromMct(mct)
     *   console.log(buf)
     * })()
     * ```
     */
    static mf1DumpFromMct(mct: Buffer | Uint8Array | string): Buffer;
    /**
     * Convert Mifare Keys `.dic` string to keys.
     * @param dict - Mifare Keys `.dic` string
     * @returns The keys imported from Mifare Keys `.dic` string.
     * @group Mifare Classic Related
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async () => {
     *   const { ChameleonUltra } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const dict = '#test\r\nFFFFFFFFFFFF\r\n\r\n'
     *   const keys = ChameleonUltra.mf1KeysFromDict(dict)
     *   console.log(keys.map(key => key.toString('hex').toUpperCase()))
     *   // ['FFFFFFFFFFFF']
     * })()
     * ```
     */
    static mf1KeysFromDict(dict: string): Buffer[];
    /**
     * Retrieve DFU protocol version.
     *
     * Syntax and ID of this command is permanent. If protocol version changes other opcode may not be valid any more.
     * @returns Protocol version.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     *   console.log(await ultra.cmdDfuGetProtocol()) // Print: 1
     *   await ultra.cmdDfuAbort()
     * })(vm.ultra)
     * ```
     */
    cmdDfuGetProtocol(): Promise<number>;
    /**
     * Create selected object.
     * @param type - Object type.
     * @param size - Object size in bytes.
     * @returns
     * - `crc32`: Current CRC.
     * - `offset`: Current offset.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    cmdDfuCreateObject(type: DfuObjType, size: number): Promise<void>;
    /**
     * Set receipt notification
     *
     * This request configures the frequency of sending CRC responses after Write request commands.
     * @param prn - If set to `0`, then the CRC response is never sent after Write request. Otherwise, it is sent every `prn`'th Write request.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    cmdDfuSetPrn(prn: number): Promise<void>;
    /**
     * Request CRC of selected object.
     * @returns
     * - `crc32`: Current CRC.
     * - `offset`: Current offset.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    cmdDfuGetObjectCrc(): Promise<{
        offset: number;
        crc32: number;
    }>;
    /**
     * Execute selected object.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    cmdDfuExecuteObject(): Promise<void>;
    /**
     * Select object.
     * @param type - Object type.
     * @returns
     * - `crc32`: Current CRC.
     * - `maxSize`: Maximum size of selected object.
     * - `offset`: Current offset.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    cmdDfuSelectObject(type: DfuObjType): Promise<{
        offset: number;
        crc32: number;
        maxSize: number;
    }>;
    /**
     * Retrieve MTU size.
     * @returns The preferred MTU size on this request.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     *   console.log(await ultra.cmdDfuGetMtu()) // Print: 1025
     *   await ultra.cmdDfuAbort()
     * })(vm.ultra)
     * ```
     */
    cmdDfuGetMtu(): Promise<number | undefined>;
    /**
     * Ping.
     * @param id - Ping ID that will be returned in response.
     * @returns The received ID which is echoed back.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     *   console.log(await ultra.cmdDfuPing(1)) // Print: 1
     *   await ultra.cmdDfuAbort()
     * })(vm.ultra)
     * ```
     */
    cmdDfuPing(id: number): Promise<number>;
    /**
     * Retrieve hardware version.
     * @returns
     * - `part`: Hardware part, from FICR register.
     * - `ramSize`: RAM size, in bytes.
     * - `romPageSize`: ROM flash page size, in bytes.
     * - `romSize`: ROM size, in bytes.
     * - `variant`: Hardware variant, from FICR register.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     *   console.log(await ultra.cmdDfuGetHardwareVersion())
     *   await ultra.cmdDfuAbort()
     *   // {
     *   //   "part": "nRF52840",
     *   //   "variant": "AAD0",
     *   //   "romSize": 1048576,
     *   //   "ramSize": 262144,
     *   //   "romPageSize": 4096
     *   // }
     * })(vm.ultra)
     * ```
     */
    cmdDfuGetHardwareVersion(): Promise<{
        part: string;
        variant: string;
        romSize: number;
        ramSize: number;
        romPageSize: number;
    }>;
    /**
     * Retrieve firmware version.
     * @returns
     * - `addr`: Firmware address in flash.
     * - `len`: Firmware length in bytes.
     * - `type`: Firmware type.
     * - `version`: Firmware version.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { DfuFwId, DfuFwType } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   await ultra.cmdDfuEnter()
     *   for (const fwId of [DfuFwId.BOOTLOADER, DfuFwId.APPLICATION, DfuFwId.SOFTDEVICE]) {
     *     const { type, version, addr, len } = await ultra.cmdDfuGetFirmwareVersion(fwId)
     *     console.log(`type = ${DfuFwType[type]}, version = ${version}, addr = 0x${addr.toString(16)}, len = ${len}`)
     *   }
     *   await ultra.cmdDfuAbort()
     *   // type = BOOTLOADER, version = 1, addr = 0xf3000, len = 45056
     *   // type = SOFTDEVICE, version = 7002000, addr = 0x1000, len = 159744
     *   // type = APPLICATION, version = 1, addr = 0x27000, len = 222844
     * })(vm.ultra)
     * ```
     */
    cmdDfuGetFirmwareVersion(id: DfuFwId): Promise<{
        type: DfuFwType;
        version: number;
        addr: number;
        len: number;
    }>;
    /**
     * Abort the DFU procedure.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   await ultra.cmdDfuEnter()
     *   await ultra.cmdDfuAbort()
     * })(vm.ultra)
     * ```
     */
    cmdDfuAbort(): Promise<void>;
    /**
     * DFU: Upload object of image.
     * @param type - Object type.
     * @param buf - Data.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     */
    dfuUpdateObject(type: DfuObjType, buf: Buffer): Promise<void>;
    /**
     * Upload DFU image.
     * @param image - The DFU image.
     * @group DFU Related
     * @see Please refer to {@link https://docs.nordicsemi.com/bundle/sdk_nrf5_v17.1.0/page/lib_dfu_transport.html | nRF5 SDK: DFU Protocol} for more infomation.
     * @example
     * ```js
     * // you can run in DevTools of https://taichunmin.idv.tw/chameleon-ultra.js/test.html
     * await (async ultra => {
     *   const { DeviceModel } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/+esm')
     *   const { default: DfuZip } = await import('https://cdn.jsdelivr.net/npm/chameleon-ultra.js@0/plugin/DfuZip/+esm')
     *   const model = (await ultra.cmdGetDeviceModel()) === DeviceModel.ULTRA ? 'ultra' : 'lite'
     *   const dfuZipUrl = `https://taichunmin.idv.tw/ChameleonUltra-releases/dev/${model}-dfu-app.zip`
     *   const dfuZip = new DfuZip(new Buffer((await axios.get(dfuZipUrl, { responseType: 'arraybuffer' }))?.data))
     *   const image = await dfuZip.getAppImage()
     *   const imageGitVersion = await dfuZip.getGitVersion()
     *   console.log({ type: image.type, headerSize: image.header.length, bodySize: image.body.length, gitVersion: imageGitVersion })
     *   // {
     *   //   "type": "application",
     *   //   "headerSize": 141,
     *   //   "bodySize": 222844,
     *   //   "gitVersion": "v2.0.0-135-g3cadd47"
     *   // }
     *   const gitVersion = await ultra.cmdGetGitVersion()
     *   console.log(`gitVersion = ${gitVersion}`) // Print: gitVersion = v2.0.0-135-g3cadd47
     *   await ultra.cmdDfuEnter()
     *   ultra.emitter.on('progress', console.log)
     *   // {
     *   //   "func": "dfuUpdateObject",
     *   //   "offset": 0,
     *   //   "size": 222844,
     *   //   "type": 2
     *   // }
     *   await ultra.dfuUpdateImage(image)
     *   ultra.emitter.removeListener('progress', console.log)
     * })(vm.ultra)
     * ```
     */
    dfuUpdateImage(image: DfuImage): Promise<void>;
}

/** @inline @expand */
interface AdapterInstallResp {
    isSupported: () => boolean;
}
/** @inline @expand */
interface DfuImage {
    type: DfuImageType;
    header: Buffer;
    body: Buffer;
}
/** @inline @expand */
type DfuImageType = 'application' | 'softdevice' | 'bootloader' | 'softdevice_bootloader';
/** @inline @expand */
type DfuManifest = Record<DfuImageType, {
    bin_file: string;
    dat_file: string;
}>;
/** @inline @expand */
interface HidProxTag {
    /** The format of HID Prox tag. */
    format: HidProxFormat;
    /** The facility code of HID Prox tag. */
    fc: number;
    /** The card number of HID Prox tag. */
    cn: number;
    /** The issue level of HID Prox tag. */
    il: number;
    /** The OEM code of HID Prox tag. */
    oem: number;
}
/** @inline @expand */
interface Mf1DumpFromPm3JsonResp {
    atqa: Buffer;
    ats: Buffer;
    body: Buffer;
    sak: Buffer;
    sig: Buffer;
    tagType: TagType;
    uid: Buffer;
}
/** @inline @expand */
interface Mf1DumpToPm3JsonResp {
    blocks: Record<number, string>;
    Card: {
        ATQA: string;
        ATS?: string;
        SAK: string;
        UID: string;
        SIGNATURE: string;
    };
    Created: string;
    FileType: string;
}
/** @inline @expand */
interface Mf1AcquireStaticEncryptedNestedRes {
    uid: number;
    atks: Array<{
        sector: number;
        keyType: Mf1KeyType;
        nt: number;
        ntEnc: number;
        par: number;
    }>;
}
/** @inline @expand */
interface Mf1KnownBlockKey {
    /** The block number of the MIFARE Classic block. */
    block: number;
    /** The key of the MIFARE Classic block. */
    key: Buffer;
    /** The key type of the MIFARE Classic block. */
    keyType: Mf1KeyType;
}
/** @inline @expand */
type OptionalHidProxTag = SetOptional<HidProxTag, 'format' | 'fc' | 'il' | 'oem'>;
/** @inline @expand */
type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;
/** @inline @expand */
interface PluginInstallContext {
    Buffer: typeof Buffer;
    ultra: ChameleonUltra;
}
/** @inline @expand */
interface SerialPortOption {
    path?: string;
    baudRate?: number;
    devicePicker?: (portInfos: SerialPortInfo[]) => Promise<SerialPortInfo | undefined>;
}
/** @inline @expand */
interface SerialPortInfo {
    path: string;
    manufacturer: string | undefined;
    serialNumber: string | undefined;
    pnpId: string | undefined;
    locationId: string | undefined;
    productId: string | undefined;
    vendorId: string | undefined;
}
/** @inline @expand */
interface UltraPlugin {
    name: string;
    install: <T extends PluginInstallContext>(context: T, pluginOption: any) => Promise<unknown>;
}
/** @inline @expand */
interface UltraSerialPort<I extends Buffer = Buffer, O extends Buffer = Buffer> {
    dfuWriteObject?: (buf: Buffer, mtu?: number) => Promise<void>;
    isDfu?: () => boolean;
    isOpen?: () => boolean;
    readable: ReadableStream<I> | null;
    writable: WritableStream<O> | null;
}

export { type AdapterInstallResp as A, ChameleonUltra as C, type DfuManifest as D, type PluginInstallContext as P, type SerialPortInfo as S, type UltraPlugin as U, type DfuImageType as a, type DfuImage as b, type SerialPortOption as c };
