import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type Props = {
  // Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "de" : "en";

  return (
    <>
      <main className="bg-black">
        <Header heading={t("h1")} title={t("title")} />
        <div className="w-full">asdas</div>
      </main>
      <Footer />
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});

export default Homepage;
