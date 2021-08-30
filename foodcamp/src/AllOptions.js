export default function AllOptions(props) {

    const {
        nomeAlimento,
        imagemAlimento,
        descricaoAlimento,
        preçoAlimento,
    } = props;

    return (
            <div class="food-box">
                <img class="food-img" 
                src={imagemAlimento} />
                <p class="food-name">{nomeAlimento}</p>
                <p class="description">{descricaoAlimento}</p>
                <p class="price">{preçoAlimento}</p>
            </div>
    );
}