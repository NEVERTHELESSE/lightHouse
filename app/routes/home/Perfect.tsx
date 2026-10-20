import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { perfects } from "~/data/perfect";

export default function Perfect() {
  return (
    <div className="p-2 my-5 lg:my-10 lg:p-10 shadow">
      <h4 className="text-secondary my-4 font-bold">SHOP BY CATEGORY</h4>
      <span className="text-2xl lg:text-5xl my-15 font-bold ">
        Find the Perfect Laptop
      </span>
      <div className="md:flex overflow-x-scroll perfect justify-between  w-full">
        {perfects.map(({ id, description, title, src }) => (
          <div
            key={id}
            className="rounded-2xl bg-white  my-4 mr-2 min-w-full sm:min-w-100 shadow-lg box  overflow-hidden"
          >
            <div className="w-full p-2  h-70 overflow-hidden bg-primary">
              <img src={`/laptop/${src}`} />
            </div>
            <div className="px-4 py-2 ">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-2xl">{title} Laptop</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
                <Link to={`/category/t=${title}`}>
                  <FaArrowRight className="border rounded-full p-2" size={35} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
