
export default function SearchBar() {
        {/* Search bar */}
        return (
        <div className="w-[657px] h-[43.2px] mb-4 mt-[15px] items-center relative">
        <input type="text" className="pr-[87px] pl-4 border-2 max-w-[549px] align-middle border-gray-300 border-r-0 h-full w-[549px] rounded-l-xl hover:border-gray-400 focus-visible:border-blue-500 " />                
        <button id="camera" className="right-32 top-3 h-5 w-6 object-none bg-[0px_-50px] absolute bg-[url('/extra-icons.png')]" alt="按图片搜索" > 
        <span className='camera-hover:opacity-100 opacity-0'>按图片搜索</span>
        </button>
        <button id="search" className="relative text-center text-17 h-11 text-baiduTextWhite align-middle bg-baiduBackgroud  w-[108px] rounded-r-xl hover:bg-blue-700">
            百度一下
        </button>             
    </div>
    )
}