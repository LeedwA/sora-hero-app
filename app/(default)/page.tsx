import Hero from "./_components/Hero";
import { Metadata } from "next";
import Videos from "./_components/Videos";
import { allVideoList, randomVideo } from "@/data/soraVideo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}`,
    },
  };
}

export default function Home () {
  return (
    <div>
      <Hero />
      <Videos videos={allVideoList} />
    </div>
  );
}
