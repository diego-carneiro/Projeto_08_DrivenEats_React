import BarraTopo from "../src/BarraTopo";
import ScrollPrato from "./ScrollPrato"


export default function App() {

    return (
        <div>
            <BarraTopo />
            <div className="content">

            <ScrollPrato/>
                
            </div>
        </div>
    );
}