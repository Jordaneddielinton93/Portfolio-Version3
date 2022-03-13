import styled from "styled-components"
export const HomeStyled=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  background-color: #011c25;

	background-image: ${({bgColor})=>bgColor?"linear-gradient(43deg, #345e5d 0%, #857c58 30%, #dcb163 66%, #ffcc70 100%)":"background-image: linear-gradient(43deg,#255A60 0%, #011c25 33%, #01313f 66%, #024a6a 100%)"}
	;

  animation: gradient 15s ease infinite;
  background-size: 400% 400%;

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 20%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
