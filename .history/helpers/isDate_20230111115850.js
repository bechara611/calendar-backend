import moment from "moment"

export const isDate = (value, { req, location, path }) => {
    const fecha = moment(value)
    if (!fecha.isValid()) {
        return false
    } else {
        return true
    }

}