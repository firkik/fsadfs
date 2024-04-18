import cookieImg from "../assets/cookie-book.png";
import { SOCIALS } from "../utils/consts";

export default function Collection() {
  return (
    <section id="nft" className="relative">
      <div className="grid container mx-auto items-center gap-[100px] pt-[100px] mb-[200px]">
        <div className="relative z-[1]">
          <h1 className="font-medium text-[40px] sm:text-[66px] xl:text-[96px] mb-7">
            NFT Collection
          </h1>
          <p className="text-[28px] xl:text-[48px] text-[#E0E0E0] max-w-[1115px] mb-[88px]">
            We don`t like the idea of buying NFT as just pictures. Our NFTs are
            designed to join the private chat of NFT holders. This gives great
            potential to the growth of NFT. You can join the club thanks to the{" "}
            <a
              href={SOCIALS.bot}
              target="_blanck"
              className="transition hover:text-[#000000] active:text-[#ffffff] focus:text-[#000000]"
            >
              bot.
            </a>
          </p>
          <a
            href={SOCIALS.getGems}
            target="_blanck"
            className="px-[70px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] sm:text-[48px]"
          >
            Get Gems
          </a>
        </div>
      </div>

      <img
        className="absolute w-[336px] sm:w-[436px] lg:w-[736px] right-5 bottom-[20%] md:bottom-1/2 translate-y-1/2"
        src={cookieImg}
      />
    </section>
  );
}
