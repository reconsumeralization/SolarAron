import {
  ImgHTMLAttributes,
  useState,
} from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Image = ({ src, alt, className = '', width, height, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      } ${className}`}
      width={width}
      height={height}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
};
