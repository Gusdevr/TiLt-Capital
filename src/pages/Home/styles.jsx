import styled from 'styled-components'

export const ContainerHome = styled.div`
 background-color: ${({ darkMode }) => (darkMode ? '#000' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#000')};
  height: 200vh;
  width: 100vw;
  
  
  


`

export const SectionMain = styled.div`
 
  

.aside-post{
    display: flex;
    margin-left: 1000px;

    .card {
    position: absolute;
    right: 374px;
    top: 205px;
    width: 275px;
    height: 100px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    }

    .card-two {
    position: absolute;
    right: 374px;
    top: 325px;
    width: 275px;
    height: 100px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    }

    .card-three {
    position: absolute;
    right: 374px;
    top: 447px;
    width: 275px;
    height: 103px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    }

    .animated-text {
  animation: slide-in 3s ease-in-out infinite;
  color: #090909;
  font-weight: 700;
  font-size: 18px;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-text-two {
  animation: slide-in 3.8s ease-in-out infinite;
  color: #090909;
  font-weight: 700;
  font-size: 18px;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-text-three {
  animation: slide-in 4s ease-in-out infinite;
  color: #090909;
  font-weight: 700;
  font-size: 18px;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
    
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

export const SectionSec = styled.div`
  .banner-main { 
    position: absolute;
    top: 900px;
    left: 398px;
    width: 1200px;
    height: 250px;
    border-radius: 15px;
    border: solid 2px white;
  

  }

  .art-sec {
   position: absolute;
   left: 400px;
   top: 1250px;
   
   h1 {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: 700;
   }

   h3 {
  position: relative;
  left: 530px;
  bottom: 280px;
  font-size: 22px;
  font-weight: 700;
    
   }

   p{
    position: relative;
    left: 530px;
    bottom: 255px;
   }

   button {
    position: relative;
    left: 530px;
    bottom: 230px;
    padding: 8px;
    width: 160px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #235784;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
   }
  }


 
`