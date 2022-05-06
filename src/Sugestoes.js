import Sugestao from "./Sugestao"
const sugestaoVar = [
    {
    sugestaoImg:"assets/img/bad.vibes.memes.svg", 
    sugestaoName:"bad.vibes.memes", 
    sugestaoReason:"Segue você",
    },
    {
    sugestaoImg:"assets/img/chibirdart.svg", 
    sugestaoName:"chibirdart", 
    sugestaoReason:"Segue você",    
    },
    {
    sugestaoImg:"assets/img/razoesparaacreditar.svg", 
    sugestaoName:"razoesparaacreditar", 
    sugestaoReason:"Novo no Instagram",    
    },
    {
    sugestaoImg:"assets/img/adorable_animals.svg", 
    sugestaoName:"adorable_animals", 
    sugestaoReason:"Segue você",    
    },
    {
    sugestaoImg:"assets/img/smallcutecats.svg", 
    sugestaoName:"smallcutecats", 
    sugestaoReason:"Segue você",    
    },
]
export default function Sugestoes (){
    return (        
    <div class="sugestoes">
        <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
        </div>
        {sugestaoVar.map (({sugestaoImg, sugestaoName, sugestaoReason}) => (
            <Sugestao
              sugestaoImg = {sugestaoImg}
              sugestaoName = {sugestaoName}
              sugestaoReason = {sugestaoReason}
            />
          ))}
  </div>)
}