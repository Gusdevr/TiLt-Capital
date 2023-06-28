import styled from 'styled-components'

export const ContainerHome = styled.div`
 background-color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  height: 1080px;
  width: 1920px;



`

export const SectionMain = styled.div`
 
  

.aside-post{
    display: flex;
    margin-left: 1000px;
    
}

.art-main {
    display: flex;
    margin-left: 400px;

   h1 {
    position: absolute;
    margin-top: 150px;
    font-size: 35px;
   }

   .btn-sub {
        position: relative;
        top: 260px;
        right: 0px;
        width: 280px;
        height: 50px;
        border-radius: 5px;
        border: none;
        background-color: #235784;
        color: #fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        
        
    }

    p {
        position: relative;
        top: 330px;
        right: 200px;
        
    }

    .btn-goole {
        position: relative;
        right: 80px;
        top: 20px;
        width: 120px;
        height: 40px;
        text-align: center;
        border: none;
        border-radius: 5px;
        color: #090909;
        font-size: 13px;
        font-weight: 700;
        background-color: #d5d3d3;
        cursor: pointer;
       
    }

    .btn-apple {
        position: relative;
        left: -41px;
        top: 21px;
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 5px;
        color: #090909;
        font-weight: 700;
        font-size: 13px;
        background-color: #d5d3d3;
        cursor: pointer;
    }


}


    
`

export const ContainerCriptoData = styled.div`

    
`