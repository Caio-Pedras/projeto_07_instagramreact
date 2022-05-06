export default function Story ({storyImg, storyName}){
   return ( 
    <div class="story">
    <div class="imagem">
      <img src={storyImg} />
    </div>
    <div class="usuario">
      {storyName}
    </div>
  </div>
  )
}