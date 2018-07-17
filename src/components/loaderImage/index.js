const LoaderImage = (component, imageUrl, seconds, success, failure) => {
    let timeoutOccured = false;
    const image = new Image();
    const timeout = setTimeout(() => {
      timeoutOccured = true;
      failure();
    }, seconds * 1000);
  
    image.onload = () => {
      clearTimeout(timeout);
      component.style.backgroundImage = `url('${imageUrl}')`;
      component.style.backgroundRepeat = `no-repeat`;
      component.style.backgroundSize= `100%`;
      if (!timeoutOccured) success();
    };
    image.src = imageUrl;
  };
  
  export default LoaderImage;