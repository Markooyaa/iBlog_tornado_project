function ImgSectionFilledPost() {
  return (
    <>
      <p className="cover text-[16px] font-bold">Cover зураг</p>
      <div className="img-section h-[154px] w-full p-[2px] flex justify-center rounded-xl mt-[10px] mb-[20px] relative">
        <img
          src="Images/Pic.png"
          alt=""
          srcset=""
          className="object-cover w-full h-full z-[-1] rounded-xl sm:flex hidden "
        />
        <img
          src="Images/Pic2.png"
          alt=""
          className="sm:hidden flex object-cover w-full h-full z-[-1] rounded-xl "
        />

        <div className="flex items-center justify-center absolute gap-1 top-1/2">
          <a
            href=""
            className="text-white text-[14px] underline underline-offset-2">
            picture.01.png
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="p-[1px] rounded-full border border-white">
            <path
              d="M9 3L3 9M3 3L9 9"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default ImgSectionFilledPost;
