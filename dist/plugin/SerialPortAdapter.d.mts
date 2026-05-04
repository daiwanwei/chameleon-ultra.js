import { SerialPort } from 'serialport';
import { U as UltraPlugin, S as SerialPortInfo, C as ChameleonUltra, P as PluginInstallContext, c as SerialPortOption, A as AdapterInstallResp } from './types-Vzjtul7g.mjs';
import '@taichunmin/buffer';
import 'type-fest';

declare class SerialPortAdapter implements UltraPlugin {
    #private;
    duplex: SerialPort | null;
    name: string;
    portInfo: SerialPortInfo | null;
    ultra?: ChameleonUltra;
    constructor();
    install(context: AdapterInstallContext, pluginOption?: SerialPortOption): Promise<AdapterInstallResp>;
}
declare function listDevices(): Promise<SerialPortInfo[]>;
/** @inline */
type AdapterInstallContext = PluginInstallContext & {
    ultra: PluginInstallContext['ultra'] & {
        $adapter?: any;
    };
};

export { SerialPortAdapter as default, listDevices };
