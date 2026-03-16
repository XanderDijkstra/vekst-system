import { useParams, Navigate } from "react-router-dom";
import { TRADE_PAGES } from "@/data/tradePages";
import TradePageTemplate from "./TradePageTemplate";

const TradePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  const tradeData = slug ? TRADE_PAGES[slug] : undefined;

  if (!tradeData) {
    return <Navigate to="/404" replace />;
  }

  return <TradePageTemplate data={tradeData} />;
};

export default TradePageWrapper;
