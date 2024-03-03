
export default function Footer () {
  return (
    <section>
      <div className="w-screen flex-col bg-black px-6 py-20 text-white lg:flex lg:px-10 xl:px-24">

        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2024.{" "}
            <a href="https://www.baidu.com/" target="_blank" className="text-primary">
              SoraHero
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
