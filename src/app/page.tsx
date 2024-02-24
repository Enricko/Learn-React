import Image from "next/image";
import { Greet } from "./components/greet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet name="Enricko" messageCount={10} isLogin={true}/>
    </main>
  );
}
