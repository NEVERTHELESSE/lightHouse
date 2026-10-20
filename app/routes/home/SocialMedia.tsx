import { FaArrowRight } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex flex-col p-2 items-center ">
      <div className="md:flex my-10 w-full items-center justify-around">
        <div className="h-100 flex items-center justify-center w-full md:w-150 bg-primary rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/video/video1.mp4"
            controls
            className="h-full w-full object-cover"
          ></video>
        </div>
        <div className="h-100 flex items-center justify-center w-full md:w-150 my-2 bg-primary rounded-2xl overflow-hidden shadow-lg">
          <video
            src="/video/video2.mp4"
            controls
            className="h-full w-full object-cover"
          ></video>
        </div>
      </div>
      <button className="rounded-2xl w-max px-8 p-4 border box flex">
        Browse All Videos <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
}
