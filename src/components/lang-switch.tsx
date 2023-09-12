import { ParamLang } from "@/types/types";
import Link from "next/link";

const LangSwitch = ({ params }: ParamLang) => {
  const langToSwitch = params.lang === "en" ? "bn" : "en";
  return (
    <Link href={`/${langToSwitch}`}>
      {params.lang ? (
        <div className="flex items-center justify-center gap-2">
          <div
            className={`${
              params.lang === "en" ? "text-blue-900" : "text-gray-400"
            }`}
          >
            English
          </div>
          <div
            className={`w-10 h-5 rounded-full relative shadow ${
              params.lang === "en" ? "bg-blue-900" : "bg-green-400"
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-5 h-5 rounded-full bg-white shadow-md transition ease-in-out ${
                params.lang === "en" ? "translate-x-0" : "translate-x-[100%]"
              }`}
            ></div>
          </div>
          <div
            className={`${
              params.lang === "bn" ? "text-green-900" : "text-gray-400"
            }`}
          >
            বাংলা
          </div>
        </div>
      ) : (
        "Switch"
      )}
    </Link>
  );
};

export default LangSwitch;
