import { cardsData } from "../data/data";
import { Card } from "./Card"

export default function LikedPosts({categoryid}){
    const List = cardsData.filter(cardsData => cardsData.categoryid === categoryid);
    
    return( 
        <div className="flex flex-col items-start gap-[20px]">
            <div className="border-b-[1px] w-full">
                <div className="w-[400px] h-[40px] hidden sm:flex items-center justify-center gap-[10px] border-b-[2px] border-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
  <rect width="28" height="28" transform="translate(0.5)" fill="white"/>
  <mask id="path-1-inside-1_1_2542" fill="white">
    <path d="M24.02 5.83333C22.7833 4.59341 21.1439 3.83663 19.3981 3.6997C17.6522 3.56277 15.9149 4.05471 14.5 5.08667C13.0156 3.98258 11.168 3.48193 9.32924 3.68554C7.49049 3.88916 5.79718 4.78191 4.5903 6.18402C3.38342 7.58612 2.75262 9.39344 2.82493 11.242C2.89724 13.0906 3.66728 14.8431 4.98 16.1467L12.225 23.4033C12.8317 24.0004 13.6488 24.335 14.5 24.335C15.3512 24.335 16.1683 24.0004 16.775 23.4033L24.02 16.1467C25.3822 14.7761 26.1467 12.9223 26.1467 10.99C26.1467 9.05768 25.3822 7.20386 24.02 5.83333ZM22.375 14.5367L15.13 21.7817C15.0476 21.8649 14.9494 21.931 14.8413 21.9761C14.7332 22.0212 14.6172 22.0444 14.5 22.0444C14.3828 22.0444 14.2668 22.0212 14.1587 21.9761C14.0506 21.931 13.9524 21.8649 13.87 21.7817L6.625 14.5017C5.71005 13.5664 5.19771 12.31 5.19771 11.0017C5.19771 9.69329 5.71005 8.43693 6.625 7.50167C7.55734 6.58115 8.8148 6.065 10.125 6.065C11.4352 6.065 12.6926 6.58115 13.625 7.50167C13.7335 7.61102 13.8625 7.69781 14.0047 7.75704C14.1468 7.81627 14.2993 7.84676 14.4533 7.84676C14.6073 7.84676 14.7598 7.81627 14.902 7.75704C15.0442 7.69781 15.1732 7.61102 15.2817 7.50167C16.214 6.58115 17.4715 6.065 18.7817 6.065C20.0919 6.065 21.3493 6.58115 22.2817 7.50167C23.2092 8.42467 23.7383 9.67422 23.7558 10.9826C23.7732 12.291 23.2776 13.5543 22.375 14.5017V14.5367Z"/>
  </mask>
  <path d="M24.02 5.83333C22.7833 4.59341 21.1439 3.83663 19.3981 3.6997C17.6522 3.56277 15.9149 4.05471 14.5 5.08667C13.0156 3.98258 11.168 3.48193 9.32924 3.68554C7.49049 3.88916 5.79718 4.78191 4.5903 6.18402C3.38342 7.58612 2.75262 9.39344 2.82493 11.242C2.89724 13.0906 3.66728 14.8431 4.98 16.1467L12.225 23.4033C12.8317 24.0004 13.6488 24.335 14.5 24.335C15.3512 24.335 16.1683 24.0004 16.775 23.4033L24.02 16.1467C25.3822 14.7761 26.1467 12.9223 26.1467 10.99C26.1467 9.05768 25.3822 7.20386 24.02 5.83333ZM22.375 14.5367L15.13 21.7817C15.0476 21.8649 14.9494 21.931 14.8413 21.9761C14.7332 22.0212 14.6172 22.0444 14.5 22.0444C14.3828 22.0444 14.2668 22.0212 14.1587 21.9761C14.0506 21.931 13.9524 21.8649 13.87 21.7817L6.625 14.5017C5.71005 13.5664 5.19771 12.31 5.19771 11.0017C5.19771 9.69329 5.71005 8.43693 6.625 7.50167C7.55734 6.58115 8.8148 6.065 10.125 6.065C11.4352 6.065 12.6926 6.58115 13.625 7.50167C13.7335 7.61102 13.8625 7.69781 14.0047 7.75704C14.1468 7.81627 14.2993 7.84676 14.4533 7.84676C14.6073 7.84676 14.7598 7.81627 14.902 7.75704C15.0442 7.69781 15.1732 7.61102 15.2817 7.50167C16.214 6.58115 17.4715 6.065 18.7817 6.065C20.0919 6.065 21.3493 6.58115 22.2817 7.50167C23.2092 8.42467 23.7383 9.67422 23.7558 10.9826C23.7732 12.291 23.2776 13.5543 22.375 14.5017V14.5367Z" fill="#E86B02"/>
  <path d="M14.5 5.08667L7.33829 14.7153L14.4302 19.9902L21.5713 14.7819L14.5 5.08667ZM4.98 16.1467L13.4721 7.66821L13.4538 7.64993L13.4355 7.63173L4.98 16.1467ZM12.225 23.4033L3.73289 31.8818L3.77015 31.9191L3.80773 31.9561L12.225 23.4033ZM16.775 23.4033L25.1923 31.9561L25.2298 31.9191L25.2671 31.8818L16.775 23.4033ZM24.02 16.1467L32.5121 24.6251L32.5216 24.6156L32.5311 24.606L24.02 16.1467ZM22.375 14.5367L30.8603 23.0219L34.375 19.5072V14.5367H22.375ZM15.13 21.7817L6.64471 13.2964L6.62415 13.317L6.60368 13.3376L15.13 21.7817ZM13.87 21.7817L22.3963 13.3376L22.386 13.3272L22.3757 13.3169L13.87 21.7817ZM6.625 14.5017L-1.95294 22.8933L-1.91698 22.93L-1.88071 22.9665L6.625 14.5017ZM5.19771 11.0017H17.1977H5.19771ZM6.625 7.50167L-1.80592 -1.03764L-1.88007 -0.964427L-1.95294 -0.889942L6.625 7.50167ZM10.125 6.065V18.065V6.065ZM13.625 7.50167L22.145 -0.948754L22.1007 -0.993429L22.0559 -1.03764L13.625 7.50167ZM15.2817 7.50167L6.85075 -1.03764L6.80597 -0.993429L6.76166 -0.948754L15.2817 7.50167ZM18.7817 6.065V18.065V6.065ZM22.2817 7.50167L30.7462 -1.00429L30.7294 -1.021L30.7126 -1.03764L22.2817 7.50167ZM22.375 14.5017L13.6867 6.22441L10.375 9.70055V14.5017H22.375ZM32.5163 -2.6409C29.2573 -5.90841 24.9372 -7.90271 20.3364 -8.26356L18.4598 15.663C17.3507 15.576 16.3093 15.0952 15.5237 14.3076L32.5163 -2.6409ZM20.3364 -8.26356C15.7355 -8.62441 11.1573 -7.32802 7.42874 -4.60856L21.5713 14.7819C20.6724 15.4374 19.5688 15.7499 18.4598 15.663L20.3364 -8.26356ZM21.6617 -4.54194C17.7422 -7.45725 12.8636 -8.77919 8.00849 -8.24155L10.65 15.6126C9.47233 15.743 8.289 15.4224 7.33829 14.7153L21.6617 -4.54194ZM8.00849 -8.24155C3.15334 -7.70392 -1.31779 -5.34664 -4.50451 -1.64443L13.6851 14.0125C12.9121 14.9105 11.8276 15.4822 10.65 15.6126L8.00849 -8.24155ZM-4.50451 -1.64443C-7.69123 2.05779 -9.35683 6.82995 -9.1659 11.711L14.8158 10.773C14.8621 11.9569 14.4581 13.1145 13.6851 14.0125L-4.50451 -1.64443ZM-9.1659 11.711C-8.97497 16.5921 -6.9417 21.2196 -3.47553 24.6616L13.4355 7.63173C14.2763 8.46661 14.7694 9.58904 14.8158 10.773L-9.1659 11.711ZM-3.51211 24.6251L3.73289 31.8818L20.7171 14.9249L13.4721 7.66821L-3.51211 24.6251ZM3.80773 31.9561C6.65909 34.7623 10.4994 36.335 14.5 36.335V12.335C16.7982 12.335 19.0043 13.2385 20.6423 14.8506L3.80773 31.9561ZM14.5 36.335C18.5006 36.335 22.3409 34.7623 25.1923 31.9561L8.35773 14.8506C9.99571 13.2385 12.2018 12.335 14.5 12.335V36.335ZM25.2671 31.8818L32.5121 24.6251L15.5279 7.66822L8.28289 14.9249L25.2671 31.8818ZM32.5311 24.606C36.1279 20.9872 38.1467 16.0922 38.1467 10.99H14.1467C14.1467 9.75242 14.6364 8.56511 15.5088 7.68734L32.5311 24.606ZM38.1467 10.99C38.1467 5.88778 36.1279 0.992821 32.5311 -2.626L15.5088 14.2927C14.6364 13.4149 14.1467 12.2276 14.1467 10.99H38.1467ZM13.8897 6.05139L6.64471 13.2964L23.6153 30.2669L30.8603 23.0219L13.8897 6.05139ZM6.60368 13.3376C7.63706 12.2942 8.86695 11.4659 10.2222 10.9007L19.4604 33.0515C21.0319 32.3961 22.458 31.4357 23.6563 30.2257L6.60368 13.3376ZM10.2222 10.9007C11.5775 10.3355 13.0314 10.0444 14.5 10.0444V34.0444C16.2029 34.0444 17.8888 33.7069 19.4604 33.0515L10.2222 10.9007ZM14.5 10.0444C15.9686 10.0444 17.4225 10.3355 18.7778 10.9007L9.53964 33.0515C11.1112 33.7069 12.7971 34.0444 14.5 34.0444V10.0444ZM18.7778 10.9007C20.133 11.4659 21.3629 12.2942 22.3963 13.3376L5.34368 30.2257C6.54194 31.4357 7.96808 32.3961 9.53964 33.0515L18.7778 10.9007ZM22.3757 13.3169L15.1307 6.03686L-1.88071 22.9665L5.36429 30.2465L22.3757 13.3169ZM15.2029 6.11006C16.4817 7.41718 17.1977 9.17307 17.1977 11.0017H-6.80229C-6.80229 15.447 -5.06157 19.7156 -1.95294 22.8933L15.2029 6.11006ZM17.1977 11.0017C17.1977 12.8303 16.4817 14.5861 15.2029 15.8933L-1.95294 -0.889942C-5.06157 2.28771 -6.80229 6.55632 -6.80229 11.0017H17.1977ZM15.0559 16.041C13.7424 17.3378 11.9708 18.065 10.125 18.065V-5.935C5.65875 -5.935 1.3723 -4.17552 -1.80592 -1.03764L15.0559 16.041ZM10.125 18.065C8.27915 18.065 6.50761 17.3378 5.19408 16.041L22.0559 -1.03764C18.8777 -4.17552 14.5912 -5.935 10.125 -5.935V18.065ZM5.105 15.9521C6.329 17.1862 7.78524 18.1657 9.38974 18.8342L18.6196 -3.32008C19.9397 -2.77008 21.1379 -1.96413 22.145 -0.948754L5.105 15.9521ZM9.38974 18.8342C10.9942 19.5026 12.7152 19.8468 14.4533 19.8468V-4.15324C15.8834 -4.15324 17.2994 -3.87008 18.6196 -3.32008L9.38974 18.8342ZM14.4533 19.8468C16.1915 19.8468 17.9124 19.5026 19.5169 18.8342L10.2871 -3.32008C11.6072 -3.87008 13.0232 -4.15324 14.4533 -4.15324V19.8468ZM19.5169 18.8342C21.1214 18.1657 22.5777 17.1862 23.8017 15.9521L6.76166 -0.948754C7.76875 -1.96413 8.96693 -2.77008 10.2871 -3.32008L19.5169 18.8342ZM23.7126 16.041C22.3991 17.3378 20.6275 18.065 18.7817 18.065V-5.935C14.3154 -5.935 10.029 -4.17552 6.85075 -1.03764L23.7126 16.041ZM18.7817 18.065C16.9358 18.065 15.1643 17.3378 13.8507 16.041L30.7126 -1.03764C27.5344 -4.17551 23.2479 -5.935 18.7817 -5.935V18.065ZM13.8171 16.0076C12.5208 14.7176 11.7812 12.9713 11.7569 11.1426L35.7547 10.8226C35.6955 6.37718 33.8976 2.13172 30.7462 -1.00429L13.8171 16.0076ZM11.7569 11.1426C11.7325 9.31398 12.4252 7.54851 13.6867 6.22441L31.0633 22.7789C34.1299 19.56 35.814 15.2681 35.7547 10.8226L11.7569 11.1426ZM10.375 14.5017V14.5367H34.375V14.5017H10.375Z" fill="#E86B02" mask="url(#path-1-inside-1_1_2542)"/>
</svg>
                    <p className="text-[18px] font-bold">
                    Таалагдсан
                    </p>
                </div>
                <div className="sm:hidden flex font-bold px-[20px] py-[10px] gap-[10px] items-center h-[40px] border-b-[2px] border-orange-500">
                    Таалагдсан постууд
                </div>
            </div>
            <div className="flex gap-[8px] sm:gap-[22px] flex-wrap px-[20px] justify-center">
                {List &&
                    List.map((data, index)=>{
                        return(
                            <Card key={index}
                            id={data.id}
                            url={data.url}
                                    title={data.title}
                                    username={data.username}
                                    date={data.date}
                                    likes={data.likes}
                                    profile={data.profile} 
                                    category={data.category}
                                    categoryid={data.id} />
                        )
                    })
                    }
            </div>
        </div>
    )
}