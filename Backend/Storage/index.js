import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
// const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;

export const putObjectUrl = async (fileName, fileType) => {
  const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;

  const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  });

  const command = new PutObjectCommand({
    Bucket: "my-chat-space",
    Key: `/ProfilePics/${fileName}`,
    ContentType: fileType,
  });

  const fileUrl = `https://my-chat-space.s3.ap-south-1.amazonaws.com//ProfilePics/${fileName}`;

  const url = await getSignedUrl(s3Client, command);
  return { uploadUrl: url, fileUrl };
};

// async function listObjects() {
//   const command = new ListObjectsV2Command({
//     Bucket: "my-chat-space",
//     key: "/",
//   });
//   const response = await s3Client.send(command);
//   console.log(response);
// }

// export const DeleteObject = async(objectKey) => {
//   const command = new DeleteObjectCommand({
//     Bucket: "my-chat-space",
//     Key: objectKey,
//   });
//   const response = await s3Client.send(command);
//   console.log(response);
// }

