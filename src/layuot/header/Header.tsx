import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import globe from '../../images/globe.png'

export const Header = () => {
	return (
		<StyledHeader>
			
			<FlexWrapper justifyContent={"center"} alignItems={"center"} gap={"7px"} height="100%">
				<HeaderImage src={globe} alt="Global marker"/>
				<MainTitle>My travel journey</MainTitle>
			</FlexWrapper>
		
		</StyledHeader>
	);
};


const StyledHeader = styled.header`
	max-width: 550px;
	width: 100%;
	height: 55px;
	background-color: #F55A5A;
	border-radius: 5px 5px 0 0;
`

const HeaderImage = styled.img`
	width: 24px;
	object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1.2;
    color: #fff;
    text-transform: lowercase;
`