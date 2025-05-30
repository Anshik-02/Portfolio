"use client"
import ConnectPage from "@/components/connect-page";
import FormComponent from "@/components/form-component";
import SocialMediaComponent from "@/components/social-media-component";
export default function Connect() {
  return (
 <div className="flex justify-center flex-col text-[#7C2D12] items-center bg-[#FFEDD5]">
      <div className=" mt-12 flex-col text-start">
        <h1 className="text-5xl font-bold ml-4 md:ml-0">Let's Connect</h1>
        <p className="text-[#7C2D12]/45 text-lg mt-3 leading-relaxed ml-4 md:ml-0 max-w-[850px]">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about web development or anime.
        </p>
      </div>
      <div className=" grid md:flex gap-10 md:gap-30 mt-20">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-4xl font-semibold">Contact me</h3>
         <FormComponent/>
        </div>
        <div className="md:flex ml-7 flex-col justify-center items-center   mb-10">
          <h3 className="text-4xl font-semibold">Social Media</h3>
          <SocialMediaComponent/>
        </div>
      </div>
    </div>

  );
}
