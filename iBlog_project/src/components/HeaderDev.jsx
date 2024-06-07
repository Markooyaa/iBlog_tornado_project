export default function Login_Create_header({text}){
    return (
        <header class="lg:border-b-[1px] max-[1024px]:flex max-[1024px]:items-center   h-[70px]">
        <div id="computer" class=" hidden lg:flex lg:logo  lg:h-[46px] lg:justify-between lg:mx-[50px] lg:items-center lg:my-[20px]">
                <div class="relative logo flex items-center">
                    <img src="../Group.png" alt="logo" class="w-[20px] h-[27px] "/>
                    <h2 class="text-orange-400 text-3xl font-normal"><span class="text-[#F77268]">i</span>blog</h2>
                </div>
                
                <div class="relative search">
                    <input type="text" class="border rounded-2xl pl-4 pr-12 py-2 w-[550px] h-[39px] focus:outline-none focus:border-blue-500" placeholder="Хайх"/>
                    <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                    </svg>
                
                  </div>
                  <div class="Buttons">
                    <button class="text-[#E86B02] border border-[#DCE3EA] rounded-lg pl-4 pr-4 py-[10px]  mr-[10px] pr-[30px] pl-[30px]" onclick="window.location.href='./create1.html'">
                        Бүртгүүлэх
                    </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                    <button class="text-white bg-[#E86B02] rounded-lg pl-4 pr-4 py-[10px] pr-[30px] pl-[30px]" onclick="window.location.href='./login_page.html'">
                        Нэвтрэх
                    </button>
                  </div>
            </div>
         
          <div class="pl-[20px] lg:hidden flex  w-[100%]">
            <svg id="backButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="absolute">
                <path d="M8.5002 12.8L14.2002 18.4C14.6002 18.8 15.2002 18.8 15.6002 18.4C16.0002 18 16.0002 17.4 15.6002 17L10.7002 12L15.6002 7.00005C16.0002 6.60005 16.0002 6.00005 15.6002 5.60005C15.4002 5.40005 15.2002 5.30005 14.9002 5.30005C14.6002 5.30005 14.4002 5.40005 14.2002 5.60005L8.5002 11.2C8.1002 11.7 8.1002 12.3 8.5002 12.8C8.5002 12.7 8.5002 12.7 8.5002 12.8Z" fill="#E86B02"/>
              </svg>
              <p class="m-auto font-bold">
                {text}
            </p>
          </div>
    </header>
    )
}