import { UpOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Footer(){
  const [isShowFooterTip, setIsShowFooterTip] = useState(false)

  return (

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

)
}