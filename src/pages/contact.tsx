import { useState } from "react";
import Title from "../components/title";
import { COLORS, EMAIL_KEYS } from "../constants/constant";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoIosCall } from "react-icons/io";

function Contact() {
  const [sender, setSender] = useState({
    name: "",
    type: "",
    contact: "",
  });
  const [responseState, setResponseState] = useState({
    isLoading: false,
    success: false,
    title: "",
    desc: "",
  });
  const handleChange = (value: string, key: string) => {
    if (value.length > 20) {
      return;
    }
    setSender({ ...sender, [key]: value.toLowerCase().trim() });
  };
  const handleSendMail = async () => {
    setResponseState({ ...responseState, isLoading: true });
    const templateParams = {
      to_name: "Ikram",
      from_name: sender.name,
      message: sender,
    };
    await emailjs
      .send(
        EMAIL_KEYS.SERVICE_KEY,
        EMAIL_KEYS.TEMPLATE_KEY,
        templateParams,
        EMAIL_KEYS.API_KEY
      )
      .then(() => {
        setResponseState({
          isLoading: false,
          success: true,
          title: "Success",
          desc: "Thank you for your email. I have received it and will be in touch shortly!",
        });

        setSender({
          name: "",
          type: "",
          contact: "",
        });
      })
      .catch(() => {
        setResponseState({
          isLoading: false,
          success: false,
          title: "Try Again",
          desc: "There was a problem while sending the mail. Please try to send the mail again!",
        });
      });
    // @ts-ignore
    document.getElementById("my_modal_1").showModal();
  };
  // Dailer
  const handleClick = () => {
    // Construct the phone number URI
    const dialUrl = `tel:9110543857`;

    // Open the URI in a new window to simulate dialer behavior
    window.open(dialUrl, "_blank");
  };
  return (
    <div id="contact" className="h-full flex flex-col gap-1 p-2 text-white">
      <Title name="Contact" />
      {/* Desc */}
      <div
        className="text-lg md:text-base lg:text-lg flex flex-col xs:gap-5 md:gap-3 lg:gap-5 px-2 leading-8 justify-center h-full"
        style={{ letterSpacing: 2 }}
      >
        <p className="text-2xl md:text-lg lg:text-2xl">
          Dear <span style={{ color: COLORS.GREEN }}>Ikram</span>,
        </p>
        <p>I hope this letter finds you well.</p>
        <p className="">
          My name is{" "}
          <input
            placeholder="name"
            type="text"
            value={sender.name}
            className="w-32 input input-sm"
            style={{ color: COLORS.GREEN }}
            onChange={(e) => handleChange(e.target.value, "name")}
          />{" "}
          I came across your portfolio and I was really impressed by your work.
          I'm writing to you because I'm interested in{" "}
          <input
            placeholder="hire/collab"
            className="input input-sm w-36"
            value={sender.type}
            style={{ color: COLORS.GREEN }}
            onChange={(e) => handleChange(e.target.value, "type")}
          />
          . It would be a pleasure to have a conversation and explore potential
          opportunities.
        </p>

        <div className="text-xl md:text-base lg:text-xl">
          <p>Warm Regards,</p>
          <p className=" capitalize" style={{ color: COLORS.GREEN }}>
            {sender.name !== "" && `${sender.name}.`}
          </p>
          <div>
            <input
              type="text"
              value={sender.contact}
              onChange={(e) => handleChange(e.target.value, "contact")}
              placeholder="phone/email"
              className="input input-sm w-36"
              style={{ color: COLORS.GREEN }}
            />
          </div>
        </div>
        {/* footer */}
        <div className="flex items-center justify-around mt-3">
          {/* Call Now */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex justify-end pr-10"
          >
            <button
              style={{ backgroundColor: COLORS.RED }}
              className="btn text-white"
              onClick={handleClick}
            >
              <IoIosCall size={20} />
              Call
            </button>
          </motion.div>
          {/* Submit */}
          {/* {sender.name &&
            (sender.type === "hire" || sender.type === "collab") &&
            sender.contact && ( */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex justify-end pr-10"
          >
            <button
              disabled={
                sender.name &&
                (sender.type === "hire" || sender.type === "collab") &&
                sender.contact
                  ? false
                  : true
              }
              style={{ backgroundColor: COLORS.GREEN }}
              className="btn text-white"
              onClick={handleSendMail}
            >
              Submit
            </button>
          </motion.div>
          {/* )} */}
        </div>
      </div>
      {/* Modal */}
      <dialog id="my_modal_1" className="modal text-black">
        <div className="modal-box">
          <h3
            className=" font-extrabold text-lg"
            style={{ color: responseState.success ? COLORS.GREEN : COLORS.RED }}
          >
            {responseState.title}!
          </h3>
          <p className="py-4">{responseState.desc} </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Contact;
