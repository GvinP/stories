import "react-native-get-random-values";

import StoriesContextProvider from "./src/contexts/StoriesContext";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <StoriesContextProvider>
      <Navigation />
    </StoriesContextProvider>
  );
}
