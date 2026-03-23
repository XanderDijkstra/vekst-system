import { useParams, Navigate } from "react-router-dom";
import { SERVICE_PAGES } from "@/data/servicePages";
import ServicePageTemplate from "./ServicePageTemplate";

const ServicePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? SERVICE_PAGES[slug] : undefined;

  if (!data) {
    return <Navigate to="/404" replace />;
  }

  return <ServicePageTemplate data={data} />;
};

export default ServicePageWrapper;
