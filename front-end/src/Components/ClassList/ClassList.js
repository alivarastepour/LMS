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
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <input placeholder="برای افزودن کلاس نام کلاس را وارد کنید." id="input" className="input" type='text'/>
                            </td>
                            <td>
                                <button className="button">افزودن</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="header">ردیف</td>
                            <td className="header">نام کلاس</td>
                            <td className="header">ارائه دهنده</td>
                        </tr>
                    {
                        obj.map((e) => {
                            return <tr key={e.no}>
                                <td>{e.no}</td>
                                <td>{e.name}</td>
                                <td>{e.instructor}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
        </Wrapper>
    </>
}

export default CreateClass;