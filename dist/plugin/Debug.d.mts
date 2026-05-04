import createDebugger from 'debug';
import { a as UltraPlugin, D as DebugFilter, P as PluginInstallContext } from '../enums-fmPabGpD.mjs';
import '@taichunmin/buffer';
import 'type-fest';
import 'web-serial-polyfill';

declare class Debug implements UltraPlugin {
    debugers: Map<string, createDebugger.Debugger>;
    filter?: DebugFilter;
    name: string;
    install(context: PluginInstallContext): Promise<this>;
}
/**
 * @group Internal
 * @internal
 */
declare function errToJson<T extends Error & {
    cause?: any;
    stack?: any;
}>(err: T): Partial<T>;
/**
 * @group Internal
 * @internal
 */
declare function stringifyClone(obj: any): any;
/**
 * @group Internal
 * @internal
 */
declare function stringifyReplacer(this: any, key: any, val: any): any;
/**
 * @group Internal
 * @internal
 */
declare function jsonStringify(obj: object, space?: number): string;

export { Debug as default, errToJson, jsonStringify, stringifyClone, stringifyReplacer };
