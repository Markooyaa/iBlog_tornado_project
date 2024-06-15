function Footer() {
  return (
    <div className="w-full h-[170px] border-t-2 mt-10 border-slate-300 p-y-[25px] p-x-[65px]  py-[30px] px-[70px] sm:flex hidden justify-center box-border">
      <div className="content w-[600px] flex  justify-between ">
        <div className="info flex-row">
          <div className="h-8 flex items-center">
            <img src="Images/Logo.jpg" className="h-6 w-6 " alt=""/>
              <h2 className="font-semibold text-orange-400 text-[24px] pt-">
                iblog
              </h2>
            
          </div>
          <p className="text-[10px]">Write, Read, Enjoy</p>
        </div>
        <div className="quick-link">
          <div>
            <h2 className="font-semibold mb-1 mt-[-10px]">Тусламж</h2>
            <div className="link-list">
              <div>
                <a href="">Хэрэглэх заавар</a>
              </div>
              <div>
                <a href="">Санал хүсэлт</a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="category ">
          <div>
            <h3 className="font-semibold mb-1 mt-[-10px]">
              Бидэнтэй холбогдох
            </h3>
          </div>
          <div className="contact">
            <div className="contact-items">
              <div className="email flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none">
                  <g clipPath="url(#clip0_897_1622)">
                    <path
                      d="M2.875 3H12.875C13.5625 3 14.125 3.5625 14.125 4.25V11.75C14.125 12.4375 13.5625 13 12.875 13H2.875C2.1875 13 1.625 12.4375 1.625 11.75V4.25C1.625 3.5625 2.1875 3 2.875 3Z"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.125 4.25L7.875 8.625L1.625 4.25"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_897_1622">
                      <rect
                    width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.375 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <a href="">info@jstemplate.net</a>
              </div>
              <div className="phone flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none">
                  <g clipPath="url(#clip0_897_1627)">
                    <path
                      d="M14.1249 10.5751V12.4501C14.1256 12.6241 14.0899 12.7964 14.0202 12.9559C13.9505 13.1154 13.8482 13.2586 13.7199 13.3762C13.5917 13.4939 13.4403 13.5835 13.2754 13.6393C13.1105 13.695 12.9358 13.7157 12.7624 13.7001C10.8392 13.4911 8.99177 12.8339 7.36865 11.7813C5.85854 10.8217 4.57823 9.54142 3.61865 8.03131C2.56238 6.40081 1.90505 4.54443 1.6999 2.61256C1.68428 2.43973 1.70482 2.26554 1.76021 2.10108C1.8156 1.93662 1.90463 1.78549 2.02163 1.65732C2.13862 1.52916 2.28103 1.42675 2.43977 1.35664C2.59851 1.28652 2.77011 1.25022 2.94365 1.25006H4.81865C5.12196 1.24708 5.41602 1.35448 5.646 1.55227C5.87598 1.75005 6.0262 2.02471 6.06865 2.32506C6.14779 2.9251 6.29455 3.51426 6.50615 4.08131C6.59024 4.30501 6.60844 4.54813 6.55859 4.78186C6.50874 5.01559 6.39294 5.23013 6.2249 5.40006L5.43115 6.19381C6.32087 7.75853 7.61643 9.05409 9.18115 9.94381L9.9749 9.15006C10.1448 8.98202 10.3594 8.86622 10.5931 8.81637C10.8268 8.76652 11.0699 8.78472 11.2936 8.86881C11.8607 9.0804 12.4499 9.22717 13.0499 9.30631C13.3535 9.34914 13.6308 9.50206 13.829 9.73599C14.0272 9.96992 14.1325 10.2685 14.1249 10.5751Z"
                      stroke="#E86B02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_897_1627">
                      <rect
                    width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <a href="">+97699112344</a>
              </div>
            </div>
          </div>
        </div>
        <div className="outside hidden h-full w-full top-0 bg-slate-900 bg-opacity-50">
            <div className="w-[306px] bg-white rounded-3xl fixed top-[30%] left-[570px]" >
                <div className="dialog-container p-[24px] bg-white rounded-3xl">
                    <div className="title flex-row items-center text-center "><h1 className="text-[20px] font-bold">Weekly Newsletter</h1>
                    <div className="subtitle flex justify-center text-[15px]">get blog articles and offers via email</div></div>
    <div className="typespace w-full flex items-center h-[40px] rounded-full bg-white mt-5">
                    <input type="email" placeholder="Your Email" className="h-[40px] flex grow  border-none rounded-full pl-4"/>
                    <svg className="w-[15px] h-[15px] mr-4" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="envelope">
                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="20" d="M27.878,115.042c5.583-4.59,12.742-7.335,20.532-7.335H463.59c7.79,0,14.95,2.745,20.532,7.346"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="20" d="M496,140.117v231.766c0,17.893-14.506,32.41-32.41,32.41H48.41c-17.9,0-32.41-14.511-32.41-32.41V140.117
                        c0-10.114,4.625-19.131,11.878-25.075l215.499,172.878c7.375,5.917,17.871,5.917,25.246,0l215.499-172.867
                        C491.375,120.986,496,130.003,496,140.117z"></path><line x1="195.769" x2="27.878" y1="249.727" y2="396.958" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="20"></line><line x1="316.359" x2="484.25" y1="249.727" y2="396.958" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="20"></line></svg>
                    </div>
                    <button id="subscribeBtn" className="w-full h-[40px] mt-[10px] bg-blue-600 rounded-full text-white">Subscribe</button>
                </div>
            </div>
        </div> 
      </div>
    </div>
  );
}

export default Footer;