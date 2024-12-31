"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndCreateFile = void 0;
const server_1 = require("../server");
const validateAndCreateFile = async (resFile) => {
    try {
        if (resFile?.FileId == null) {
            resFile = await server_1.prisma.files.create({
                data: {
                    Name: resFile.Name,
                    FileTypeId: classifyFileType(resFile.FileUrl),
                    FileUrl: resFile.FileUrl,
                    CreationDate: new Date(),
                },
            });
        }
        return resFile;
    }
    catch (error) {
        console.log(error);
    }
};
exports.validateAndCreateFile = validateAndCreateFile;
const classifyFileType = (fileUrl) => {
    let FileType;
    (function (FileType) {
        FileType[FileType["Image"] = 1] = "Image";
        FileType[FileType["Audio"] = 2] = "Audio";
        FileType[FileType["Video"] = 3] = "Video";
        FileType[FileType["Document"] = 4] = "Document";
    })(FileType || (FileType = {}));
    //use a switch statement to classify the file type
    switch (fileUrl.split(".").pop()) {
        case "png":
            return FileType.Image;
        case "jpg":
            return FileType.Image;
        case "jpeg":
            return FileType.Image;
        case "gif":
            return FileType.Image;
        case "mp4":
            return FileType.Video;
        case "webm":
            return FileType.Video;
        case "mp3":
            return FileType.Audio;
        case "wav":
            return FileType.Audio;
        case "ogg":
            return FileType.Audio;
        default:
            return FileType.Document;
    }
};
