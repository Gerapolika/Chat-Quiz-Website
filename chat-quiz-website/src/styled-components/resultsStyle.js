import styled from "styled-components";

export const Table = styled.table`
  height: 100px;
  width: 215px;
  margin: 10px 0 0 15px;
`

export const Thead = styled.thead`
  border: 1px solid #fff;
  height: 30px;
`

export const Tr = styled.tr`
  
`

export const Th = styled.th`
  color: #fff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.7em;
  `
  
  export const Th1 = styled(Th)`
  width: 90%;
  text-align: left;
  `
  
  export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  
  `

  export const Th2 = styled(Th)`
  max-height: 1em;
  font-size: 1em;
  font-weight: 400;
  `

  
  export const Photo = styled.img`
  -webkit-background-size: 20px 20px;
  background-size: 20px 20px;
  margin-right: 5px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  position: relative;
  height: 20px;
  width: 20x;
  z-index: 0;
  `
  
export const UserName = styled.p`
  color: #56bab7;
  align-items: center;
  font-size: 1.2em;
  font-weight: 400;
`
