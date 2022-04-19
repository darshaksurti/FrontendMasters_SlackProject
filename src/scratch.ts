////////////////////////////////////////////////////////////////////////////////////////////

// Optional chaining 
const x: {
    user: {
        name: string;
        address?: {
            street: string;
            city: string;
        };
    };
} = undefined as any;

// const y = x.user.address?.city;
console.log(x.user.address?.city)


// Double question marks (??) is called Nullish Coalescing
// If rawName comes in as undefined or null, we will fall back to this default value
// class Poo {
//     #name: string; // # means hard privacy, true privacy
//     constructor(rawName?: string) {
//         this.#name = rawName ?? '(no name)'
//     }
//     log() {
//         console.log(this.#name)
//     }
// }


////////////////////////////////////////////////////////////////////////////////////////////

// Variadic Tuple Types
// type Foo<T extends any[]> = [boolean, ...T, boolean];


// Labeled Tuple Types
type Address = [
    streetNumber: number,
    city: string,
    street: string,
    postal: number
];

function printAddress(...address: Address) {
    console.log(address);
}

printAddress(122, "San Francisco", "CA", 1231);


// Recursive Type Aliases
// type JSONValue = 
//     | string 
//     | number 
//     | boolean 
//     | null 
//     | JSONValue[]
//     | {
//         [k: string]: JSONValue;
//       };

// const val: JSONValue = {
//     name: "Darsh",
//     address: {
//         street: "Powder Ln",
//     }
// }


// Recursive Conditional Types - Research this


// Template Type Literals
// type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;


////////////////////////////////////////////////////////////////////////////////////////////

// TS-Expect-Error and TS-Ignore

// type Bar = number & any;
type Bar = number;

// @ts-expect-error
const num1: Bar = 'hello';

// @ts-ignore
const num2: Bar = 'hello';


////////////////////////////////////////////////////////////////////////////////////////////

// Error handling with unknown
function somethingRisky() { }

function assertIsError(err: any): asserts err is Error {
    if (!(err instanceof Error)) throw new Error(`Not an error: ${err}}`)
}

try {
    somethingRisky();
} catch (err: unknown) {
    assertIsError(err)  // This is a type guard
    console.log(err.stack);
}


////////////////////////////////////////////////////////////////////////////////////////////

// Declaration Files
// tsconfig.json, you can change allowJS and checkJS 

// Type Only Imports - Only import types from a module without any of the extras
// import { useAsyncDataEffect } from '../src/utils/api'


////////////////////////////////////////////////////////////////////////////////////////////

