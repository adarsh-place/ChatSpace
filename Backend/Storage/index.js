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
  const bucketRegion = process.env.AWS_REGION;
  const bucketName = process.env.AWS_S3_BUCKET_NAME;
  const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY;

  const s3Client = new S3Client({
    region: bucketRegion,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  });

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: `/ProfilePics/${fileName}`,
    ContentType: fileType,
  });

  const fileUrl = `https://${bucketName}.s3.${bucketRegion}.amazonaws.com//ProfilePics/${fileName}`;

  const url = await getSignedUrl(s3Client, command);
  return { uploadUrl: url, fileUrl };
};

// async function listObjects() {
//   const command = new ListObjectsV2Command({
//     Bucket: "bucket-name",
//     key: "/",
//   });
//   const response = await s3Client.send(command);
//   console.log(response);
// }

// export const DeleteObject = async(objectKey) => {
//   const command = new DeleteObjectCommand({
//     Bucket: "bucket-name",
//     Key: objectKey,
//   });
//   const response = await s3Client.send(command);
//   console.log(response);
// }

