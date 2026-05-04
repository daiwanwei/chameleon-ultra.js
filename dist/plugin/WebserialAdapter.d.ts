import { a as UltraPlugin, S as SerialPort, C as ChameleonUltra, P as PluginInstallContext, A as AdapterInstallResp } from '../enums-fmPabGpD.js';
import '@taichunmin/buffer';
import 'type-fest';
import 'web-serial-polyfill';

/**
 * @see
 * - [Web Serial API | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)
 * - [Getting started with the Web Serial API | codelabs](https://codelabs.developers.google.com/codelabs/web-serial#0)
 * - [Read from and write to a serial port | Chrome for Developers](https://developer.chrome.com/docs/capabilities/serial)
 */
declare class WebserialAdapter implements UltraPlugin {
    #private;
    name: string;
    port: SerialPort | null;
    ultra?: ChameleonUltra;
    constructor();
    install(context: PluginInstallContext, pluginOption: any): Promise<AdapterInstallResp>;
}

export { WebserialAdapter as default };
