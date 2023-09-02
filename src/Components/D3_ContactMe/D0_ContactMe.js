import { useState } from "react";
import Navbar from "../../Assets/Navbar";
import BASE_URL from "../url";
const D0_ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("");

  const check = () => {
    if (name.length === 0) {
      setStatus("Name is empty");
      setColor("text-red-400");
    } else if (email.length === 0) {
      setStatus("Email is empty");
      setColor("text-red-400");
    } else if (purpose.length === 0) {
      setStatus("Purpose is empty");
      setColor("text-red-400");
    } else if (message.length === 0) {
      setStatus("Message is empty");
      setColor("text-red-400");
    } else {
      setStatus("");
      setColor("text-white");
      return true;
    }
    return false;
  };

  const add_Data = async () => {
    try {
      // Create a message object with the data
      const messageData = {
        name: name,
        email: email,
        purpose: purpose,
        message: message,
      };

      const response = await fetch(`${BASE_URL}/send_message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData), 
      });

      const data = await response.json();
      if (response.status === 200) {
        setStatus(data.message);
        setColor("text-green-400");
      } else {
        setStatus(data.error);
        setColor("text-red-400");
      }
    } catch (error) {
      setStatus("An error occurred while sending the message.");
      setColor("text-red-400");
    }
    setName("")
    setEmail("")
    setPurpose("")
    setMessage("")
  };

  return (
    <>
      <div>
        <div>
          <Navbar tab={`Contact Me`} />
        </div>
        <div className={`flex justify-center items-center h-screen`}>
          <div
            className={`mt-20 inline-block sm:w-6/12 w-10/12 p-3 sm:p-8 bg-gray-900 rounded-md  shadow-xl shadow-cyan-400 hover:shadow-2xl hover:shadow-cyan-400`}
          >
            <div
              className={`mb-4 flex justify-center text-white font-bold text-md sm:text-2xl`}
            >
              Message Me
            </div>
            <div className={`mt-2`}>
              <p className={`text-white font-bold px-2`}>Name</p>
              <input
                className={`text-white bg-black px-3 py-1 rounded-full mt-2 w-full`}
                onChange={(event) => setName(event.target.value)}
                value={name}
                placeholder={`Enter your name`}
              />
            </div>
            <div className={`mt-2`}>
              <p className={`text-white font-bold px-2`}>Email</p>
              <input
                className={`text-white bg-black px-3 py-1 rounded-full mt-2 w-full`}
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type={`email`}
                placeholder={`Your email please`}
              />
            </div>
            <div className={`mt-2`}>
              <p className={`text-white font-bold px-2`}>Purpose</p>
              <input
                className={`text-white bg-black px-3 py-1 rounded-full mt-2 w-full`}
                onChange={(event) => setPurpose(event.target.value)}
                value={purpose}
                placeholder={`What's the purpose`}
              />
            </div>
            <div className={`mt-2`}>
              <p className={`text-white font-bold px-2`}>Message</p>
              <input
                className={`text-white bg-black px-3 py-1 rounded-full mt-2 w-full`}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                placeholder={`Let's talk`}
              />
            </div>
            <div className={`mt-4 flex justify-center`}>
              <div
                className={`bg-blue-500 inline-block px-2 py-1 rounded-md text-white sm:text-xl text-md text-center hover:cursor-pointer hover:bg-blue-700`}
                onClick={add_Data}
              >
                Send
              </div>
            </div>
            <div className={`mt-4 flex justify-center text-white font-bold`}>
              Or
            </div>
            <div className={`mt-4 flex justify-center`}>
              <a href="mailto:kshitiz.sinha.025@gmail.com">
                <div
                  className={`bg-blue-500 inline-block px-2 py-1 rounded-md text-white sm:text-xl text-center hover:cursor-pointer hover:bg-blue-700`}
                >
                  Write an Email
                </div>
              </a>
            </div>
            <div className={`mt-4 flex justify-center ${color} font-bold`}>
              {status}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default D0_ContactMe;
