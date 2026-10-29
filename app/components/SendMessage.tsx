import { useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";
import { supabase } from "~/lib/subase";

export default function SendMessage() {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  async function submitMessage(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (messageInfo.email === "" || messageInfo.message === "") {
      toast("Kindly fill email and message field");
    }
    const { data, error } = await supabase.from("messages").insert(messageInfo);
    if (error) {
      toast.error(
        "There was an error while sending message, Kindly try through whatsapp email, or any of our social medial platform"
      );
    }
    toast.success(
      "Message successfully, We will reply you though your email, you are welcome"
    );
    setReceived(true);
  }
  function updateInput(e: ChangeEvent<HTMLInputElement | any>) {
    setMessageInfo({ ...messageInfo, [e.target.name]: e.target.value });
  }

  const [received, setReceived] = useState(false);
  return (
    <div className="w-full md:w-[70%] p-4 shadow-lg rounded-2xl">
      <h3 className="gradient elegant text-center  capitalize">
        send your message & get response as quickly
      </h3>
      {received ? (
        <div>Your messages have been successfully </div>
      ) : (
        <form className="w-full" onSubmit={submitMessage}>
          <div className="flex my-4">
            <input
              onChange={updateInput}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-soft rounded-2xl p-8 "
            />
            <input
              onChange={updateInput}
              type="email"
              required
              placeholder="Email Address"
              name="email"
              className="w-full ml-8 border border-soft rounded-2xl p-8 "
            />
          </div>
          <input
            onChange={updateInput}
            name="subject"
            type="text"
            placeholder="Subject "
            className="w-full border border-soft rounded-2xl p-8 "
          />
          <textarea
            name="message"
            className="w-full h-50 shadow-lg border border-gray-300 my-8 rounded-2xl p-8 "
            id="message"
            onChange={updateInput}
            placeholder="Your Message"
          ></textarea>
          <button className="bg-primary text-white rounded-2xl font-bold w-full shadow p-5">
            Send Message{" "}
          </button>
        </form>
      )}
    </div>
  );
}
