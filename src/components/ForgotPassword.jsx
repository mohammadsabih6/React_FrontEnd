import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ForgetPassword = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const userEmail = form.current.user_email.value;
   
    fetch(`http://localhost:8082/user/ForgotPassword/${userEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty('error')) {
          throw new Error(data.error);
        } else {
         const token = generateRandomToken();
         const emailLink = `http://localhost:3000/new-password/?email=${userEmail}&token=${token}`;
          //const emailLink = `http://localhost:3000/NewPassword/?token=${token}`;
          form.current.elements.message.value = emailLink; // Update this line
         
          form.current.elements.token.value = token;
          emailjs
            .sendForm('service_zgcb8cy', 'template_dx8gftp', form.current, '04RwhtqN7IMklYKNm')
            .then((result) => {
                fetch(`http://localhost:8082/user/ForgotPassword/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:userEmail,token:token}),
                })
              console.log('Reset link is successfully sent to the user!');
              console.log('Email Link:', emailLink);
              setEmailSent(true);
            })
            .catch((error) => {
              console.log('An error occurred while sending the email:', error);
            });
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log('Error: ', error.message);
      });
  };

  const generateRandomToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 8; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  return (
    <div>
      {!emailSent ? (
        <form ref={form} onSubmit={sendEmail}>
          <label>Email</label>
          <input type="email" name="user_email" />
          <input type="hidden" name="message" />
          <input type='hidden' name='token'/>
          <input type="submit" value="Send" />

          {error && <p>{error}</p>}
        </form>
      ) : (
        <div>
          <p>Email sent successfully. Please check your inbox for the reset password link.</p>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;