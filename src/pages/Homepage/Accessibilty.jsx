
export default function Accessibilty() {
  
    {/* Accessibilty and QR Code */}
    return (        
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

    )
}