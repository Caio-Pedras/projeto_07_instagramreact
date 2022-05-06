import Story from "./Story";
const storyVar=[
  {
  storyImg:"assets/img/9gag.svg",
  storyName:"9gag",
  },
  {
  storyImg:"assets/img/meowed.svg",
  storyName:"meowed",
  },
  {
  storyImg:"assets/img/barked.svg",
  storyName:"barked",
  },
  {
    storyImg:"assets/img/wawawicomics.svg",
    storyName:"wawawicomics",
  },
  {
    storyImg:"assets/img/nathanwpylestrangeplanet.svg",
    storyName:"nathanwpylestrangeplanet",
  },
  {
    storyImg:"assets/img/respondeai.svg",
    storyName:"respondeai",
  },
  {
    storyImg:"assets/img/filomoderna.svg",
    storyName:"filomoderna",
  },
  {
    storyImg:"assets/img/memeriagourmet.svg",
    storyName:"memeriagourmet",
  },
]
export default function Stories (){
    return (
        <div class="stories">
          {storyVar.map (({storyImg, storyName}) => (
            <Story
              storyImg = {storyImg}
              storyName = {storyName}
            />
          ))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

    )
}