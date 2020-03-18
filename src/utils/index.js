import { unloadedSrc } from '../enum';

/**
 * Returns image svg
 * @function getLogoByDriverType
 * @param {string} type - string driver type name
 * @returns {string} - image driver type
*/
export const getLogoByDriverType = type => checkUndefinedType(type) ? process.env.PUBLIC_URL + '/icon-svg/' + replaceSpace(type.toLowerCase()) + '.svg' : unloadedSrc;


/**
 * Returns filtered list
 * @function filterList
 * @param {array} filterList - list of items
 * @param {string} value - search value.
 * @returns {array} - filtered array by search value
*/
export const filterList = (list, value) => {
    return list.filter(item => {
            let name = checkUndefinedType(item.name) ? replaceSpace(item.name.toLowerCase()) : false;
            let driverType = checkUndefinedType(item.driverType) ? replaceSpace(item.driverType.toLowerCase()) : false;
            let driverRank = checkUndefinedType(item.driverRank) ? replaceSpace(item.driverRank.toLowerCase()) : false;
            let phone = checkUndefinedType(item.phone) ? replaceSpace(item.phone.toString()) : false;

            return (name && name.includes(value))
                   ||
                   (driverType && driverType.includes(value))
                   ||
                   (driverRank && driverRank.includes(value))
                   ||
                   (phone && phone.includes(value))
                   ||
                   "Not Found"
    });

};

/**
 * Returns string without space
 * @param {string}
 */
export const replaceSpace = value => value.replace(/\s+/g, '');

/**
 * Returns string without special chars
 * @param {string}
 */
export const replaceSpecialCharts = value => value.replace(/[\. ,:-]+/g, "");

/**
 * Returns boolean - check undefined type
 * @param {string}
 */
export const checkUndefinedType = value => typeof value !== 'undefined';

/**
 * Returns string - limit char inside string
 * @param {string}
 * @param {number}
 */
export const charLimit = (text, count) => checkUndefinedType(text) ? text.slice(0, count) + (text.length > count ? "..." : "") : 'Not found';

/**
 * Returns image orientation
 * @function imageOrientation
 * @param {string} src - src of image
 * @returns {string} - type of image orientation
*/
export const imageOrientation = src => {
        let orientation,
        img = new Image();
        img.src = src;

        if (img.naturalWidth > img.naturalHeight) {
            orientation = 'landscape';
        } else if (img.naturalWidth < img.naturalHeight) {
            orientation = 'portrait';
        } else {
            orientation = 'even';
        }

        return orientation;
}
