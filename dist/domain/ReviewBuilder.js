"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReviewBuilder = /** @class */ (function () {
    function ReviewBuilder() {
        this._review = {
            reviewId: "",
            lectureId: "",
            rate: 0,
            contents: "",
            image1: "",
            image2: "",
            image3: "",
            regDate: "",
            writeId: "",
            writeNm: "",
        };
    }
    ReviewBuilder.prototype.reviewId = function (reviewId) {
        this._review.reviewId = reviewId;
        return this;
    };
    ReviewBuilder.prototype.lectureId = function (lectureId) {
        this._review.lectureId = lectureId;
        return this;
    };
    ReviewBuilder.prototype.rate = function (rate) {
        this._review.rate = rate;
        return this;
    };
    ReviewBuilder.prototype.contents = function (contents) {
        this._review.contents = contents;
        return this;
    };
    ReviewBuilder.prototype.image1 = function (image1) {
        this._review.image1 = image1;
        return this;
    };
    ReviewBuilder.prototype.image2 = function (image2) {
        this._review.image2 = image2;
        return this;
    };
    ReviewBuilder.prototype.image3 = function (image3) {
        this._review.image3 = image3;
        return this;
    };
    ReviewBuilder.prototype.regDate = function (regDate) {
        this._review.regDate = regDate;
        return this;
    };
    ReviewBuilder.prototype.writeId = function (writeId) {
        this._review.writeId = writeId;
        return this;
    };
    ReviewBuilder.prototype.writeNm = function (writeNm) {
        this._review.writeNm = writeNm;
        return this;
    };
    ReviewBuilder.prototype.build = function () {
        return this._review;
    };
    return ReviewBuilder;
}());
exports.default = ReviewBuilder;
