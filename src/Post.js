import React from "react"
;

function PostUser (props){
return (
    <div class="usuario">
        <img src= {props.userImg}/>
        {props.userName}
    </div>
)
}
let iconName = "heart-outline"

export default function Post ({userImg, userName, contentImg, likeName, likeNumbers, likeImg}){
    const [like, setLike] = React.useState(iconName);
    function likePostIMG(like){
        if (like === "heart-outline") {
            setLike("heart")
        } 
    }
    function likePost(like){
        likePostIMG(like)
        if(like !=="heart-outline") {
            setLike ("heart-outline")
        }
    }
    
    return (
        <div class="post">
            <div class="topo">
                <PostUser userImg= {userImg} userName ={userName} />
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo" onClick={()=>likePostIMG(like)}>
                <img src= {contentImg}/>
            </div>
            <div class="fundo">
                <div class="acoes">
              <div>
                <ion-icon class={like} name={like} onClick={()=>likePost(like)}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
                </div>
                <div class="curtidas">
                    <img src={likeImg} />
                    <div class="texto">
                        Curtido por <strong>{likeName}</strong> e <strong>outras {likeNumbers} pessoas</strong>
                    </div>
                </div>
            </div>
        </div> 
    )
  }
  
  