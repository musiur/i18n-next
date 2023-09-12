import { getDictionary } from "@/app/[lang]/dictionaries";
import LangSwitch from "@/components/lang-switch";
import { ParamLang } from "@/types/types";
import Link from "next/link";

export default async function Home({ params }: ParamLang) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24">
      <h1
        className={`text-2xl md:text-5xl font-extrabold max-w-[800px] leading-normal md:leading-[3.5rem] text-center ${
          params.lang === "en" ? "text-blue-900" : "text-green-800"
        }`}
      >
        {dictionary.home.heading}
      </h1>
      <LangSwitch params={params} />
      <div className="flex items-center gap-5">
        <Link
          href="https://musiur-blog.vercel.app/i18n/internationalization"
          passHref={true}
          target="_blank"
          className="hover:underline text-blue-900 font-medium text-lg"
        >
          {dictionary.home.link1.toUpperCase()}
        </Link>{" "}
        |
        <Link
          href="https://github.com/musiur/i18n-next"
          passHref={true}
          target="_blank"
          className="hover:underline text-green-600 font-medium text-lg"
        >
          {dictionary.home.link2.toUpperCase()}
        </Link>
      </div>
    </main>
  );
}
