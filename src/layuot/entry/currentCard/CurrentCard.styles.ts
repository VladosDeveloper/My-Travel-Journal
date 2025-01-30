import styled from "styled-components";

type ImagePropsType = {
	imageHeight: string
	imageWidth: string
}

const EntryCard = styled.article`
    max-width: 470px;
    width: 100%;
    margin-top: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #F5F5F5;
`
const CardBody = styled.div`
    padding: 15px 0 15px 15px;
`
const LocationList = styled.div`
    display: flex;
    list-style: none;
    gap: 4px;
    margin-bottom: 7px;

    li:last-child {
        margin-left: 8px;
    }
`
const LocationText = styled.span`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.17em;
    color: #2b283a;
`
const LocationLink = styled.a`
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #918e9b;
`

const CardIMage = styled.img<ImagePropsType>`
    height: ${props => props.imageHeight};
	width: ${props => props.imageWidth};
	object-fit: cover;
	border-radius: 5px;
`


const CardTitle = styled.h2`
    font-weight: 700;
    font-size: 20px;
    color: #2b283a;
    margin-bottom: 15px;
`
const CardText = styled.p`
    font-weight: 700;
    font-size: 12px;
    color: #2b283a;
    margin-bottom: 10px;
`
const CardTextDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #2b283a;
`
export const S = {
	EntryCard,
	CardBody,
	LocationList,
	LocationText,
	LocationLink,
	CardIMage,
	CardTitle,
	CardText,
	CardTextDescription,
}