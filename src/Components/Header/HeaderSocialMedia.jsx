import React from "react";
import { BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
const HeaderSocialMedia = () => {
  return (
    <>
      <a
        href="https://t.me/BOTiFi_Ai"
        target="_blank"
        className="text-decoration-none"
        rel="noreferrer"
      >
        <BsTelegram className="w-[26px] text-lightGrey hover:text-primary duration-300 h-[26px]"></BsTelegram>
      </a>
      <a
        href="https://www.instagram.com/botifi_ai"
        target="_blank"
        className="text-decoration-none"
        rel="noreferrer"
      >
        <BsInstagram className="w-[26px] text-lightGrey hover:text-primary duration-300 h-[26px]"></BsInstagram>
      </a>
      <a
        href="https://twitter.com/BoTiFi_Ai"
        target="_blank"
        className="text-decoration-none"
        rel="noreferrer"
      >
        <BsTwitter className="w-[26px] text-lightGrey hover:text-primary duration-300 h-[26px]"></BsTwitter>
      </a>
    </>
  );
};

export default HeaderSocialMedia;
