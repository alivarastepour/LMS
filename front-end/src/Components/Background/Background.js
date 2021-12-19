import { Wrapper } from "./Background.styles"

const Background = ({component}) => {
    return <Wrapper>
        {component}
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
    </Wrapper>
}
export default Background;