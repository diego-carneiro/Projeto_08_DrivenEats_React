import AllOptions from "./AllOptions"

const alimentos = [
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Macarrão',
        imagemAlimento: '/img/macarrao.jpg',
        descricaoAlimento: 'Molho bechamel, brócolis e bacon',
        preçoAlimento: 'R$20,00',
    },
    {
        nomeAlimento: 'Feijoada Completa',
        imagemAlimento: '/img/feijoada.jpg',
        descricaoAlimento: 'Acompanha arroz e couve',
        preçoAlimento: 'R$20,00',
    },
    {
        nomeAlimento: 'Iscas de Frango',
        imagemAlimento: '/img/frango.jpg',
        descricaoAlimento: 'Empanado e Crocante',
        preçoAlimento: 'R$7,00',
    },
];
const alimentos21 = [
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temacufcghgvch',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
];
const alimentosx = [
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
    {
        nomeAlimento: 'Temaki',
        imagemAlimento: '/img/temaki.jpg',
        descricaoAlimento: 'Salmão com Shitake e Cebolinha',
        preçoAlimento: 'R$7.99',
    },
];
export default function ScrollPrato() {

    return (
        <div className="content">
            <div className="scroll">
                    {alimentos.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
            <div className="scroll">
                    {alimentos21.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
            <div className="scroll">
                    {alimentosx.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
        </div>
    );
}