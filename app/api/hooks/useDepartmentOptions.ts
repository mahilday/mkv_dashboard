import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

export const useDepartmentOptions = () => {
  const [departmentOptions, setDepartmentOptions] = useState<OptionType[]>([]);
  const { startLoading, stopLoading, loading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartmentOptions = async () => {
      startLoading();
      try {
        const res = await fetch("/api/departments");
        const data = await res.json();

        setDepartmentOptions(data);
      } catch (err) {
        setError("Failed to fetch department options");
      } finally {
        stopLoading();
      }
    };

    fetchDepartmentOptions();
  }, [startLoading, stopLoading]);

  return { departmentOptions, loading, error };
};
