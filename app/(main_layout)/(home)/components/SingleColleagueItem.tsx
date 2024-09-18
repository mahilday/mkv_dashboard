import Button from "@/components/Button";
import IconComponent from "@/components/Icons/Icon";
import SearchableSelect from "@/components/Inputs/SearchableSelect";
import { ISingleItemType } from "./SingleGroupItem";
import { useColleagueOptions } from "@/app/api/hooks/useColleagueOptions";
import { useFunctionOptions } from "@/app/api/hooks/useFunctionOptions";

export type SingleDraftType = {
  id: string;
  function: string;
  colleague: string;
};

interface IProps extends Omit<ISingleItemType, "group"> {
  drafter: SingleDraftType;
}

const SingleColleagueItem = ({
  index,
  drafter,
  handleRemoveItem,
  handleFunctionChange,
  handleColleagueChange,
  count = 1,
}: IProps) => {
  const { functionOptions, loading: functionLoading } = useFunctionOptions();
  const { colleagueOptions, loading: colleagueLoading } = useColleagueOptions();
  return (
    <div className="flex items-center flex-wrap w-full gap-5">
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={functionOptions}
          onChange={handleFunctionChange}
          className="w-full"
          placeholder="Select Function"
          label="Function"
          isLoading={functionLoading}
          required
          isSearchable={true}
        />
      </div>
      <div className="flex-1 min-w-[200px]">
        <SearchableSelect
          options={colleagueOptions}
          onChange={handleColleagueChange}
          className="w-full"
          isLoading={colleagueLoading}
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
          className="xl:mt-2 px-3 py-2"
        >
          <IconComponent name="minus" />
        </Button>
      )}
    </div>
  );
};

export default SingleColleagueItem;
