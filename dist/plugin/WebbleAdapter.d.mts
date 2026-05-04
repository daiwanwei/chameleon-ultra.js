import { Buffer } from '@taichunmin/buffer';
import { TransformStream, WritableStream } from 'stream/web';
import { bluetooth } from 'webbluetooth';
import { a as UltraPlugin, b as UltraSerialPort, C as ChameleonUltra, P as PluginInstallContext, A as AdapterInstallResp } from '../enums-fmPabGpD.mjs';
import 'type-fest';
import 'web-serial-polyfill';

declare class WebbleAdapter implements UltraPlugin {
    #private;
    bluetooth?: typeof bluetooth;
    Buffer?: typeof Buffer;
    ctrlChar: BluetoothRemoteGATTCharacteristic | null;
    device: BluetoothDevice | null;
    emitErr: (err: Error) => void;
    name: string;
    packtChar: BluetoothRemoteGATTCharacteristic | null;
    port: UltraSerialPort | null;
    rxChar: BluetoothRemoteGATTCharacteristic | null;
    TransformStream: typeof TransformStream;
    ultra?: ChameleonUltra;
    WritableStream: typeof WritableStream;
    constructor();
    install(context: PluginInstallContext, pluginOption: any): Promise<AdapterInstallResp>;
}

export { WebbleAdapter as default };
