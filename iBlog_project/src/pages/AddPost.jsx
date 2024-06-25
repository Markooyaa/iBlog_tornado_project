import Category from "../components/Category";
import ImgSection from "../components/ImgSection";
import CategoryInside from "../components/CategoryInside";
import Subtitle from "../components/ContentTitle";
import MainPart from "../components/MainPart";
import PostButton from "../components/MobilePostButton";
import MainPostButton from "../components/MainPostButton";
export default function AddPost() {
  return (
    <div className="content sm:w-3/4 h-full relative sm:pl-[155px]  flex-col flex items-center">
      <div className="categories sm: flex items-center sm:w-3/4 w-full sm:h-[40px] h-full border-b-2 border-slate-200 ">
        <CategoryInside />
      </div>
      <div className="sm:w-3/4 w-full  h-full sm:px-0 px-[5%] ">
        <Category />
        <div className="post my-[10px]">
          <ImgSection />
          <Subtitle />
          <MainPart />
          <PostButton />
          <MainPostButton />
        </div>
      </div>
    </div>
  );
}
