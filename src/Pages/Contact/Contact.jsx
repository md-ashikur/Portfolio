import address from "../../images/map-pin-dynamic-gradient.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import { useForm } from "react-hook-form";
import "./Contact.css";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }

  return (
    <div className="grid lg:grid-cols-2 lg:px-20 px-5 content-center">
      {/* contact form------- */}
   
      <div  className=" h-auto w-full border border-primary lg:p-10 p-5 mt-10 rounded-xl">
        <h2 className="gradient-text  font-bold py-2 lg:text-5xl text-2xl">
          Let’s work together!
        </h2>
        <p className="text-justify">
          Whether you have a project in mind, a question, or
          just want to say hello, I&apos;d love to hear from you. Drop me a
          message below, and let&apos;s start a conversation.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div className="grid lg:grid-cols-2 gap-3">
            <div>
              <input placeholder="First name*" className="input-body outline-0 p-2 w-full h-10 "
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p className="err text-xs" role="alert">First name is required</p>
              )}
            </div>

            <div>
              <input placeholder="Last name*" className="input-body outline-0 p-2 w-full h-10 "
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <p className="err text-xs" role="alert">Last name is required</p>
              )}
            </div>
          </div>

          {/* --------------- */}
          <div className="grid lg:grid-cols-2 gap-3 my-3">
            <div>
            <input type="email" placeholder="Email*" className="input-body outline-0 p-2 w-full h-10 "
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p className="err text-xs" role="alert">{errors.mail.message}</p>}
            </div>

            <div>
              <input type="tel" placeholder="Phone number" className="input-body outline-0 p-2 w-full h-10 "
                {...register("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              
            </div>
          </div>

          <div>
              <textarea placeholder="Message*" className="input-body outline-0 p-2 w-full h-28 "
                {...register("message", { required: true })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message?.type === "required" && (
                <p className="err text-xs" role="alert">Message is required</p>
              )}
            </div>

        

          <input type="submit" value="Send Message" className="text-base my-3 hover:scale-90 transition duration-300 ease-in-out back-color px-5 py-2 rounded-lg" />
        </form>
      </div>
    

      {/* contact info--------- */}
      <div  className="flex items-center">
      <div className="text-white lg:p-10 p-5">
        <div className="flex items-center gap-5 mb-5">
          <img src={phone} alt="" className="lg:h-20 h-16 lg:w-20 h-16" />
          <div>
            <p>Phone / WhatsApp</p>
            <a href="tel:+8801705433694">
              <p className="lg:text-xl hover:text-primary">(+880) 1705-433694</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5">
          <img src={mail} alt="" className="lg:h-20 h-16 lg:w-20 h-16" />
          <div>
            <p>Email</p>
            <a href="mailto:mdashik.contact@gmail.com">
              <p className="lg:text-xl hover:text-primary">mdashik.contact@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-5">
          <img src={address} alt="" className="lg:h-20 h-16 lg:w-20 h-16" />
          <div>
            <p>Address</p>
            <p className="lg:text-xl hover:text-primary">
              Silimpur, Bogura Sadar, Bogura-5800, Bangladesh
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
