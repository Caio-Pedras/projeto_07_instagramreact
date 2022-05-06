function PostUser (props){
return (
    <div class="usuario">
        <img src= {props.userImg}/>
        {props.userName}
    </div>
)
}
function PostContent (props){
    return (
        <div class="conteudo">
            <img src= {props.contentImg}/>
        </div>
    )
}
function PostLikes (props){
return (
    <div class="curtidas">
        <img src={props.likeImg} />
        <div class="texto">
            Curtido por <strong>{props.likeName}</strong> e <strong>outras {props.likeNumbers} pessoas</strong>
        </div>
    </div>
)
}


export default function Post ({userImg, userName, contentImg, likeName, likeNumbers, likeImg}){
    return (
        <div class="post">
            <div class="topo">
                <PostUser userImg= {userImg} userName ={userName}/>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <PostContent contentImg={contentImg} />  

            <div class="fundo">
                <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
                </div>
                <PostLikes likeName={likeName} likeNumbers={likeNumbers} likeImg={likeImg}/>
            </div>
        </div> 
    )
  }
  
  