import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={"/"}>
      <div className="relative logo flex items-center">
        <img src="Images/Group.png" alt="logo" className="w-[20px] h-[27px] " />
        <h2 className="text-orange-400 text-3xl font-normal">
          <span className="text-[#F77268]">i</span>blog
        </h2>
      </div>
    </Link>
  );
}
