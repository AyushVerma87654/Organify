interface DriftImageProps {
  src: string;
  alt: string;
  className?: string;
  transform: { x: number; y: number };
}

const DriftImage: React.FC<DriftImageProps> = ({
  src,
  alt,
  className = "",
  transform,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-transform ease-out`}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transitionDuration: "0.2s",
        willChange: "transform",
      }}
    />
  );
};

export default DriftImage;
