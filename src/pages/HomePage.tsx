import main from "../assets/main.jpg";
import Image from "../components/Image";
export default function HomePage() {
  return (
    <div>
      <Image source={main} alt="main banner image" />
    </div>
  );
}
