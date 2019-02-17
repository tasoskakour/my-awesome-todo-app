import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.locale(en)

export const myTimeAgo = (dateInMs, { flavour } = {}) => {
    return new TimeAgo('en').format((dateInMs) - 60 * 1000, { flavour }) // default flavor is long
}
