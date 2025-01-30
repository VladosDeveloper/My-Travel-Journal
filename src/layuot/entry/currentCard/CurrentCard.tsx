import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import marker from "../../../images/marker.png";
import {S} from './CurrentCard.styles.ts'
import {CardDataType} from "../entryCard/EntryCard.tsx";

type CardProps = {
	cardsData: CardDataType
}


export const CurrentCard = ({cardsData}: CardProps) => {
	
	return (
		<S.EntryCard key={cardsData.id} id={`${cardsData.id}`}>
			<FlexWrapper>
				<S.CardIMage imageHeight={"180px"} imageWidth={"130px"} src={cardsData.img.src} alt={cardsData.img.alt}/>
				<S.CardBody>
					{/*	location */}
					<S.LocationList>
						<li><S.CardIMage imageHeight={"10px"} imageWidth={'8px'} src={marker} alt="Marker"/></li>
						<li><S.LocationText>{cardsData
							.country}</S.LocationText></li>
						<li><S.LocationLink href={cardsData
							.googleMapsLink}>Show on map</S.LocationLink></li>
					</S.LocationList>
					
					<S.CardTitle>{cardsData.title}</S.CardTitle>
					<S.CardText>{cardsData.dates}</S.CardText>
					<S.CardTextDescription>{cardsData.text}</S.CardTextDescription>
				</S.CardBody>
			</FlexWrapper>
		</S.EntryCard>
	);
};
