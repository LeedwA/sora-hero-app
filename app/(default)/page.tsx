"use client";

import Hero from "./_components/Hero";
import Videos from "./_components/Videos";
import { allVideoList, getVideos } from "@/data/soraVideo";
import { useEffect, useState, useRef } from "react";
import { Video } from "@/types/video";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { toast } from "sonner";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  //局部变量就用 useRef, let一旦赋值则不能改变， useState是响应式的
  const page = useRef(0);
  const totalPage = useRef(0);

  useEffect(() => {
    totalPage.current = Math.ceil(allVideoList.length / 10);
    setVideos(getVideos(page.current));
  }, []);

  function handlePre() {
    if (page.current <= 0) {
      toast.error("Already on the first page");
      return;
    }
    page.current -= 1;
    console.log("handlePre================== " + page.current);
    setVideos(getVideos(page.current));
  }

  function handleNext() {
    if (page.current >= totalPage.current - 1) {
      toast.error("Already on the last page");
      return;
    }
    page.current += 1;
    console.log("handleNext==================" + page.current);
    setVideos(getVideos(page.current));
  }

  function selectedPage(pageNumber: number) {
    page.current = pageNumber;
    setVideos(getVideos(pageNumber));
  }

  return (
    <div>
      <Hero />
      <Videos videos={videos} />
      <Pagination>
        <PaginationContent>

          <PaginationItem className="text-white">
            <PaginationPrevious onClick={handlePre} />
          </PaginationItem>

          <PaginationItem className="text-white">
            <PaginationLink  onClick={ () => selectedPage(0)}>1</PaginationLink>
          </PaginationItem>

          <PaginationItem className="text-white">
            <PaginationLink  onClick={ () => selectedPage(1)}>2</PaginationLink>
          </PaginationItem>

          <PaginationItem className="text-white">
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem className="text-white">
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
          
        </PaginationContent>
      </Pagination>
    </div>
  );
}
