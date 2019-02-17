export const replaceItemInArray = <T extends {}>(arr: T[], item: T, itemIndex: number): T[] => {
    return [
    ...arr.slice(0, itemIndex),
    item,
    ...arr.slice(itemIndex + 1)
    ]
}

export const removeItemInArray = <T extends {}>(arr: T[], item: T, itemIndex: number): T[] => {
    return [
    ...arr.slice(0, itemIndex),
    ...arr.slice(itemIndex + 1)
    ]
}

export const addItemToArray = <T extends {}>(arr: T[], item: T): T[] => {
    return arr.concat([item])
}