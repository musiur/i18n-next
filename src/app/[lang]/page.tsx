import { getDictionary } from "@/app/[lang]/dictionaries";
import LangSwitch from "@/components/lang-switch";
import { ParamLang } from "@/types/types";

export default async function Home({ params }: ParamLang) {
  const dictionary = await getDictionary(params.lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24">
      <h1 className="text-5xl font-extrabold text-blue-900 max-w-[800px] leading-[3.5rem] text-center">
        {dictionary.home.heading}
      </h1>
      <LangSwitch params={params} />
    </main>
  );
}
