import UserGmail from "./UserEmail";
import UserName from "./UserName";
import MobileSaveButton from "./MobileSaveButton";
import UserImage from "./UserImage";
export default function EditProfileMain() {
  return (
    <div className="sm:w-[600px] w-full  my-0 sm:mt-[35px] mt-0  p-0">
      <UserImage />
      <div className="sm:grid hidden">
        <UserName />
        <UserGmail />
        <MobileSaveButton />
      </div>

      <button className="float-right sm:flex hidden px-[30px] py-[10px] text-[15px] font-normal rounded-xl text-[#fff] bg-[#E86B02] hover:bg-orange-400 active:bg-orange-600">
        Xадгалах
      </button>
    </div>
  );
}
