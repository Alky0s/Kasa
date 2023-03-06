import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const House = () => {
    
    let { id } = useParams();
    console.log( { id});
  
   
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};

export default House;