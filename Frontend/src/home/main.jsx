import Left from "./Leftpart/main";
import Navbar from "./Nav/Navbar";
import Right from "./Rightpart/main";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Left />
      <Right />
    </div>
  );
}
