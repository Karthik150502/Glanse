"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Handler = void 0;
const aws_sdk_1 = require("aws-sdk");
class S3Handler {
    constructor() {
        aws_sdk_1.config.update({
            accessKeyId: process.env.AWS_S3_ACCESS_KEY,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        });
        S3Handler.s3Instance = new aws_sdk_1.S3({
            params: {
                Bucket: process.env.AWS_S3_BUCKET_NAME
            },
            region: process.env.AWS_S3_REGION_NAME
        });
    }
    static getInstance() {
        return this.instance;
    }
    deletObject(fileKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: fileKey,
            };
            try {
                yield S3Handler.s3Instance.deleteObject(params).promise();
                return true;
            }
            catch (e) {
                console.log("Error from S3 Handler= ", e);
                throw new Error("Unable to upload the image.");
            }
        });
    }
}
exports.S3Handler = S3Handler;
S3Handler.instance = new S3Handler();
