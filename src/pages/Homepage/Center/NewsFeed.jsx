import { RightOutlined, SyncOutlined } from "@ant-design/icons";
import { NewsList } from "./NewsList";

export default function NewsFeed() {

    return (
    <div className="h-10 w-[654px] relative w-15 max-h-32  items-center mt-[35px]">
        {/* News feed title */}
        <div className="h-6 flex flex-row text-sm leading-7/2">
            <a href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry">
                <span className="leading-5 inline-block font-semibold">百度热搜</span> <RightOutlined className='align-middle mb-1' />
            </a>
            <a id="refresh-button" href='#' className="hover:no-underline ml-auto mr-0.5 font-medium  text-[#9195a3]">
                <SyncOutlined className='align-middle mr-1 mb-1' />
                换一换
            </a>
        </div>
        {/* News feed */}
        <ul className="flex flex-col flex-wrap text-[16px] h-[120px] -z-50">
            <NewsList />
        </ul>
    </div>
    )
}