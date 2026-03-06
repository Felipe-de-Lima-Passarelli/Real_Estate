"use client";

const Form = () => {
  return (
    <div className="text-center my-25 flex flex-col gap-10" id="contact">
      <h1 className="text-[#1B2132] text-4xl font-semibold">
        Ready for start your project?
      </h1>
      <p>
        Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
        quibibendum auci elit cons equat ipsutis sem nibh id elit.
      </p>
      <div>
        <form className="flex flex-col gap-4 w-[20%] mx-auto">
          <label>
            <input
              type="text"
              placeholder="Your name"
              className="border-2 border-gray-600 p-1 placeholder:text-gray-700"
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="Email Adress"
              className="border-2 border-gray-600 p-1 placeholder:text-gray-700"
            />
          </label>
          <label>
            <input
              type="number"
              placeholder="Phone Number"
              className="border-2 border-gray-600 p-1 placeholder:text-gray-700"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-gray-600 p-1 placeholder:text-gray-700"
            />
          </label>
          <button
            type="button"
            className="self-start bg-[#252C41] mx-auto text-white py-2 px-1 rounded-md cursor-pointer"
          >
            <a href="#header">Send my info</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
