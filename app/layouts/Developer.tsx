import { Link } from "react-router";

export function Developer() {
  return (
    <div className="box  flex p-4 w-full justify-between">
      <p>
        Developed by{" "}
        <Link
          to="https://neverthelesse.name.ng"
          className=" text-primary font-bold"
        >
          Neverthelesse
        </Link>{" "}
      </p>
      <Link
        to="https://wa.me/2349051602536"
        className=" text-primary font-bold"
      >
        +234 9051 602 536
      </Link>{" "}
      <Link
        to="mailto:neverthelesse21@gmail.com"
        className=" text-primary font-bold"
      >
        neverthelesse21@gmail.com
      </Link>{" "}
      <Link
        to="https://maps.app.goo.gl/Qd1s6XAEJJLmMT329"
        className=" text-primary font-bold"
      >
        Nigeria
      </Link>{" "}
    </div>
  );
}
