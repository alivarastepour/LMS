import { Wrapper } from "./ClassSettings.styles";

const ClassSettings = () => {
    return <>
    <Wrapper>
            <label className='label' htmlFor="name">نام کلاس</label>
            <input id="name" className="input" type='text' placeholder=""/>

            <label className='label' htmlFor="id">شناسه کلاس</label>
            <input id="id" className="input" type='text' placeholder=""/>

            <label className='label' htmlFor="msg">پیام خوش‌آمد</label>
            <input id="msg" className="input" type='text' placeholder=""/>

            <label className='label' htmlFor="">حداکثر تعداد شرکت‌کنندگان</label>
            <input id="max-attendees" className="input" type='number' placeholder=""/>

            <label className='label' htmlFor="rec">قابلیت ضبط</label>
            <select id="rec" className='select'>
                <option value='true'>فعال</option>
                <option value='false'>غیرفعال</option>  
            </select>

            <label className='label' htmlFor="auto-rec">شروع خودکار ضبط</label>
            <select id="auto-rec" className='select'>
                <option value='true'>فعال</option>
                <option value='false'>غیرفعال</option>
            </select>

            <label className='label' htmlFor="pause-rec">توقف/ادامه ضبط</label>
            <select id="pause-rec" className='select'>
                <option value='true'>فعال</option>
                <option value='false'>غیرفعال</option>
            </select>

            <label className='label' htmlFor="duration">مدت زمان</label>
            <input id="duration" className="input" type='number' min={1} max={120} placeholder=""/>

            <label className='label' htmlFor="pm">پیام شرکت کننده</label>

            <select id="pm" className='select'>
                <option value='true'>فعال</option>
                <option value='false'>غیرفعال</option>
            </select>

            <label className='label' htmlFor="wc">وب‌کم شرکت کننده</label>

            <select id="wc" className='select'>
                <option value='true'>فعال</option>
                <option value='false'>غیرفعال</option>
            </select>
            <button className="button acc">ذخیره</button>
            <button className="button rej">نمی‌خوام</button>
            </Wrapper>
    </>
}

export default ClassSettings ;