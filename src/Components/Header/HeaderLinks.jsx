import React from "react";

const HeaderLinks = () => {
  return (
    <>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/"
        target="_blank"
        rel="noreferrer"
      >
        About
      </a>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/#products"
      >
        Product
      </a>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/#tokenomics"
      >
        Tokenomics
      </a>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/#roadmap"
      >
        Roadmap
      </a>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/"
      >
        Whitepaper
      </a>
      <a
        className="text-lightGrey hover:text-primary font-semibold text-[14px] sm:text-[16px] font-publicSans"
        href="https://botifi.ai/"
      >
        FAQ's
      </a>
    </>
  );
};

export default HeaderLinks;
