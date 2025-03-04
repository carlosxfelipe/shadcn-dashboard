import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "123456789".split(""); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
};

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              src="https://avatars.githubusercontent.com/u/85801709?s=400&u=01cce0318ea853ce1a133699bc6b2af1919094d6&v=4"
              alt="carlosxfelipe"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />

            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
