
export default function Header() {

  return (
      <div className='relative flex flex-row text-13 h-[60px] z-50'>
        {/* header */}
      <div className='leading-[23px]'>
        <a className='mr-6 mt-[19px]  inline-block ml-6' href='#'>新闻</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>hao123</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>地图</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>贴吧</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>视频</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>图片</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>网盘</a>
        <a className="mr-6 mt-[19px]  inline-block" href='#'>更多</a>
      </div>

      {/* Settings menu */}
      <div className='ml-auto group flex flex-col items-center justify-center relative z-50'>
        <div>
          <a className="peer mt-[19px] leading-[23px]"href='#'>设置</a>
          {/* user settings */}
          <div className='hidden group-hover:flex hover:flex flex-col top-8 mt-5 items-center py-3 -ml-6 absolute rounded-2xl w-[90px] shadow-wholeBoxmd z-50'>
            <a href='#' role="menuitem" className='block text-center text-xs hover:bg-gray-100 hover:text-gray-900 hover:no-underline px-3 py-2' >搜索设置</a>
            <a href='#' role="menuitem" className='block text-center text-xs hover:bg-gray-100 hover:text-gray-900 hover:no-underline px-3 py-2' >关闭预测</a>
            <a href='#' role="menuitem" className='block text-center text-xs hover:bg-gray-100 hover:text-gray-900 hover:no-underline px-3 py-2' >隐私设置</a>
            <a href='#' role="menuitem" className='block text-center text-xs hover:bg-gray-100 hover:text-gray-900 hover:no-underline px-3 py-2' >关闭热搜</a>
            <a href='#' role="menuitem" className='block text-center text-xs hover:bg-gray-100 hover:text-gray-900 hover:no-underline px-3 py-2' >开启热搜</a>
          </div>
        </div>
      </div>
      <div className='inline-block mr-6'>
        <button className="w-12 leading-6 mt-[18px] ml-8 bg-blue-600 text-center rounded-md text-white" href='#'  >登录</button>
      </div>
    </div>

)
}