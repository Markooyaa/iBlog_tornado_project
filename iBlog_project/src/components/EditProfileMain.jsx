import UserGmail from "./UserEmail";
import UserName from "./UserName";
import MobileSaveButton from "./MobileSaveButton";

import { auth } from "../firebase";
import UserImage from "./UserImage";
export default function EditProfileMain() {
  const user = auth.currentUser;
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  const uid = user.uid;
  return (
    <div className="sm:w-[600px] w-full  my-0 sm:mt-[35px] mt-0  p-0">
<UserImage URL={photoURL}></UserImage>
      <div className="sm:grid hidden">
        <UserName name={displayName} />
        <UserGmail mail={email} />
        <MobileSaveButton />
      </div>

      <button className="float-right sm:flex hidden px-[30px] py-[10px] text-[15px] font-normal rounded-xl text-[#fff] bg-[#E86B02] hover:bg-orange-400 active:bg-orange-600">
        Xадгалах
      </button>
    </div>
  );
}
