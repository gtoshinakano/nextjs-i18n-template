import { useRouter } from "next/router";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import P from "components/P";
import Code from "components/Code";
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

  const changeTo = router.locale === "en" ? "pt-BR" : "en";

  return (
    <>
      <main className="w-screen flex flex-col min-h-screen">
        <Header heading={t("h1")} title={t("title")} />
        <div className="mx-auto w-full max-w-6xl grow h-full">
          <h2 className="mt-4 mb-6 text-4xl font-bold">Git Tutorial</h2>
          <p>This guide will teach you how to start using Git. </p>
          <h3 className="text-3xl capitalize my-10">terminal basics</h3>
          <P>
            Create a new folder: <Code>mkdir folder_name</Code>
          </P>
          <P>
            Enter folder: <Code>cd folder_name</Code>
          </P>
          <P>
            Return one folder: <Code>cd ..</Code>
          </P>
          <P>
            See current folder contents: <Code>dir</Code> Windows or{" "}
            <Code>ls</Code> Linux Mac
          </P>
          <P>
            Terminal Shortcut 1: Use <Code>Tab</Code> key to auto complete known
            commands
          </P>
          <P>
            Terminal Shortcut 1: Paste copied text by right clicking on terminal
          </P>
          <h3 className="text-3xl capitalize my-10">create a new repository</h3>
          <P>
            Init a new repository in your folder: <Code>git init</Code>
          </P>
          <P>Continues..</P>
        </div>
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
