import AllOptions from "./AllOptions"


export default function ScrollPrato() {

    return (
        <div className="content">
            <div className="scroll">
                    {alimentos.map((data) => {

                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}
            </div>
        </div>
    );
}