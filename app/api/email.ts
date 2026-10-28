import { Resend } from "resend";
import type { productType } from "~/types/productType";

const key = process.env.RESEND_API_KEY;
const resend = new Resend(key);

export async function sendEmail() {
  resend.emails.send({
    from: "neverthelesse21@gmail.com",
    to: "easy21ajibola@gmail.com",
    subject: "Hello World",
    html: `<p>Thanks for placing your order your order info is  <strong>first email</strong>!</p> <br />`,
  });
  console.log("sent");
}
export async function invalidOrderInfo() {
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "neverthelesse21@gmail.com",
    subject: "Hello World",
    html: `<h1>Someon place an order, with invalid order id<strong>
    It look suspicious</strong>!</h1> <a>Track user!!</a> <br />`,
  });
  console.log("sent");
}
export async function successOrder(order: productType) {
  console.log(order);
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "neverthelesse21@gmail.com",
    subject: "Hello World",
    html: `
   <body style="background-color: dodgerblue; color: white">
  <div style="display: flex; justify-content: center; align-items: center">
    <h1>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Tqa4k4AFw1hg_dADj1G0FwHaHa%3Fpid%3DApi&f=1&ipt=fd1aa5fc0b0e18a0f0224cef1cde1d6b750479ad6c0d104f84f455b56064ecfa&ipo=images"
        alt=""
        style="width: 3rem"
      />
      Hello from Light House ICT
    </h1>
  </div>
  <h4>
    We just receiver your order, and your order is being procees, we will inform
    you in your email address
  </h4>
  <p>order details</p>
</body>

    `,
  });
  console.log("sent success checkout");
}
