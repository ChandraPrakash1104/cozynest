import { redirect } from 'react-router-dom';
import Banner from './Banner/Banner';
import BrowseRange from './BrowseRange/BrowseRange';

const Home = () => {
  return (
    <main>
      <Banner />
      <section>
        <BrowseRange />
      </section>
    </main>
  );
};

export const loader = () => {
  return redirect('/home');
};
export default Home;
