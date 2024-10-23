export type S3ImageParams = {
    Key: string,
    Body: File,
    Folder: string
}

export abstract class S3 {
    public static uploadObject(): void { }
    public static deletObject(): void { }
    public static getUrl() { }
}