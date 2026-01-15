type ImageProps = {
  source: string;
  alt: string;
};

export default function Image({ source, alt }: ImageProps) {
  return (
    <img className="w-full h-[320px] object-contain" src={source} alt={alt} />
  );
}
