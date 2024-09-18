import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

export const useFunctionOptions = () => {
  const [functionOptions, setFunctionOptions] = useState<OptionType[]>([]);
  const { loading, startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFunctionOptions = async () => {
      startLoading();
      try {
        const res = await fetch("/api/functions");
        const data = await res.json();
        setFunctionOptions(data);
      } catch (err) {
        setError("Failed to fetch function options");
      } finally {
        stopLoading();
      }
    };

    fetchFunctionOptions();
  }, [startLoading, stopLoading]);

  return { functionOptions, loading, error };
};
