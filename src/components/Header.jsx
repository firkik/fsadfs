import React, { useState } from "react";
import twitterImg from "../assets/twitter.png";
import telegramImg from "../assets/telegram.png";
import { SOCIALS } from "../utils/consts";

export default function Header() {
  const [isOnen, setOpen] = useState(false);
  return (
    <div>
      <header className="flex z-[2] flex-col sm:flex-row pt-4 sm:pt-0 absolute top-0 left-0 right-0 gap-4 sm:gap-[50px] items-center justify-center">
        <div className="flex items-center">
          <a
            href={SOCIALS.twitter}
            target="_blanck"
            className="transition hover:scale-110 focus:scale-110 active:scale-100"
          >
            <img className="w-[38px] md:w-[58px]" src={twitterImg} />
          </a>
          <a
            href={SOCIALS.telegram}
            target="_blanck"
            className="transition hover:scale-110 focus:scale-110 active:scale-100"
          >
            <img className="w-[50px] md:w-[70px]" src={telegramImg} />
          </a>
        </div>
        <nav className="flex gap-4 md:gap-[50px] items-center text-xl sm:text-2xl lg:text-4xl">
          <a
            className="py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]"
            href="#nft"
          >
            NFT
          </a>
          <a
            className="py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]"
            href={SOCIALS.buy}
            target="_blanck"
          >
            Buy Cookie
          </a>
          <h4
            className="py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]"
            id="productBtn"
            onClick={() => setOpen(!isOnen)}
          >
            Products
          </h4>
          <a
            className="py-2 sm:py-[25px] transition outline-none hover:text-[#FFFBA4] active:text-[#ffffff] focus:text-[#FFFBA4]"
            href={SOCIALS.contact}
            target="_blanck"
          >
            Contact
          </a>
        </nav>
      </header>
      <div className={`productMenuContainer ${isOnen ? "active": ""}`} id="productMenuContainer">
        <a href={SOCIALS.bot}>CookieNFT</a>
        <form action="about.html">
          <button>CookieBitten</button>
        </form>
      </div>
    </div>
  );
}
