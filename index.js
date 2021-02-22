'use strict';

function isMultipleOfSeventeen(num) {
　　return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
/**
 * 空の配列を設定
 * 17で割り切れるかどうかを判定
 * 　a =>　num % 17 === 0
 * 
 * 判定した数値を配列に入れる
 */