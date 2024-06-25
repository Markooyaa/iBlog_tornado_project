// import Images from "../../public/images/Index.js";

export default function Note() {
  return (
    <div class="note sm:w-[265px] w-[215px] sm: flex-col absolute sm:top-[40%] top-[65%] sm:left-[50%] left-1/4 z-[-999] sm: h-[142px] sm: flex sm: items-center ">
      <div class="image flex justify-center mb-[13px] sm: size-[75px]">
        <img width="145px" src={"images/Note.png"} />
      </div>
      <div class="text text-center mt-[12px] font-normal text-[16px]">
        Одоогоор бичвэр оруулаагүй байна!
      </div>
    </div>
  );
}
