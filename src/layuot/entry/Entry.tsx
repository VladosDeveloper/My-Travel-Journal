import styled from "styled-components";
import {EntryCard} from "./entryCard/EntryCard.tsx";
import {cardsData} from "../../data.ts";



export const Entry = () => {
	
	return (
		<StyledEntry>
			<EntryCard cardData={cardsData}/>
		</StyledEntry>
	);
};

const StyledEntry = styled.section`
    max-width: 550px;
    width: 100%;
    max-height: 650px;
    background-color: #fff;
    padding: 0 40px;
    border-radius: 0 0 5px 5px;
    overflow: auto;

`
