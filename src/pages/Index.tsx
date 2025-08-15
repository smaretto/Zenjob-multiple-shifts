import { useLocation, useParams } from "react-router-dom";
import DiscoveryScreen from "@/components/DiscoveryScreen";
import ReviewScreen from "@/components/ReviewScreen";
import CommitmentScreen from "@/components/CommitmentScreen";
import ConfirmationScreen from "@/components/ConfirmationScreen";

const Index = () => {
  const location = useLocation();
  const params = useParams();

  console.log("Current location:", location.pathname); // Debug log
  
  // Route to appropriate screen based on URL
  if (location.pathname === "/" || location.pathname === "/discovery") {
    return <DiscoveryScreen />;
  }
  
  if (location.pathname.startsWith("/job/")) {
    return <ReviewScreen />;
  }
  
  if (location.pathname.startsWith("/commitment/")) {
    return <CommitmentScreen />;
  }
  
  if (location.pathname.startsWith("/confirmation/")) {
    return <ConfirmationScreen />;
  }

  // Fallback
  return <DiscoveryScreen />;
};

export default Index;
