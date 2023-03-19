import { useEffect } from 'react';
import { fetchNews } from '../../../store'
import {useDispatch,useSelector} from 'react-redux'
import { VerticalAlignTopOutlined } from '@ant-design/icons'

export const NewsList = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch])

    if (news.loading) {
        return ""
    } else if (news.error || !news.news) {
        console.log("Error while loading data, error:", news.error)
        return ""
    }

    return (
        news.news.map((item, index) => {
            if (index == 0) {
                return <li key={item.key} className="relative h-9 w-[306px]  leading-[36px]">
                    <VerticalAlignTopOutlined className="font-bold align-middle text-orange-600 text-[18px]" />
                    <a className="pl-2 leading-[36px]" href="#">{item.news}</a>
                    {item.hot && <span className="bg-baiduHotBackground absolute text-center w-4 ml-1.5 mt-2 text-baiduTextWhite rounded-[3px] text-xs">热</span>}
                </li>
            } else {
                return <li key={item.key} className="pr-2 relative h-9 w-[306px] pl-[3px] leading-[36px]">
                    <span className="text-orange-600 text-[18px]">{index}</span>
                    <a className="pl-3 leading-[36px]" href="#">{item.news}</a>
                    {item.hot && <span className="bg-baiduHotBackground absolute text-center w-4 ml-1.5 mt-2.5 text-baiduTextWhite rounded-[3px] text-xs">热</span>}
                </li>
            }
        })
    )


}

