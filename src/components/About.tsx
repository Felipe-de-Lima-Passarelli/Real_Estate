//Next
import Image from "next/image";

//Icons
import {
  IconTrophyFilled,
  IconSpeakerphone,
  IconUserShield,
  IconIdFilled,
} from "@tabler/icons-react";

const About = () => {
  return (
    <div className="py-15" id="about">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="border-2 inline-block w-10 border-[#0FCA98]"></p>
      </div>
      <div className="flex flex-row justify-center gap-30 mt-15">
        <div className="flex flex-col gap-5 w-[32%] justify-center">
          <p>
            Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem
            quibibendum auci elit cons equat ipsutis sem nibh id elit.
          </p>
          <Image
            src="/img/about.jpg"
            alt="About Image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col w-[33%] justify-between">
          <div className="flex flex-row gap-2 items-start">
            <IconTrophyFilled color="#0FCA98" size={50} className="shrink-0" />
            <div>
              <h1 className="font-semibold">Comfortable</h1>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ligula sit amet metus finibus elementum quis viverra ipsum.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <IconSpeakerphone color="#0FCA98" size={50} className="shrink-0" />
            <div>
              <h1 className="font-semibold">Comfortable</h1>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ligula sit amet metus finibus elementum quis viverra ipsum.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <IconUserShield color="#0FCA98" size={50} className="shrink-0" />
            <div>
              <h1 className="font-semibold">Comfortable</h1>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ligula sit amet metus finibus elementum quis viverra ipsum.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-start">
            <IconIdFilled color="#0FCA98" size={50} className="shrink-0" />
            <div>
              <h1 className="font-semibold">Comfortable</h1>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ligula sit amet metus finibus elementum quis viverra ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
