

export default function Logo() {
    return (
    <div className="mt-auto min-h-[173px] max-h-[305px] flex items-end">
        <img className="focus-visible:outline-0 w-[270px] h-[129px] !important " src="/baidu-logo-new.png" alt="" useMap="#mp" />
        <map name="mp">
            <area shape="rect" className="focus-visible:outline-0" coords="0,0,270,129" href="https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pcs" target="_blank" alt="按图片搜索" />
        </map>
    </div>
    )
}