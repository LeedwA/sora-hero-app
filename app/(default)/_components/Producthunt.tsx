import Image from "next/image";

export default function Producthunt() {
  return (
    <div className="max-w-6xl mx-auto text-center flex items-center justify-center mt-4">
      <a
        href="https://www.producthunt.com/"
        target="_blank"
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440789&theme=light"
          alt="Sora&#0032;AI&#0032;Video&#0032;Generator - OpenSourced&#0032;web&#0032;template&#0032;for&#0032;Sora&#0032;AI&#0032;Video&#0032;generating | Product Hunt"
          width="250"
          height="54"
        />
      </a>
    </div>
  );
}
