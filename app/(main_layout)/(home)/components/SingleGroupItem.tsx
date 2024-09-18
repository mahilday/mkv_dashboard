import { useColleagueOptions } from "@/app/api/hooks/useColleagueOptions";
import { useFunctionOptions } from "@/app/api/hooks/useFunctionOptions";
import Button from "@/components/Button";
import IconComponent from "@/components/Icons/Icon";
import SearchableSelect, {
  OptionType,
} from "@/components/Inputs/SearchableSelect";

export type SingleGroupType = {
  id: string;
  department: string;
  subfolder: string;
};

export interface ISingleItemType {
  index: number;
  group: SingleGroupType;
  handleRemoveItem?<T>(item?: T, index?: number): void;
  count: number;
  handleFunctionChange?(value: OptionType): void;
  handleColleagueChange?(value: OptionType): void;
}

const SingleGroupItem = ({
  index,
  group,
  handleRemoveItem,
  handleColleagueChange,
  handleFunctionChange,
  count,
}: ISingleItemType) => {
  const { functionOptions, loading: functionLoading } = useFunctionOptions();
  const { colleagueOptions, loading: colleagueLoading } = useColleagueOptions();

  return (
    <div className="flex items-center flex-wrap w-full gap-5">
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={functionOptions}
          onChange={handleFunctionChange}
          className="w-full"
          isLoading={functionLoading}
          placeholder="Select Department"
          label="Department"
          required
          isSearchable={true}
        />
      </div>
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={colleagueOptions}
          onChange={handleColleagueChange}
          isLoading={colleagueLoading}
          className="w-full"
          placeholder="Select Sub folder"
          required
          label="Sub folder"
          isSearchable={true}
        />
      </div>

      {count > 1 && (
        <Button
          onClick={() => handleRemoveItem?.(group, index)}
          variant="error"
          className="xl:mt-2 px-3 py-2"
        >
          <IconComponent name="minus" />
        </Button>
      )}
    </div>
  );
};

export default SingleGroupItem;
