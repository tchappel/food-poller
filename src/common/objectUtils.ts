export const replacePropertyInObject = <T extends {}>(obj: T, property: string, value: any): T => {
    return {...obj, ...{[property]: value}}
}