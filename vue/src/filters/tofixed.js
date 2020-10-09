/**
 * @file 将数字保留两位有效数字
 * @author 梅小二
 */

export default (value) => {
    return parseFloat(value).toFixed(3);
};
