import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <h1 className="text-6xl font-bold text-white mb-4">
        🎉 Happy Birthday Harkriat! 🎉
      </h1>
      <div className="text-2xl text-white text-center">
        <p className="mb-4">
          Wishing you a fantastic day filled with joy and laughter!
        </p>
        <p>🎂 May all your wishes come true! 🎈</p>
      </div>
    </div>
  );
}
