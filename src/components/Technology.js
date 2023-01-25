import React from "react";
import { Title } from "./Title";
import { FiUsers } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

export const Technology = ({ contactUs, skills, tools, langaugeSkills }) => {
  // console.log(contactUs, skills, tools, langaugeSkills);
  let data = contactUs.split(",");
  // console.log(data);

  return (
    <div className="right-part flex-35">
      <div className="logo-img">
        <img width={126} height={53} src="logoTG.png" alt="logo" />
      </div>
      {/* skills */}
      <div>
        <Title title={"Skills"} />
        <ul>
          {skills &&
            skills
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <li key={i} className="textDark">
                  {s}
                </li>
              ))}
        </ul>
      </div>
      {/* Tools */}
      <div>
        <Title title={"Tools"} />
        <ul>
          {tools &&
            tools
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <li key={i} className="textDark">
                  {s}
                </li>
              ))}
        </ul>
      </div>
      {/* language */}
      <div className="language-sec">
        <Title title={"Language Skills"} />
        <div className="language-list">
          {langaugeSkills &&
            langaugeSkills
              .split(",")
              .filter((x) => x.length >= 2)
              .map((s, i) => (
                <strong key={i} className="language">
                  {" "}
                  - {s}
                </strong>
              ))}
        </div>
      </div>
      {/* contact  */}
      {contactUs && (
        <div className="contact-sec">
          <Title title={"Contact Us"} />
          <div className="contact-details">
            <p>
              <strong>
                <FiUsers />
              </strong>
              {data[0]}
            </p>
            <p>
              <strong>
                <HiOutlineMail />
              </strong>
              {data[1]}
            </p>
            <p>
              <strong>
                <BsTelephone />
              </strong>
              {data[2]}
            </p>
            <p>
              <strong>
                <RiMapPinLine />
              </strong>
              {data.slice(3)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
