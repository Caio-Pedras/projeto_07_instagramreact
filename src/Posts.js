import Post from "./Post";
const postVar =  [{
  userImg:'assets/img/meowed.svg',
  userName: "meowed",
  contentImg:'assets/img/gato-telefone.svg',
  likeName:"respondeai",
  likeNumbers:"101.523",
  likeImg:"assets/img/respondeai.svg"
},
{
  userImg:'assets/img/barked.svg',
  userName: "barked",
  contentImg:'assets/img/dog.svg',
  likeName:"adorable_animals",
  likeNumbers:" 99.159",
  likeImg:"assets/img/adorable_animals.svg"
}]
export default function Posts (){
    return (
        <div class="posts">
          {postVar.map (({userImg, userName, contentImg, likeName, likeNumbers, likeImg}) => (
            <Post
              userImg={userImg}
              userName={userName}
              contentImg={contentImg}
              likeName={likeName}
              likeNumbers={likeNumbers}
              likeImg={likeImg} 
            />
          ))}
      </div>
    )
}