import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Image
          src={logo}
          alt="logo"
          width={112}
          height={0}
          className="h-auto"
        />
        <button type="button" className="black_btn">
          <Link href="https://github.com/omunite215" target="_blank">
            GitHub
          </Link>
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4.0</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lenghty articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
