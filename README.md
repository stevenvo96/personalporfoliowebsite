## 🌐 Welcome to My Personal Portfolio Deployment Project

This project showcases how I deployed my **personal portfolio website** using various **AWS services** for scalability, performance, and security.

### 🚀 Services Used:

- **Amazon S3**  
  Used to host and serve the static files required for the website, including HTML, CSS, JavaScript, and images.

- **Amazon CloudFront**  
  Acts as a global CDN (Content Delivery Network), efficiently delivering content to users around the world. It sits between users and the S3 bucket to improve speed and security.

- **Amazon Route 53**  
  Handles DNS configuration for my custom domain [vosteven.com](https://www.vosteven.com) ensuring correct routing to the CloudFront distribution.

- **AWS Certificate Manager (ACM)**  
  Manages SSL/TLS certificates, providing HTTPS encryption to keep user data secure.

- **AWS Lambda**  
  Powers a serverless backend function triggered when users submit the contact form. The Lambda function processes the data received through the API Gateway.

- **Amazon API Gateway**  
  Serves as a secure entry point for HTTP requests from the website. It connects the frontend (contact form) to the Lambda backend.

- **Amazon DynamoDB**  
  Stores contact form submissions in a scalable, serverless NoSQL database.

---

### 🔗 Live Website

You can view the deployed website here:  
👉 [https://www.vosteven.com](https://www.vosteven.com)
