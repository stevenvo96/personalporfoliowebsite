#Personal Portfolio Website

Welcome to this project, where I deploy my personal portfolio website using AWS services!

*Services used:

- **Amazon S3**: Used S3 to host and serve the files necessary for the website to run. This includes HTML, CSS, JavaScript, and image files.
- **CloudFront**: Used as the content delivery network (CDN) to securely and efficiently deliver my portfolio website to users across the globe. It acts as the middle layer between users and my S3 bucket
- **Amazon Route53**: Used to manage the DNS configuration for my custom domain, ensuring that users accessing my domain (vosteven.com) are correctly routed to my website hosted on CloudFront
- **ACM Certificate Manager** Used to provision and manage an SSL/TLS certificate, ensuring that all traffic to my website is encrypted and secure over HTTPS
- **AWS Lambda**: Used to create a serverless backend function that handles contact form submissions from my portfolio website. When a user fills out and submits the form, the data is sent to an API Gateway endpoint, which triggers the Lambda function
- **API Gateway**: Acts as the front door to my backend services. It allows the front-end (HTML/JavaScript website) to securely communicate with AWS services such as Lambda. It is the bridge between the contact form on the website and Lambda function.
- **DynamoDB**: Used to store contact form submissions sent through the portfolio website. 

Website can be found below.
https://www.vosteven.com