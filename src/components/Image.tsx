type ImageProps = {
  source: string;
  alt: string;
};

export default function Image({ source, alt }: ImageProps) {
  return (
    <div>
      <img src={source} alt={alt} />
    </div>
  );
}
