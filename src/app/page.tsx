import Banner from "../components/banner";
import BaseLayout from "../components/baseLayout";
import Nav from "../components/nav";

export default function Home() {
  return (
    <BaseLayout>
      <Nav />
      <Banner />
    </BaseLayout>
  );
}
