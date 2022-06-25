import type { AppProps } from "next/app";
import "@fontsource/poppins";
import "./../global.css";
import ContextMenu from "./custom/ContextMenu";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  NO_GROUP,
} from "kbar";
import { styled, getCssText } from "../stitches.config";

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

const MenuResults = styled(KBarAnimator, {
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  margin: 0,
  padding: "$4",
  borderRadius: "$4",
  fontSize: "$6",
  backgroundColor: "$loContrast",
  color: "$purple3",
});

const Result = styled("div", {});

const MenuSearch = styled(KBarSearch, {
  width: "60vw",
  padding: "$4",
  borderRadius: "$4",
  fontSize: "$6",
  backgroundColor: "$loContrast",
  color: "$hiContrast",
});

// const RenderResults = () => {
//   const { results } = useMatches();
//   return (
//     <MenuResults
//       items={results}
//       onRender={({ item, active }) =>
//         typeof item === "string" ? (
//           <div>{item}</div>
//         ) : (
//           <div
//             style={{
//               background: active ? "#eee" : "transparent",
//             }}
//           >
//             {item.name}
//           </div>
//         )
//       }
//     />
//   );
// };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <KBarProvider actions={[]}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator>
              <MenuSearch />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider> */}
      <ContextMenu>
        <Component {...pageProps} />
      </ContextMenu>
    </>
  );
}

export default MyApp;
