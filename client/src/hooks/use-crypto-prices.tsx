import { useQuery } from "@tanstack/react-query";
import { getCryptoPrices, getArbitrageOpportunities } from "@/lib/crypto-api";

export function useCryptoPrices() {
  return useQuery({
    queryKey: ["/api/crypto/prices"],
    queryFn: getCryptoPrices,
    refetchInterval: 30000, // Refresh every 30 seconds
  });
}

export function useArbitrageOpportunities() {
  return useQuery({
    queryKey: ["/api/crypto/arbitrage"],
    queryFn: getArbitrageOpportunities,
    refetchInterval: 7000, // Refresh every 7 seconds
  });
}
