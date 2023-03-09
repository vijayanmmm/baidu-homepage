import {VerticalAlignTopOutlined,RightOutlined,SyncOutlined} from '@ant-design/icons'

function Baidu_Center() {
    const items = [{"key":1,"news":"习近平同卢卡申科举行会谈 ","hot":false}, 
                {"key":2,"news":"委员建议隔周三休 专家:很难行得通热","hot":true},
                {"key":3,"news":"月将有3次冷空气过程热","hot":false},
                {"key":4,"news":"中央党校建校90周年","hot":true},
                {"key":5,"news":"大厂裸辞卖盒饭女生：不会再去上班","hot":true},
                {"key":6,"news":"女子KTV遭陌生男子袭胸 警方回应","hot":false}]

    return (
        <div className='flex flex-col items-center h-2/5'>
            {/* main image  bottom-[15px] mb-[16px]*/}
            <div className="mt-auto min-h-[173px] max-h-[305px] flex items-end">
                <img className="focus-visible:outline-0 w-[270px] h-[129px] !important " src="/baidu-logo-new.png" alt="" useMap="#mp" />
                <map name="mp">
                    <area shape="rect" className="focus-visible:outline-0" coords="0,0,270,129" href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pcs" target="_blank" alt="按图片搜索" />
                </map>
            </div>
           
            {/* Search bar */}
            <div className="w-[657px] h-[43.2px] mb-4 mt-[15px] items-center relative">
                <input type="text" className="pr-[87px] pl-4 border-2 max-w-[549px] align-middle border-gray-300 border-r-0 h-full w-[549px] rounded-l-xl hover:border-gray-400 focus-visible:border-blue-500 " />                
                <button id="camera" className="right-32 top-3 h-5 w-6 object-none bg-[0px_-50px] absolute bg-[url('/extra-icons.png')]" alt="按图片搜索" > 
                <span className='camera-hover:opacity-100 opacity-0'>按图片搜索</span>
                </button>
                <button id="search" className="relative text-center text-17 h-11 text-baiduTextWhite align-middle bg-baiduBackgroud  w-[108px] rounded-r-xl hover:bg-blue-700">
                    百度一下
                </button>             
            </div>
            
            <div className="h-10 w-[654px] relative w-15 max-h-32  items-center mt-[35px]">
                {/* News feed title */}
                <div className="h-6 flex flex-row text-sm leading-7/2">
                    <a href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry">
                        <span className="leading-5 inline-block font-semibold">百度热搜</span> <RightOutlined className='align-middle mb-1'/>
                    </a>
                    <a id="refresh-button"  href='#' className="hover:no-underline ml-auto mr-0.5 font-medium  text-[#9195a3]">
                        <SyncOutlined  className='align-middle mr-1 mb-1'/>
                        换一换
                    </a>
                </div>
                {/* News feed */}
                <ul className="flex flex-col flex-wrap text-[16px] h-[120px] -z-50">
                    {items.map((item, index) => {
                        if (index == 0){
                            return <li key={item.key} className="relative h-9 w-[306px]  leading-[36px]">
                            <VerticalAlignTopOutlined  className="font-bold align-middle text-orange-600 text-[18px]" />
                            <a className="pl-2 leading-[36px]" href="#">{item.news}</a>
                            {item.hot && <span className="bg-baiduHotBackground absolute text-center w-4 ml-1.5 mt-2 text-baiduTextWhite rounded-[3px] text-xs">热</span>}
                            </li>
                            }else{  
                            return <li key={item.key} className="pr-2 relative h-9 w-[306px] pl-[3px] leading-[36px]">
                            <span className="text-orange-600 text-[18px]">{index}</span>
                            <a className="pl-3 leading-[36px]" href="#">{item.news}</a>
                            {item.hot && <span className="bg-baiduHotBackground absolute text-center w-4 ml-1.5 mt-2.5 text-baiduTextWhite rounded-[3px] text-xs">热</span>}
                            </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Baidu_Center