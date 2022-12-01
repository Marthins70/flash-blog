const minute = 60
const hour = 60 * minute
const day = hour * 24
const week = day * 7

export const REVALIDATE_VALUE_IN_MINUTES = (count: number) =>  minute * count
export const REVALIDATE_VALUE_IN_HOURS = (count: number) => hour * count
export const REVALIDATE_VALUE_IN_DAYS = (count: number) => day * count
export const REVALIDATE_VALUE_IN_WEEKS = (count: number) => week * count