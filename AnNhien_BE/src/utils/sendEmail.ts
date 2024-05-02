/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import nodemailer from 'nodemailer';
// @ts-ignore
import { environmentConfig } from '@src/configs/custom-environment-variables.config';

export const transporter = nodemailer.createTransport(
  {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: environmentConfig.ADMIN_SEND_GRID_EMAIL,
      pass: environmentConfig.EMAIL_PASSWORD,
    },
  }
);

let htmlContent = ` <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2
          style="text-align: center; text-transform: uppercase;color: teal;
            "
        >
          Welcome to Codding With Saddam.
        </h2>
        <div style=" font-size: 1.3rem ">
          <p>Congratulations! You successfully signed up to Saddam App!</p>
          <p> click the button below to flow Saddam on Gitub </p>
          <a
            href="https://github.com/saddamarbaa"
            style="background: crimson; text-decoration: none; color: white; padding: 10px 30px; margin: 10px 0; display: inline-block;  border-radius: 6px;"
          >
            Follow Me
          </a>
          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                        If you have any questions, just reply to this email
                        <span style="color: #4A35EA;">
                          saddamarbaa@gmail.com
                        </span>
                        we're always happy to help out.
                      </p>
        </div>
      </div>`;

export const sendEmail = async (userEmail: any) => {
  const emailContent = {
    from: environmentConfig?.ADMIN_SEND_GRID_EMAIL,
    to: userEmail,
    subject: 'Signup succeeded!',
    html: htmlContent,
  };

  const info = await transporter.sendMail(emailContent, function (error, _info) {
    if (error) {
      if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
        console.log('Sending Email error:', error);
        console.log('Sending Email error:');
      }
    } else if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
      console.log(`Successfully  send email to ${userEmail}...`);
    }
  });
};

export const sendResetPasswordEmail = (userEmail: string, userName: string, link: string) => {
  htmlContent = `
  <!DOCTYPE html>
  <html lang="en-US">
  
  <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>Reset Password Email</title>
      <meta name="description" content="Reset Password Email ." />
      <style type="text/css">
          a:hover {
              text-decoration: underline !important;
          }
      </style>
  </head>
  
  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
      <!--100% body table-->
      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
          style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
          <tr>
              <td>
                  <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto; margin:auto; font-size: 110%;"
                      width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                  <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo"
                                      alt="logo" />
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td>
                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                  style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                  <tr>
                                      <td
                                          style="height:40px; text-align: center; text-transform: uppercase;color: teal; padding: 1.3rem; font-weight:500; margin:0;font-size:23px;font-family:'Rubik',sans-serif;">
                                          Xin chào ${userName}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding:0 35px;">
                                          <h1
                                              style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                              Bạn đã yêu cầu đặt lại mật khẩu của mình
                                          </h1>
                                          <span
                                              style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Chúng tôi không thể đơn giản gửi cho bạn mật khẩu cũ của bạn. 
                                              Một liên kết duy nhất để đặt lại mật khẩu đã được tạo cho bạn. Để đặt lại mật khẩu của bạn, vui lòng nhấp vào liên kết sau và làm theo hướng dẫn. 
                                              và Nếu bạn không yêu cầu điều này, vui lòng bỏ qua email này và mật khẩu của bạn sẽ không thay đổi.
                                          </p>
                                          <a href=${link}
                                              style="background: crimson; text-decoration: none; color: white; padding: 10px 30px; margin: 20px 0; display: inline-block;  border-radius: 6px;">
                                              Reset Password
                                          </a>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Nếu cách đó không hiệu quả, hãy sao chép và dán liên kết sau vào trình duyệt của bạn:
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              <a href="${link}" target="_blank" style="color: #4A35EA;">${link}</a>
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Nếu bạn có bất kỳ câu hỏi nào, chỉ cần trả lời email này
                                              <span style="color: #4A35EA;">
                                                  vuonchayannhien@gmail.com
                                              </span>
                                              chúng tôi luôn sẵn lòng trợ giúp.
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height:40px;">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <p
                                  style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                  &copy; <strong>www.vuonchayannhien.com</strong>
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <!--/100% body table-->
  </body>
  
  </html>
`;

  const emailContent = {
    from: environmentConfig.ADMIN_SEND_GRID_EMAIL,
    to: userEmail,
    subject: 'Password Change Request',
    html: htmlContent,
  };

  transporter.sendMail(emailContent, function (error, _info) {
    if (error) {
      if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
        console.log('Sending Email error:', error);
        console.log('Sending Email error:');
      }
    } else if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
      console.log(`Successfully  send email to ${userEmail}...`);
    }
  });
};

export const sendConfirmResetPasswordEmail = (userEmail: string, userName: string, link: string) => {
  htmlContent = `
  <!DOCTYPE html>
  <html lang="en-US">
  
  <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>Reset Password Email</title>
      <meta name="description" content="Reset Password Email ." />
      <style type="text/css">
          a:hover {
              text-decoration: underline !important;
          }
      </style>
  </head>
  
  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
      <!--100% body table-->
      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
          style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
          <tr>
              <td>
                  <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto; margin:auto; font-size: 110%;"
                      width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                  <img width="60" src="https://i.ibb.co/hL4XZp2/android-chrome-192x192.png" title="logo"
                                      alt="logo" />
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td>
                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                  style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                  <tr>
                                      <td
                                          style="height:40px; text-align: center; text-transform: uppercase;color: teal; padding: 1.3rem; font-weight:500; margin:0;font-size:23px;font-family:'Rubik',sans-serif;">
                                          Xin chào ${userName}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding:0 35px;">
                                          <h1
                                              style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                              Đặt lại mật khẩu thành công
                                          </h1>
                                          <span
                                              style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Mật khẩu của bạn đã được cập nhật thành công
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Chúng tôi rất vui khi bạn bắt đầu. Chỉ cần nhấn nút bên dưới để đăng nhập                                        </p>
                                          <a href="${link}"
                                              style="background:  #3385ff; text-decoration: none; color: white; padding: 10px 30px; margin: 20px 0; display: inline-block;  border-radius: 6px;">
                                              Login
                                          </a>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Nếu cách đó không hiệu quả, hãy sao chép và dán liên kết sau vào trình duyệt của bạn:                                        </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              <a href="${link}" target="_blank" style="color: #4A35EA;">${link}</a>
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Nếu bạn có bất kỳ câu hỏi nào, chỉ cần trả lời email này
                                              <span style="color: #4A35EA;">
                                                  vuonchayannhien@gmail.com
                                              </span>
                                              chúng tôi luôn sẵn lòng trợ giúp.
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height:40px;">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <p
                                  style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                  &copy; <strong>www.vuonchayannhien.com</strong>
                              </p>
  
                          </td>
                      </tr>
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <!--/100% body table-->
  </body>
  
  </html>
`;

  const emailContent = {
    from: environmentConfig.ADMIN_SEND_GRID_EMAIL,
    to: userEmail,
    subject: 'Password Reset Success',
    html: htmlContent,
  };

  transporter.sendMail(emailContent, function (error, _info) {
    if (error) {
      if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
        console.log('Sending Email error:', error);
      }
    } else if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
      console.log(`Successfully  send email to ${userEmail}...`);
    }
  });
};

export const sendEmailVerificationEmail = async (userEmail: string, userName: string, link: string) => {
  htmlContent = `
  <!DOCTYPE html>
  <html lang="en-US">

  <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <title>email verification</title>
      <meta name="description" content="Reset Password Email ." />
      <style type="text/css">
          a:hover {
              text-decoration: underline !important;
          }
      </style>
  </head>

  <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
      <!--100% body table-->
      <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
          style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
          <tr>
              <td>
                  <table
                      style="background-color: #f2f3f8; max-width:670px;  margin:0 auto; margin:auto; font-size: 110%;"
                      width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                  <img width="60" src="/public/assets/logo/Logo2.svg" title="logo" alt="logo" />
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td>
                              <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                  style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                  <tr>
                                      <td
                                          style="height:40px; text-align: center; text-transform: uppercase;color: teal; padding: 1.3rem; font-weight:500; margin:0;font-size:23px;font-family:'Rubik',sans-serif;">
                                          Xin chào ${userName}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding:0 35px;">
                                          <h1
                                              style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                              Xác nhận email của bạn
                                          </h1>
                                          <span
                                              style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                          <p style="color:#455056; font-size:15px;">
                                              Vui lòng xác minh email của bạn để hoàn tất đăng ký tài khoản.
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Bạn chỉ còn một bước nữa là vui lòng nhấp vào nút bên dưới để xác minh
                                              email của bạn.
                                              và Nếu bạn vô tình nhận được email này, chỉ cần xóa nó đi.
                                              Bạn sẽ không được đăng ký nếu bạn không nhấp vào liên kết xác nhận.
                                          </p>
                                          <a href="${link}"
                                              style="background:  #1a82e2; text-decoration: none; color: white; padding: 10px 30px; margin: 20px 0; display: inline-block;  border-radius: 6px;">
                                              Xác nhận
                                          </a>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                             Nếu nó không hoạt động hãy sao chép mã bên dưới và gán vào trình duyệt:
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              <a href="${link}" target="_blank" style="color: #4A35EA;">${link}</a>
                                          </p>
                                          <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                              Nếu có bất kì thắc mắc nào hãy liên hệ email:
                                              <span style="color: #4A35EA;">
                                              vuonchayannhien@gmail.com
                                              </span>
                                              Rất vui vì sự đăng ký của bạn
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="height:40px;">&nbsp;</td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:20px;">&nbsp;</td>
                      </tr>
                      <tr>
                          <td style="text-align:center;">
                              <p
                                  style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                  &copy; <strong>www.vuonchayannhien.com</strong>
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td style="height:80px;">&nbsp;</td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
      <!--/100% body table-->
  </body>

  </html>
`;

  const emailContent = {
    from: environmentConfig.ADMIN_SEND_GRID_EMAIL,
    to: userEmail,
    subject: 'Email Verification',
    html: htmlContent,
  };

  transporter.sendMail(emailContent, function (error, _info) {
    if (error) {
      if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
        console.log('Sending Email error:', error);
        console.log('Sending Email error:');
      }
    } else if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
      console.log(`Successfully  send email to ${userEmail}...`);
    }
  });
};

export default { sendEmailVerificationEmail, sendEmail, sendResetPasswordEmail, sendConfirmResetPasswordEmail };
