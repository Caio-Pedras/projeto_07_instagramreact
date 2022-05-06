export default function Sugestao ({sugestaoImg, sugestaoName, sugestaoReason}){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={sugestaoImg} />
                <div class="texto">
                    <div class="nome">{sugestaoName}</div>
                    <div class="razao">{sugestaoReason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}