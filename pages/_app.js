import { calibre, jetbrains_mono } from "public/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import Meta from "@/components/Meta/Meta";
import CursorGrid from "@/components/CursorGrid/CursorGrid";
import "../styles/globals.scss";
import { GTAG } from "constants";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <div
        className={`${calibre.variable} font-sans ${jetbrains_mono.variable} font-mono`}
      >
        {/* CursorGrid global overlay — fixed, full viewport, pointer-events none so it doesn't block clicks */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <CursorGrid
            cellSize={60}
            color="#7c3aed"
            radius={160}
            falloff="smooth"
            holdTime={500}
            fadeDuration={1000}
            lineWidth={1}
            maxOpacity={0.8}
            fillOpacity={0.05}
            gridOpacity={0.03}
            cellRadius={4}
            clickPulse={true}
            pulseSpeed={500}
          />
        </div>
        <div className="relative z-10">
          <Component {...pageProps} />
        </div>
        <GoogleAnalytics gaId={GTAG} />
      </div>
    </>
  );
};

export default App;
