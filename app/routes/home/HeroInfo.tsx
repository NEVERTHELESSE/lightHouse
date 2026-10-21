import { BiUserCircle } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function HeroInfo() {
  const style =
    "flex items-center bg-linear-30 from-primary to-secondary shadow-white text-white md:py-3 px-2 md:px-6 rounded-lg ";
  return (
    <div className="flex border-t border-t-soft py-3 lg:p-0 mt-35 lg:mt-8 w-full lg:w-[60%]  justify-between">
      <div className={style}>
        <FaCarSide className="lg:text-3xl mr-4" />
        <div>
          <h4 className="font-bold">Fast Shippings</h4>
          <p>Across Nigeria</p>
        </div>
      </div>
      <div className={style}>
        <MdPayment className="lg:text-5xl mr-4  p-2 rounded-full" />
        <div>
          <h4 className="font-bold">Secure Checkout</h4>
          <p>Protected Payment</p>
        </div>
      </div>
      <div className={style}>
        <VscWorkspaceTrusted className="text-3xl mr-4" />
        <div>
          <h4 className="font-bold">Trusted Gadget</h4>
          <p>Quality Checked</p>
        </div>
      </div>
    </div>
  );
}
