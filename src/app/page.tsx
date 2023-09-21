"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/en");
  return <div></div>;
};

export default Home;
