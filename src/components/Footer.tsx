//Next
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1B2132]">
      <div className="text-white flex flex-row justify-around py-12">
        <Image
          src="/img/logo.png"
          alt="Real Estate Logo"
          width={300}
          height={80}
          className="w-42.5 h-12.5"
        />
        <div className="flex flex-row gap-20">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1>About</h1>
                <p className="border-[#0FCA98] border-2 w-5 inline-block"></p>
              </div>
              <div className="flex flex-col gap-2">
                <p>123 Ave Street</p>
                <p>Nortport, CT 104606</p>
                <p>Phone: 51 044 220933</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1>Contacts</h1>
                <p className="border-[#0FCA98] border-2 w-5 inline-block"></p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Blog & Articles</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <h1>Navigation</h1>
                <p className="border-[#0FCA98] border-2 w-5 inline-block"></p>
              </div>
              <div className="flex flex-col gap-2">
                <p>About</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Testimonials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#252C41] text-center text-white py-6">
        <p>
          © {new Date().getFullYear()} • Projeto desenvolvido por
          <a
            href="https://github.com/Felipe-de-Lima-Passarelli"
            target="_blank"
          >
            <span className="font-semibold ml-1">
              Felipe de Lima Passarelli
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
