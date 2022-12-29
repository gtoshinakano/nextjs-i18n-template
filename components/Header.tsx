import Head from "next/head";
import type { FC } from "react";

type Props = {
  heading: string;
  title: string;
};

export const Header: FC<Props> = ({ heading, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="w-full px-10 py-2 bg-sky-500 flex">
      <h1 className="grow">{heading}</h1>
      <a className="github" target="_blank" href="//github.com/gtoshinakano">
        <i className="typcn text-xl typcn-social-github-circular" />
      </a>
    </div>
  </>
);
