import Button from "@/components/Button";
import IconComponent from "@/components/Icons/Icon";
import SearchableSelect from "@/components/Inputs/SearchableSelect";
import { NewDocType } from "@/types/document";
import { FormikErrors } from "formik";

type SingleGroupType = {
  department: string;
  subfolder: string;
};

const SingleGroupItem = ({
  index,
  group,
  handleRemoveItem,
  setFieldValue,
  count,
}: {
  index: number;
  group: SingleGroupType;
  handleRemoveItem?(item: SingleGroupType, index: number): void;
  count: number;
  setFieldValue: (
    field: string,
    value: any,
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
          label="Department"
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
          label="Sub folder"
          isSearchable={true}
        />
      </div>

      {count > 1 && (
        <Button
          onClick={() => handleRemoveItem?.(group, index)}
          variant="error"
          className="px-3 py-2"
        >
          <IconComponent name="minus" />
        </Button>
      )}
    </div>
  );
};

export default SingleGroupItem;
