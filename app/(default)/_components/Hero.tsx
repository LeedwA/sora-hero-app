import Input from "./Input";
import Producthunt from "./Producthunt";

export default function Hero() {
  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
      <div className="relative isolate overflow-hidden bg-black px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-white sm:text-6xl">
          AI Video Generator
        </h1>

        {/* <Producthunt /> */}

        <Input />
        <div className="text-white text-xl mx-auto max-w-md gap-x-4 mt-8">
         Sora text-to-video API is not available
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
