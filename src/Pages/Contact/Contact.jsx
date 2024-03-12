import address from "../../assets/images/map-pin-dynamic-gradient.png"
import phone from "../../assets/images/phone.png"
import mail from "../../assets/images/mail.png"

const Contact = () => {
  return (
    <div className="grid grid-cols-2 px-20 font-[sora]">
      {/* contact form------- */}
      <div className="bg-[#0F051D] h-96 w-full border border-primary p-10 rounded-xl">
        <h2 className="gradient-text  font-bold py-2 text-5xl">
          Let’s work together!
        </h2>
        <p>
          Let&apos;s Connect! Whether you have a project in mind, a question, or
          just want to say hello, I&apos;d love to hear from you. Drop me a
          message below, and let&apos;s start a conversation.
        </p>
      </div>

      {/* contact info--------- */}
      <div className="text-white p-10 ">
        <div className="flex items-center gap-5 mb-5">
        <img src={phone} alt="" className="h-20 w-20"/>
          <div>
            <p>Phone</p>
            <a href="tel:+8801705433694">
              <p className="text-xl">(+880) 1705-433694</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5">
        <img src={mail} alt="" className="h-20 w-20"/>
          <div>
            <p>Email</p>
            <a href="mailto:mdashik.contact@gmail.com">
              <p className="text-xl">mdashik.contact@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5">
            <img src={address} alt="" className="h-20 w-20"/>
          <div>
            <p>Address</p>
            <p className="text-xl">Silimpur, Bogura Sadar, Bogura-5800, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
