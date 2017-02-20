import { Constructable } from "../types";
export declare type MemberName = string | symbol;
export declare class TypeInfo {
    readonly name: string | symbol;
    readonly type: Function;
    constructor(name: string | symbol, type?: Function);
    private readonly _attributes;
    setAttribute(type: symbol | any, value?: any): void;
    hasAttribute(type: symbol | any): any;
    getAttribute(type: symbol | any): any;
    getAttributes<T>(base: Constructable<T>): T[];
}
export declare class ClassInfo extends TypeInfo {
    private readonly _token;
    private readonly _parent;
    private readonly _methods;
    private readonly _properties;
    constructor(constructor: Function, parent?: ClassInfo);
    readonly token: symbol;
    readonly parent: ClassInfo;
    hasMethod(name: string | symbol): boolean;
    getMethod(name: string | symbol): MethodInfo;
    getMethods(): MethodInfo[];
    ensureMethod(name: string | symbol): MethodInfo;
    hasProperty(name: string | symbol): boolean;
    getProperty(name: string | symbol): PropertyInfo;
    getProperties(): PropertyInfo[];
    ensureProperty(name: string | symbol): PropertyInfo;
}
export declare class MethodInfo extends TypeInfo {
    private readonly _parameters;
    constructor(name: string | symbol, type?: Function);
    readonly parameters: ParameterInfo[];
    hasParameter(index: number): boolean;
    getParameter(index: number): ParameterInfo;
    ensureParameter(index: number): ParameterInfo;
}
export declare class PropertyInfo extends TypeInfo {
    private readonly _descriptor;
    constructor(name: string | symbol, descriptor: PropertyDescriptor);
    readonly readable: boolean;
    readonly writable: boolean;
}
export declare class ParameterInfo extends TypeInfo {
    readonly index: number;
    constructor(index: number);
}