const nodemailer = require("nodemailer");

exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9);
    otp = otp + randVal;
  }
  return otp;
};

exports.mailTransport = () =>
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

exports.generateEmailTemplate = (code) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Static Template</title>
    
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style="
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: #ffffff;
          font-size: 14px;
        "
      >
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            padding: 45px 30px 60px;
            background: #f4f7ff;
            background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
            background-repeat: no-repeat;
            background-size: 800px 452px;
            background-position: top center;
            font-size: 14px;
            color: #434343;
          "
        >
          <header>
            <table style="width: 100%;">
              <tbody>
                <tr style="height: 0;">
                  <td>
                    <img
                      alt=""
                      src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1663574980688_114990/archisketch-logo"
                      height="30px"
                    />
                  </td>
                  <td style="text-align: right;">
                    <span
                      style="font-size: 16px; line-height: 30px; color: #ffffff;"
                      >12 Nov, 2021</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </header>
    
          <main>
            <div
              style="
                margin: 0;
                margin-top: 70px;
                padding: 92px 30px 115px;
                background: #ffffff;
                border-radius: 30px;
                text-align: center;
              "
            >
              <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                <h1
                  style="
                    margin: 0;
                    font-size: 24px;
                    font-weight: 500;
                    color: #1f1f1f;
                  "
                >
                  Your OTP
                </h1>
                <p
                  style="
                    margin: 0;
                    margin-top: 17px;
                    font-size: 16px;
                    font-weight: 500;
                  "
                >
                  Hey Tomy,
                </p>
                <p
                  style="
                    margin: 0;
                    margin-top: 17px;
                    font-weight: 500;
                    letter-spacing: 0.56px;
                  "
                >
                  Thank you for choosing Archisketch Company. Use the following OTP
                  to complete the procedure to change your email address. OTP is
                  valid for
                  <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                  Do not share this code with others, including Archisketch
                  employees.
                </p>
                <p
                  style="
                    margin: 0;
                    margin-top: 60px;
                    font-size: 40px;
                    font-weight: 600;
                    letter-spacing: 25px;
                    color: #ba3d4f;
                  "
                >
                  ${code}
                </p>
              </div>
            </div>
    
            <p
              style="
                max-width: 400px;
                margin: 0 auto;
                margin-top: 90px;
                text-align: center;
                font-weight: 500;
                color: #8c8c8c;
              "
            >
              Need help? Ask at
              <a
                href="mailto:archisketch@gmail.com"
                style="color: #499fb6; text-decoration: none;"
                >archisketch@gmail.com</a
              >
              or visit our
              <a
                href=""
                target="_blank"
                style="color: #499fb6; text-decoration: none;"
                >Help Center</a
              >
            </p>
          </main>
    
          <footer
            style="
              width: 100%;
              max-width: 490px;
              margin: 20px auto 0;
              text-align: center;
              border-top: 1px solid #e6ebf1;
            "
          >
            <p
              style="
                margin: 0;
                margin-top: 40px;
                font-size: 16px;
                font-weight: 600;
                color: #434343;
              "
            >
              Archisketch Company
            </p>
            <p style="margin: 0; margin-top: 8px; color: #434343;">
              Address 540, City, State.
            </p>
            <div style="margin: 0; margin-top: 16px;">
              <a href="" target="_blank" style="display: inline-block;">
                <img
                  width="36px"
                  alt="Facebook"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
                />
              </a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px;"
              >
                <img
                  width="36px"
                  alt="Instagram"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
              /></a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px;"
              >
                <img
                  width="36px"
                  alt="Twitter"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
                />
              </a>
              <a
                href=""
                target="_blank"
                style="display: inline-block; margin-left: 8px;"
              >
                <img
                  width="36px"
                  alt="Youtube"
                  src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
              /></a>
            </div>
            <p style="margin: 0; margin-top: 16px; color: #434343;">
              Copyright © 2022 Company. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
    `;
};

exports.plainEmailTemplete = (heading, message) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Signing Up</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            max-width: 100px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 14px;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://via.placeholder.com/100x100.png?text=Logo" alt="App Logo">
        </div>
        <div class="content">
            <h1>Welcome to [App Name]!</h1>
            <p>Thank you for signing up for our app. We're thrilled to have you on board. Our app is designed to help you [briefly describe the app’s purpose or benefit].</p>
            <p>To get started, simply click the button below to log in and begin exploring all the features we offer.</p>
            <a href="[Your App URL]" class="button">Get Started</a>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@app.com">contact us</a> at any time.</p>
            <p>&copy; 2024 [App Name]. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

  `;
};

exports.generatePasswordResetTemplate = (url) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            max-width: 100px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h1 {
            color: #333333;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 14px;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://via.placeholder.com/100x100.png?text=Logo" alt="App Logo">
        </div>
        <div class="content">
            <h1>Reset Your Password</h1>
            <p>We received a request to reset your password. Click the button below to reset it.</p>
            <a href="${url}" class="button">Reset Password</a>
            <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@app.com">contact us</a> at any time.</p>
            <p>&copy; 2024 [App Name]. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

  `;
};

exports.plainEmailTemplete = (heading, message) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successfully</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header img {
            width: 100px;
            height: 100px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content h1 {
            color: #333333;
            margin-bottom: 10px;
        }
        .content p {
            color: #666666;
            line-height: 1.6;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            color: #999999;
            font-size: 14px;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://via.placeholder.com/100x100.png?text=✓" alt="Success Icon">
        </div>
        <div class="content">
            <h1>${heading}</h1>
            <p>${message}</p>
        </div>
        <div class="footer">
            <p>If you have any questions, feel free to <a href="mailto:support@app.com">contact us</a> at any time.</p>
            <p>&copy; 2024 [App Name]. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

  `;
};
