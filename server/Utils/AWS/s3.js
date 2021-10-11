import AWS from "aws-sdk";

// AWS s3 bucket config
const s3Bucket = new AWS.S3({
  accessKeyId: "AKIA2ZWZUJLE7D6T434P",
  secretAccessKey:"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",
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  )
};