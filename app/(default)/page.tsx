"use client"

import Hero from "./_components/Hero";
import Videos from "./_components/Videos";
import { getVideos } from "@/data/soraVideo";
import { useEffect, useState, useRef } from "react";
import { Video } from "@/types/video";


export default function Home () {

  const [showPreButton, setShowPreButton] = useState(false)
  const [showNextButton, setShowNextButton] = useState(false)
  const [videos, setVideos] = useState<Video[]>([])
  
  //局部变量就用 useRef, let一旦赋值则不能改变， useState是响应式的 
  const page = useRef(0)

  useEffect(() => {
   setShowPreButton(false)
   setShowNextButton(true)
   setVideos(getVideos(page.current))
  }, [])
  


  function handlePre(){
    if(page.current===0){
      setShowPreButton(false)
    }
    setShowNextButton(true)
    if(page.current>0){
      page.current -=1
    }
    console.log("handlePre================== " + page.current)
    setVideos(getVideos(page.current))
  }

  function handleNext(){
    setShowPreButton(true)
    page.current +=1
    console.log("handleNext==================" + page.current)
    let data = getVideos(page.current)
    if(data.length<10){
      //小于10 ，代表没有下一页数据了
      setShowNextButton(false) 
    }
    setVideos(getVideos(page.current))
  }

  return (
    <div>
      <Hero />
      <Videos videos={videos} />
      <div className="flex flex-row justify-center">

      {
        showPreButton 
        &&
        (<button className="text-white font-bold " onClick={handlePre}>
         Pre
        </button>)
      }
      {
        showNextButton 
        &&
        (<button className="text-white font-bold m-20" onClick={handleNext}>
         Next
        </button>)
      }

      </div>

    </div>
  );
}
