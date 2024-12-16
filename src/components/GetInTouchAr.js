import { useState } from "react";
import emailjs from "emailjs-com";

function GetInTouchAr() {
  const [formInfo, setFormInfo] = useState({ name: "", email: "", textarea: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_adtgzei";
    const templateID = "template_21higey";
    const userID = "4xWPq8AZAzgjjSv__";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formInfo.name,
          email: formInfo.email,
          message: formInfo.textarea,
        },
        userID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("تم إرسال الرسالة بنجاح.");
        setFormInfo({ name: "", email: "", textarea: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("فشل في إرسال الرسالة.");
      });
  };

  return (
    <>
      {/* تواصل معي */}
      <div className="h-144 flex justify-center items-center bg-main" id="getInTouch">

        {/* العنوان والمعلومات */}
        <div className="w-1/3 p-5 h-96 flex flex-col justify-center">
          <h1 className="lg:text-6xl sm:text-xl text-white mb-3">تواصل معي</h1>
          <p className="text-white lg:text-md sm:text-sm">
            متاح حاليًا لأعمال <strong className="highlight">الحرة</strong> أو <strong className="highlight">التعاون</strong>.
          </p>
        </div>
        {/* === العنوان والمعلومات === */}

        {/* نموذج الإدخال */}
        <form onSubmit={handleSubmit} className="w-1/2 h-96 flex flex-col justify-center items-center">
          <input
            className="mt-5 w-2/3 lg:text-lg sm:text-sm p-2 bg-main text-white outline-none border-b-4"
            type="text"
            placeholder="الاسم"
            value={formInfo.name}
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />
          <input
            className="mt-5 w-2/3 text-lg p-2 bg-main text-white outline-none border-b-4"
            type="email"
            placeholder="البريد الإلكتروني"
            value={formInfo.email}
            onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })}
          />
          <textarea
            className="mt-5 w-2/3 text-lg p-2 bg-main text-white outline-none border-b-4 resize-none"
            type="text"
            placeholder="كيف يمكنني مساعدتك؟"
            value={formInfo.textarea}
            onChange={(e) => setFormInfo({ ...formInfo, textarea: e.target.value })}
          />
          <button className="border-4 border-white text-white p-2 hover:bg-white hover:text-main mt-5">
            إرسال
          </button>
        </form>
        {/* === نموذج الإدخال === */}

      </div>
      {/* === تواصل معي === */}
    </>
  );
}

export default GetInTouchAr;
