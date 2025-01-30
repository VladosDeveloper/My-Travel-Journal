import './App.css'
import {Header} from "./layuot/header/Header.tsx";
import {FlexWrapper} from "./components/FlexWrapper.tsx";
import {Entry} from "./layuot/entry/Entry.tsx";

function App() {
	
	return (
		<>
			<FlexWrapper direction={"column"} height={"100vh"} justifyContent={"center"} alignItems={"center"}>
				<Header/>
				<Entry/>
			</FlexWrapper>
		</>

	)
}


export default App
