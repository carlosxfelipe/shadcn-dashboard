import { payments } from "@/data/payments.data";

async function fetchData() {
  return payments;
}

export default async function Page() {
  const data = await fetchData();

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
