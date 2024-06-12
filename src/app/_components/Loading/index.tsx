// loading/index.tsx
import { Wave } from "react-css-spinners";

function Loading() {
  return (
    <div style={styles.loaderContainer}>
      <Wave
        color="#111827"
        size={76}
        thickness={15}
      />
    </div>
  );
}

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100vh'
  },
}

export default Loading;
