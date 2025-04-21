import { useContext } from "react";
import Landing from "@/components/landing";
import { ThemeContext } from "@/context/theme-context";
import ThemeSwitch from "@/components/ui/theme-switch";

export default function Home() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeSwitch />
      </div>
      <Landing theme={currentTheme} />
    </>
  );
}
