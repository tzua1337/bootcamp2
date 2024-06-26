import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'dodaj_wpis' : ActorMethod<[string], undefined>,
  'greet' : ActorMethod<[string, number], string>,
  'odczytaj_wpisy' : ActorMethod<[], Array<string>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
