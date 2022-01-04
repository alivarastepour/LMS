import { Wrapper } from "./ClassList.styles";

const CreateClass = () => {
    const obj = [
        {no:1,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:2,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:3,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:4,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:5,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:6,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:7,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:8,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:9,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:10,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:11,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:12,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:13,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:14,name:'سلام',instructor:'me', staus:'fucked up'},
        {no:15,name:'سلام',instructor:'me', staus:'fucked up'}
    ]
    return <>
        <Wrapper>
            <div className="flex-item item1">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="header">ردیف</td>
                            <td className="header">نام کلاس</td>
                            <td className="header">ارائه دهنده</td>
                            <td className="header">وضعیت</td>
                        </tr>
                    {
                        obj.map((e) => {
                            return <tr key={e.no}>
                                <td>{e.no}</td>
                                <td>{e.name}</td>
                                <td>{e.instructor}</td>
                                <td>{e.staus}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="flex-item item2">
                <input placeholder="برای افزودن کلاس نام کلاس را وارد کنید." id="input" className="input" type='text'/>
                <button className="button">افزودن</button>
            </div>
        </Wrapper>
    </>
}
export default CreateClass;