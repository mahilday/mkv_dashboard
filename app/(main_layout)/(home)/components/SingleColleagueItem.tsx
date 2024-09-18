import Button from "@/components/Button";
import IconComponent from "@/components/Icons/Icon";
import SearchableSelect from "@/components/Inputs/SearchableSelect";
import { NewDocType } from "@/types/document";
import { FormikErrors } from "formik";

type SingleDraftType = {
  function: string;
  colleague: string;
};

const SingleColleagueItem = ({
  index,
  drafter,
  handleRemoveItem,
  setFieldValue,
  count = 1,
}: {
  index: number;
  drafter: SingleDraftType;
  count?: number;
  handleRemoveItem?(item: SingleDraftType, index: number): void;
  setFieldValue: (
    field: string,
    value: string | number,
    shouldValidate?: boolean
  ) => Promise<void> | Promise<FormikErrors<NewDocType>>;
}) => {
  const functionOptions = [
    { label: "Manager", value: "Manager" },
    { label: "Developer", value: "Developer" },
    // Add more options as needed
  ];

  const colleagueOptions = [
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
  ];

  return (
    <div className="flex items-center flex-wrap w-full gap-5">
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={functionOptions}
          onChange={(value) =>
            setFieldValue(`drafters[${index}].function`, value?.value)
          }
          className="w-full"
          placeholder="Select Function"
          label="Function"
          required
          isSearchable={true}
        />
      </div>
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={colleagueOptions}
          onChange={(value) =>
            setFieldValue(`drafters[${index}].colleague`, value?.value)
          }
          className="w-full"
          placeholder="Select Colleague"
          required
          label="Colleague"
          isSearchable={true}
        />
      </div>

      {count > 1 && (
        <Button
          onClick={() => handleRemoveItem?.(drafter, index)}
          variant="error"
          className="px-3 py-2"
        >
          <IconComponent name="minus" />
        </Button>
      )}
    </div>
  );
};

export default SingleColleagueItem;
