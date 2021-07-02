import { useRef } from "react";

import LazyLoad from "react-lazyload";
import { ImageLazy, Placeholder } from "./styles";

const LazyImage: any = (src: string, alt: string) => {
  const refPlaceholder = useRef<any>();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <LazyLoad>
      <Placeholder ref={refPlaceholder} />
      <ImageLazy
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        src={src}
        alt={alt}
      />
    </LazyLoad>
  );
};


export default LazyImage;
