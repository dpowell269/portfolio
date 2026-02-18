import main from "../assets/main.jpg";
import Image from "../components/Image";
import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <div>
      <Image source={main} alt="main banner image" />

      <div className="flex justify-center mt-[20px]">
        <Counter />
      </div>
    </div>
  );
}
