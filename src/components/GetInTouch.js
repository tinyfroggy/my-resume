import { useState } from "react"
import emailjs from "emailjs-com";

function GetInTouch() {

  const [formInfo , setFormInfo] = useState({name: "" , email: "" , textarea: ""})

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_adtgzei";
    const templateID = "template_21higey";
    const userID = "4xWPq8AZAzgjjSv__";

    emailjs
      .send(serviceID, templateID, {
        name: formInfo.name,
        email: formInfo.email,
        message: formInfo.textarea,
      }, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("The message was sent successfully.");
        setFormInfo({ name: "", email: "", textarea: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("The message failed to send.");
      });
  };


  return (
    <>
      {/* get in touch red */}
      <div className=" h-144 flex justify-center items-center bg-main " id="getInTouch" >

        {/* title and info green  */}
        <div className="w-1/3 p-5 h-96 flex flex-col justify-center" >
          <h1 className="text-6xl text-white mb-3 ">Get In Touch</h1>
          <p className="text-white text-md">Currently open to <strong className='highlight'>Freelance</strong> work or <strong className='highlight'>collaborations</strong>.</p>
        </div>
        {/* === title and info === */}

        {/* contact input orange */}
        <form onSubmit={handleSubmit} className="w-1/2 h-96 flex flex-col justify-center items-center">
          <input className="mt-5 w-2/3 text-lg p-2 bg-main text-white outline-none border-b-4" type="text" placeholder="Name" value={formInfo.name} onChange={(e) => setFormInfo({...formInfo , name: e.target.value})} />
          <input className="mt-5 w-2/3 text-lg p-2 bg-main text-white outline-none border-b-4" type="email" placeholder="Email" value={formInfo.email} onChange={(e) => setFormInfo({...formInfo , email: e.target.value})} />
          <textarea className="mt-5 w-2/3 text-lg p-2 bg-main text-white outline-none border-b-4 resize-none" type="text" placeholder="How Can I Help?" value={formInfo.textarea} onChange={(e) => setFormInfo({...formInfo , textarea: e.target.value})} />
          <button className="border-4 border-white text-white p-2 hover:bg-white hover:text-main mt-5">Submit</button>
        </form>
        {/* === contact input === */}

      </div>
      {/* === get in touch === */}
    </>
  )
}

export default GetInTouch
