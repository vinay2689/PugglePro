import { useContext } from "react";
import Landing from "@/components/landing";
import { ThemeContext } from "@/context/theme-context";

export default function Home() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <Landing theme={currentTheme} />
    </>
  );
}
