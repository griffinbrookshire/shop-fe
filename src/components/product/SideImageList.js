export default function SideImageList({images}) {

  const imagesMap = images.map( (image, idx) => ({ index: idx, image: image, selected: false}) )

  function SideImage({imageObj}) {

    function handleSideImageClick(event) {
      event.target.classList.toggle('border');
      event.target.classList.toggle('border-blue-400');
      event.target.classList.toggle('hover:border-blue-200');
      const found = imagesMap.find( (imageObj) => imageObj.selected )
      if (found){
        found.selected = false
        const currentSelectedImage = document.getElementById('side-image-list').children.item(found.index)
        currentSelectedImage.classList.toggle('border');
        currentSelectedImage.classList.toggle('border-blue-400');
        currentSelectedImage.classList.toggle('hover:border-blue-200');
      }
      imageObj.selected = true
    }

    return (
      <img src={imageObj.image} className='w-12 rounded hover:border hover:border-blue-200' onClick={handleSideImageClick} alt="product"></img>
    )
  }

  return (
    imagesMap.map( (imageObj, idx) => { return <SideImage key={idx} imageObj={imageObj}></SideImage> } )
  )

}