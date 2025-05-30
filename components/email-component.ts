import emailjs from 'emailjs-com';

export const sendEmail = (form: HTMLFormElement) => {
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      form,
      process.env.NEXT_PUBLIC_USER_API_KEY || ""
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error(error.text);
        alert("Oops, something went wrong!");
      }
    );
};
