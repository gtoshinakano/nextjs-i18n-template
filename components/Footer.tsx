import P from "components/P";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

export const Footer: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="text-center">
      <P>{t("description")}</P>
    </footer>
  );
};
