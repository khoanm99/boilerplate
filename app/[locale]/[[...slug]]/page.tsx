import { notFound } from "next/navigation";

interface IPageProps {
  params: {
    locale: string;
    slug: string[];
  };
}

const DynamicPage = ({ params }: IPageProps) => {
  const data = false;
  
  console.log(params);
  if (data) notFound();
  return <></>;
};

export default DynamicPage;
