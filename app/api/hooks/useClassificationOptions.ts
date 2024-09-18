import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

export const useClassificationOptions = () => {
  const [classificationOptions, setClassificationOptions] = useState<
    OptionType[]
  >([]);
  const { startLoading, stopLoading, loading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClassificationOptions = async () => {
      startLoading();
      try {
        const res = await fetch("/api/classification");
        const data = await res.json();

        setClassificationOptions(data);
      } catch (err) {
        setError("Failed to fetch classification options");
      } finally {
        stopLoading();
      }
    };

    fetchClassificationOptions();
  }, [startLoading, stopLoading]);

  return { classificationOptions, loading, error };
};
