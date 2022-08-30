export function getEnumKeyByEnumValue<T extends {[index:string]:string}>(myEnum:T, enumValue:string|undefined|null):keyof T|string|null|undefined {
    const keys = Object.keys(myEnum).filter(x => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : null;
}