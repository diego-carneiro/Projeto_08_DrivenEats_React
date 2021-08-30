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
const bebidas = [
    {
        nomeAlimento: 'Refrigerante',
        imagemAlimento: '/img/refrigerante.jpg',
        descricaoAlimento: 'Coca-Cola original e zero',
        preçoAlimento: 'R$4,00',
    },
    {
        nomeAlimento: 'Cervejas',
        imagemAlimento: '/img/cerveja.jpg',
        descricaoAlimento: 'Heineken, Skol, Brahma, Eisenbahn, Budweiser, Amstel',
        preçoAlimento: 'R$3,00',
    },
    {
        nomeAlimento: 'Água',
        imagemAlimento: '/img/agua.jpg',
        descricaoAlimento: 'Mineral 600ml',
        preçoAlimento: 'R$2,00',
    },
    {
        nomeAlimento: 'Sucos',
        imagemAlimento: '/img/suco.jpg',
        descricaoAlimento: 'Kiwi, Maracujá e Goiaba',
        preçoAlimento: 'R$4,50',
    },
];
const sobremesas = [
    {
        nomeAlimento: 'Petit Gateau',
        imagemAlimento: '/img/petit.jpg',
        descricaoAlimento: 'Bolo de chocolate e sorvete de creme',
        preçoAlimento: 'R$9,00',
    },
    {
        nomeAlimento: 'Gelatina',
        imagemAlimento: '/img/gelatina.jpg',
        descricaoAlimento: 'Sabores Variados',
        preçoAlimento: 'R$4,50',
    },
    {
        nomeAlimento: 'Mousse de Maracujá',
        imagemAlimento: '/img/mousse.jpg',
        descricaoAlimento: 'Natural e com sementes',
        preçoAlimento: 'R$6,50',
    },
    {
        nomeAlimento: 'Trufas de Chocolate',
        imagemAlimento: '/img/trufa.jpg',
        descricaoAlimento: 'Morango, brigadeiro e doce de leite',
        preçoAlimento: 'R$2,00',
    },
];
export default function ScrollPrato() {

    return (
        <div className="content">
            <div class="text-box">
                <p class="chat">Primeiro, seu prato</p>
            </div>
            <div className="scroll">
                    {alimentos.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
            <div class="text-box">
            <p class="chat">Agora, sua bebida</p>
            </div>
            <div className="scroll">
                    {bebidas.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
            <div class="text-box">
                <p class="chat">Por fim, sua sobremesa</p>
            </div>
            <div className="scroll">
                    {sobremesas.map((data) => {
                        return <AllOptions nomeAlimento={data.nomeAlimento} imagemAlimento={data.imagemAlimento} descricaoAlimento={data.descricaoAlimento} preçoAlimento={data.preçoAlimento} />
                    })}     
            </div>
        </div>
    );
}