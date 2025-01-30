import {CurrentCard} from "../currentCard/CurrentCard.tsx";



type CardDataPropsType = {
	cardData: CardDataType[]
}

export type CardDataType = {
	id: number,
	img: ImgDataType,
	title: string,
	country: string,
	googleMapsLink: string,
	dates: string,
	text: string,
}

type ImgDataType = {
	src: string
	alt: string
}


export const EntryCard = (props: CardDataPropsType) => {
	return (
		
		<>
			{props.cardData.map(card => {
				return <CurrentCard cardsData={{...card}}  />
			})}
		</>
	)
};

