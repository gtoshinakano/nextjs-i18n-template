import type { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "react-i18next";

type Props = {
  heading: string;
  title: string;
};

export const Header: FC<Props> = ({ heading, title }) => {
  const router = useRouter();
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const { t } = useTranslation();

  const changeTo = router.locale === "en" ? "pt-BR" : "en";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full px-10 py-2 bg-purple-300 flex">
        <h1 className="grow font-semibold text-white text-lg">{heading}</h1>
        <a className="github" target="_blank" href="//github.com/gtoshinakano">
          <i className="typcn text-xl typcn-social-github-circular" />
        </a>
      </div>
      <div className="fixed bottom-0 right-0 m-10">
        <button
          className="px-3 py-2 bg-violet-300 rounded-lg text-white"
          onClick={() => onToggleLanguageClick(changeTo)}
        >
          {t("change-locale", { changeTo })}
        </button>
      </div>
    </>
  );
};
