import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

export const useColleagueOptions = () => {
  const [colleagueOptions, setColleagueOptions] = useState<OptionType[]>([]);
  const { startLoading, stopLoading, loading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColleagueOptions = async () => {
      startLoading();
      try {
        const res = await fetch("/api/colleagues");
        const data = await res.json();

        setColleagueOptions(data);
      } catch (err) {
        setError("Failed to fetch colleague options");
      } finally {
        stopLoading();
      }
    };

    fetchColleagueOptions();
  }, [startLoading, stopLoading]);

  return { colleagueOptions, loading, error };
};
