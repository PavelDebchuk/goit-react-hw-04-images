import '../styles.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="Loader">
      <ThreeDots color="#303f9f" height={120} width={120} />
    </div>
  );
};

export default Loader;
