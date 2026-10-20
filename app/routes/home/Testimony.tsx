import { FaStar } from "react-icons/fa";

export default function Testimony() {
  const testimonys = [1, 2, 3];
  return (
    <div className="p-4 md:p-10 w-full md:flex">
      <div className="md:w-[25%] flex flex-col justify-around">
        <h3 className="text-primary font-bold">WHAT OUR CUSTOMERS SAYS</h3>
        <h4 className="text-2xl md:text-4xl leading-6 md:leading-16 font-bold my-4">
          REAL PEOPLE
          <br />
          READ EXPERIENCE
        </h4>
        <button className="p-3 box rounded-full md:m-2 hover:bg-primary  my-2 sm:my-0  duration-300">
          Browser all Customers Reviews
        </button>
      </div>

      {testimonys.map((testimony) => (
        <div
          className="md:w-[25%] md:mr-4 p-2 md:p-4 rounded-2xl box my-4 md:0"
          key={testimony}
        >
          <p>
            "Amazing service and genuine products. God my laptop delivered in 2
            days."
            <br />
            <span className="font-bold text-primary">Highly recommend</span>
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/neverthelesse.png"
                className="size-20 rounded-full bg-linear-30 from-secondary to-tertiary"
                alt="neverthelesse"
              />
              <div className="ml-2">
                <p className="font-bold ">Ajibola Neverthelesse</p>
                <p>Two Weeks Ago</p>
              </div>
            </div>
            <div className="flex">
              <FaStar size={25} className="text-primary" />
              <FaStar size={25} className="text-primary" />
              <FaStar size={25} className="text-primary" />
              <FaStar size={25} className="text-primary" />
              <FaStar size={25} className="text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
