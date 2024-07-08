import { useRef, useState } from "react";
import Subtitle from "./ContentTitle";
import MainPart from "./MainPart";
import MainPostButton from "./MainPostButton";
import MobilePostButton from "./MobilePostButton";

export default function Img_comment() {
  

 

  //------------------------------------------
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = (file) => {
    var myHeaders = new Headers();
    const token = "adhgsdaksdhk938742937423";
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        const profileurl = JSON.parse(result);
        setImage(profileurl.img_url);
      })
      .catch((error) => console.log("error", error));
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };


  return (
    <div>
      <div className="img-section h-[177px] w-full p-[2px] bg-[#F5F7F9] flex justify-center rounded-xl mt-[10px] mb-[20px]">
      <div className="w-full flex flex-col items-center justify-center">
     
       
      <div className="h-[177px] w-full">
      
        <div onClick={handleClick} className="cursor-pointer w-full h-full  justify-center flex items-center">
          {image ? (
           <div className="relative w-full h-[177px]">
             <img src={URL.createObjectURL(image)} alt="upload image" className="absolute inset-0 object-cover h-full w-full rounded-xl shadow-md" />
           <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
           {image ? image.name : null}
           </p>
         
      
       
           </div>
          ) : (
            <div className="flex place-items-center flex-col">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M19.5 10.5C19.2348 10.5 18.9804 10.6054 18.7929 10.7929C18.6054 10.9804 18.5 11.2348 18.5 11.5V14.88L17.02 13.4C16.4974 12.8815 15.7911 12.5906 15.055 12.5906C14.3189 12.5906 13.6126 12.8815 13.09 13.4L12.39 14.11L9.91 11.62C9.38742 11.1015 8.68113 10.8106 7.945 10.8106C7.20887 10.8106 6.50258 11.1015 5.98 11.62L4.5 13.11V7.5C4.5 7.23478 4.60536 6.98043 4.79289 6.79289C4.98043 6.60536 5.23478 6.5 5.5 6.5H13.5C13.7652 6.5 14.0196 6.39464 14.2071 6.20711C14.3946 6.01957 14.5 5.76522 14.5 5.5C14.5 5.23478 14.3946 4.98043 14.2071 4.79289C14.0196 4.60536 13.7652 4.5 13.5 4.5H5.5C4.70435 4.5 3.94129 4.81607 3.37868 5.37868C2.81607 5.94129 2.5 6.70435 2.5 7.5V19.72C2.50264 20.4565 2.79637 21.1621 3.31715 21.6828C3.83794 22.2036 4.54351 22.4974 5.28 22.5H17.72C17.991 22.4978 18.2603 22.4574 18.52 22.38C19.0974 22.218 19.6058 21.8711 19.9671 21.3924C20.3283 20.9137 20.5226 20.3297 20.52 19.73V11.5C20.52 11.367 20.4935 11.2353 20.442 11.1126C20.3905 10.99 20.3151 10.8789 20.2201 10.7857C20.1251 10.6926 20.0125 10.6194 19.8888 10.5703C19.7652 10.5212 19.633 10.4973 19.5 10.5ZM5.5 20.5C5.23478 20.5 4.98043 20.3946 4.79289 20.2071C4.60536 20.0196 4.5 19.7652 4.5 19.5V15.93L7.39 13.04C7.53615 12.8947 7.73389 12.8131 7.94 12.8131C8.14611 12.8131 8.34385 12.8947 8.49 13.04L15.96 20.5H5.5ZM18.5 19.5C18.4936 19.6936 18.431 19.8812 18.32 20.04L13.8 15.5L14.51 14.8C14.5817 14.7268 14.6673 14.6687 14.7617 14.629C14.8561 14.5893 14.9576 14.5689 15.06 14.5689C15.1624 14.5689 15.2639 14.5893 15.3583 14.629C15.4527 14.6687 15.5383 14.7268 15.61 14.8L18.5 17.71V19.5ZM21.5 4.5H20.5V3.5C20.5 3.23478 20.3946 2.98043 20.2071 2.79289C20.0196 2.60536 19.7652 2.5 19.5 2.5C19.2348 2.5 18.9804 2.60536 18.7929 2.79289C18.6054 2.98043 18.5 3.23478 18.5 3.5V4.5H17.5C17.2348 4.5 16.9804 4.60536 16.7929 4.79289C16.6054 4.98043 16.5 5.23478 16.5 5.5C16.5 5.76522 16.6054 6.01957 16.7929 6.20711C16.9804 6.39464 17.2348 6.5 17.5 6.5H18.5V7.5C18.5 7.76522 18.6054 8.01957 18.7929 8.20711C18.9804 8.39464 19.2348 8.5 19.5 8.5C19.7652 8.5 20.0196 8.39464 20.2071 8.20711C20.3946 8.01957 20.5 7.76522 20.5 7.5V6.5H21.5C21.7652 6.5 22.0196 6.39464 22.2071 6.20711C22.3946 6.01957 22.5 5.76522 22.5 5.5C22.5 5.23478 22.3946 4.98043 22.2071 4.79289C22.0196 4.60536 21.7652 4.5 21.5 4.5Z" fill="#546371"/>
</svg>
<p>Зураг оруулах</p>
            </div>
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
           className="hidden"
          />
        </div>

        
      </div>
   
      </div>
    </div>
    <Subtitle />
          <MainPart />
          <MainPostButton tap={handleUploadButtonClick} />
          <MobilePostButton tap={handleUploadButtonClick}/>
  
    </div>
  )
}
