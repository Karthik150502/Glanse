import { S3 } from "./s3";
import { S3 as AWS_S3, config as AWS_Config } from "aws-sdk"

import { S3ImageParams } from "./s3";


export class S3Handler implements S3 {

    private static instance: S3Handler = new S3Handler();
    private static s3Instance: AWS_S3;

    private constructor() {
        AWS_Config.update({
            accessKeyId: process.env.AWS_S3_ACCESS_KEY,
            secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        })
        S3Handler.s3Instance = new AWS_S3({
            params: {
                Bucket: process.env.AWS_S3_BUCKET_NAME
            },
            region: process.env.AWS_S3_REGION_NAME
        })
    }

    public static getInstance() {

        return this.instance;
    }


    public async deletObject(fileKey: string): Promise<void | true> {
        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME as string,
            Key: fileKey,
        }

        try {
            await S3Handler.s3Instance.deleteObject(params).promise()
            return true
        } catch (e) {
            console.log("Error from S3 Handler= ", e)
            throw new Error("Unable to upload the image.")
        }
    }

}

