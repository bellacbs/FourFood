import styled from  'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 64px 0 80px 0;
`

export const ContainerList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5%;
    @media(max-device-width: 414px){
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
    }
`

export const ContainerCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    width: 100%;
    overflow: scroll;
`