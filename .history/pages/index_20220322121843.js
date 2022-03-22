import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage() {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("/api/events");
}
