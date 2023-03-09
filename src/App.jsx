import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Baidu_Center from './Baidu_Center'
import { Fragment } from 'react'
import { FastBackwardFilled, UpOutlined } from '@ant-design/icons'
import { useEffect } from 'react'


function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isShowFooterTip, setIsShowFooterTip] = useState(false)

  return (
    <div className='mx-auto min-h-[600px] min-w-[1250px] max-h-screen'>
      <div className='mt-0 font-sans flex flex-col  h-screen '>
        {/* header */}
        <div className='relative flex flex-row text-13 h-[60px] z-50'>
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

        <div className="h-3/6 mb-[39px] z-10 ">
          <Baidu_Center />
        </div>

        {/* Accessibilty and QR Code */}
        <div className='hidden side-entry w-11 h-[88px] rounded-3xl bg-gray-50 shadow-sm fixed right-6 bottom-16 xl:block '>
          <div className='group w-[18px] h-[18px] items-center absolute aging-entry top-[15px] left-[12px] bg-contain bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA7VBMVEUAAAD////////s8v////+txP+qwv+4zf/w9f/2+P+hu//Q3f+yyP+4zf/Q3f////+kvv+90P+80f+2yv/S4P/T4P/M2//z9/+cuP/V4P9Whv////9Uhf9Sg/9Pgf9NgP/8/f9di/9Xh/9lkf5aif9qlP7z9//k7P/c5v+2y/94nv51nP6lv/+LrP6Ep/6BpP5gjf7v9P+wxv/U4f/M2/+sxP+vxv73+f/P3v/J2v+5zf+ivP+fuv9xmf+Ytv6Usv6Hqf58of5vl/7m7v/g6f+zyf6QsP75+//q8P/B0v/W4//C1P6+0P6qwv6ct/76fHZiAAAAGnRSTlMAGAaVR/Py45aC9Mfy2b8t9OPZ2ce/v4L0x/e74/EAAAIZSURBVDjLZVPXYuIwEDSmQ4BLv5O0ku3Yhwu2IZTQe0hy7f8/57QSoYR5sVea1c424wgzl324LRRuH7I507hEJluYucCFEOBGhWzmy7X5+N0WwIjTbrcdBsKulM0z96onGCGE2X6n+cTkj/CqJ480igzkNXp26E9JkABSbBz8i4Bn3EkH840mKHoxs49fZQzt2Kd03FQEzSB3WsejB9Jqf1CJQBM0wCurABWBoub0gkDENwyStTHA62pwSWDtklRQ4FLfjnaiPqVW60hAYeLKNHIREOZuKTL80H6XBFCwn4BAmDOyLiOQUIlOSEjaoS+Ju57NZuul73Fml4w6yAivSLBW3MGfcfBmIegmArg3alICdJHgy1jQt8Z/6CcC4DdGXhLIoiWRACpbLYbDYW80GnXp2GH8ShP+PUvEoHsAIFq9Xm8+kXlIwkkI9pm+05Tm3yWqu9EiB0pkwjWBx2i+tND1XqeZqpPU4VhUbq/ekR8CwTRVoRxf3ifTbeIwcONNsJZ2lxFVKDMv1KNvS2zXdrnD+COvR1PQpTZKNlKD3cLCOJNnivgVxkw169BunlKFaV9/B+LQbqOsByY4IVgDB59dl/cjR9TIJV1Lh7CGqUqH/DDPhhZYOPkdLz6m0X7GrzPHsSe6zJwzxvm+5NeNi8U5ABfn7mz7zHJFrZ6+BY6rd7m8kQtcAtwwXzq4n69/vZbP1+pn6/8fsrRmHUhmpYYAAAAASUVORK5CYII=)]'>
            <div className='hidden absolute -top-1 -left-[115px] w-24 h-8 group-hover:flex group-hover:justify-center items-center shadow-wholeBoxmd rounded-lg'>
              <span className>辅助模式</span>
            </div>
          </div>
          <div className='group qrlayer h-6 w-6 top-12 left-[10px] absolute'>
            <img className='group-hover:hidden' src='/qrcode-small-gray.png' />
            <img className=' hidden group-hover:block' src="/qrcode-small-blue.png" />
            <div className='hidden group-hover:block absolute -top-[62px] -left-[317px] w-[300px] h-28 text-center shadow-wholeBoxmd rounded-xl'>
              <div className='flex felx-row mt-4'>
                <div className=''>
                  <div className='text-xl text-left ml-5 mt-3'>百度APP扫码登录</div>
                  <div className='text-baiduFooter text-sm text-left ml-5 mt-1'>百度一下 生活更好</div>
                </div>
                <div className='ml-5'>
                  <img src='/qrcode.png' className='w-20 h-20' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='fixed bottom-0 left-0 right-0 h-[39px] flex justify-center bg-white text-right items-center text-baiduFooter z-50'>
          <a href='http://home.baidu.com' className='mx-2 flex-shrink-0 text-sm'>关于百度</a>
          <a href='http://ir.baidu.com' className='mx-2 flex-shrink-0 text-md hidden sm:block'>About Baidu</a>
          <a href='//www.baidu.com/duty' className='mx-2 flex-shrink-0 text-md hidden sm:block'>使用百度前必读</a>
          <a href='//help.baidu.com' className='mx-2 flex-shrink-0 text-md hidden sm:block'>帮助中心</a>
          <a href='https://e.baidu.com/?refer=1271' className='mx-2 flex-shrink-0 text-xs hidden md:block'>企业推广</a>
          <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001'
            className='mx-2 flex-shrink-0 text-xs hidden lg:block'>京公网安备11000002000001号</a>
          <a href='https://beian.miit.gov.cn/' className='mx-2 flex-shrink-0 text-xs hidden lg:block'>京ICP证030173号</a>
          <a href='https://www.baidu.com/licence/' className='mx-2 flex-shrink-0 text-xs hidden xl:block'>信息网络传播视听节目许可证 0110516 </a>
          <span className='mx-2 flex-shrink-0 text-xs hidden 2xl:block'>互联网宗教信息服务许可证编号：京（2022）0000043</span>
          <span className='mx-2 flex-shrink-0 text-xs hidden 3xl:block'>药品医疗器械网络信息服务备案（京）网药械信息备字（2021）第00159号</span>
          <span className='mx-2 flex-shrink-0 text-xs hidden 4xl:block'>医疗器械网络交易服务第三方平台备案凭证（京）网械平台备字（2020）第00002号</span>
          <span className='mx-2 flex-shrink-0 text-xs hidden 4xl:block'>©2023 Baidu</span>
          <div className='mx-2 flex-shrink-0 relative h-8 w-8' onMouseEnter={() => setIsShowFooterTip(true)} onMouseLeave={() => setIsShowFooterTip(false)}>
            <UpOutlined className='mb-3' />
            {isShowFooterTip && <div className='-ml-[500px] bg-white opacity-100 -mt-[155px] w-[560px] 
            px-3 py-3 absolute text-xs rounded-lg shadow-wholeBoxsm text-neutral-500 leading-5 z-50'>
              {/* <a href='//home.baidu.com' className='mx-2 flex-shrink-0 text-xs'>关于百度</a> */}
              <a href='http://ir.baidu.com' className='mx-2 flex-shrink-0 text-xs hidden sm:hidden'>About Baidu</a>
              <a href='//www.baidu.com/duty' className='mx-2 flex-shrink-0 text-xs hidden sm:hidden'>使用百度前必读</a>
              <a href='//help.baidu.com' className='mx-2 flex-shrink-0 text-xs hidden sm:hidden'>帮助中心</a>
              <a href='https://e.baidu.com/?refer=1271' className='mx-2 flex-shrink-0 text-xs hidden md:hidden'>企业推广</a>
              <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001'
                className='mx-2 flex-shrink-0 text-xs hidden lg:hidden'>京公网安备11000002000001号</a>
              <a href='https://beian.miit.gov.cn/' className='mx-2 flex-shrink-0 text-xs hidden lg:hidden'>京ICP证030173号</a>
              <a href='https://www.baidu.com/licence/' className='mx-2 flex-shrink-0 text-xs hidden xl:hidden'>信息网络传播视听节目许可证 0110516 </a>
              <span className='mx-2 flex-shrink-0 text-xs 2xl:hidden'>互联网宗教信息服务许可证编号：京（2022）0000043</span>
              <span className='mx-2 flex-shrink-0 text-xs 3xl:hidden'>药品医疗器械网络信息服务备案（京）网药械信息备字（2021）第00159号</span>
              <span className='mx-2 flex-shrink-0 text-xs 4xl:hidden'>医疗器械网络交易服务第三方平台备案凭证（京）网械平台备字（2020）第00002号</span>
              <span className='mx-2 flex-shrink-0 text-xs 4xl:hidden'>©2023 Baidu</span>
            </div>}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
